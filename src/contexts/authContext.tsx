import { PropsWithChildren, createContext } from "react";
import { API } from "../configs/api";

export type signInTypes = {
  email: string;
  password: string;
};

type AuthContextTypes = {
  signIn: (params: signInTypes) => Promise<boolean | void>;
};

export const AuthContext = createContext({} as AuthContextTypes);

export function AuthProvider({ children }: PropsWithChildren) {
  async function signIn({ email, password }: signInTypes) {
    if (!email || !password) throw alert("Por favor informar email e senha!");

    return API.post("/login", { email, password })
      .then((res) => {
        console.log({ userID: res.data.id });
        return true;
      })
      .catch((error) => {
        if (error.reponse) {
          alert(error.response.data.message);
        } else {
          alert("Ocorreu um erro inesperado no login!");
        }
      });
  }

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
}
