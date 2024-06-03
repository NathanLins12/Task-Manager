import { PropsWithChildren, createContext, useState } from "react";
import { API } from "../configs/api";

export type signInTypes = {
  email: string;
  password: string;
};

export type signUpTypes = {
  name: string;
  email: string;
  password: string;
};

type AuthContextTypes = {
  signIn: (params: signInTypes) => Promise<boolean | void>;
  signUp: (params: signUpTypes) => Promise<boolean | void>;
  isLoading: boolean;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextTypes);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(false);

  async function signIn({ email, password }: signInTypes) {
    if (!email || !password) throw alert("Por favor informar email e senha!");

    setIsLoading(true);

    return API.post("/login", { email, password })
      .then((response) => {
        const userID = { userID: response.data.id };

        localStorage.setItem("@Task_Manager:user", JSON.stringify(userID));
        return true;
      })
      .catch((error) => {
        if (error.reponse) {
          alert(error.response.data.message);
        } else {
          alert("Ocorreu um erro inesperado no login!");
        }

        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function signUp({ name, email, password }: signUpTypes) {
    if (!name || !email || !password)
      throw alert("Por favor informar nome, email e senha!");

    setIsLoading(true);

    return API.post("/user", { name, email, password })
      .then((response) => {
        alert(response?.data.message);

        return true;
      })
      .catch((error) => {
        if (error.reponse) {
          alert(error.response.data.message);
        } else {
          alert("Ocorreu um erro ao criar o usuário!");
        }

        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function signOut() {
    localStorage.removeItem("@Task_Manager:user");
  }

  return (
    <AuthContext.Provider value={{ signIn, isLoading, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
