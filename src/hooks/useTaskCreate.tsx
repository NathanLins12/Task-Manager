import { useMutation } from "@tanstack/react-query";
import { TaskDataTypes } from "../components/TaskCard";
import { API } from "../configs/api";

async function createTask(task: TaskDataTypes) {
  const { title, description, date, status } = task;
  return await API.post("/task", { title, description, date, status });
}

export function usetaskCreate() {
  const mutate = useMutation({
    mutationFn: createTask,
    onSuccess: (response) => {
      if (response.status == 201) {
        alert("Tarefa criada!");
      }
    },
    onError: (error) => {
      console.error(error);

      alert("Erro ao criar tarefa!");
    },
  });

  return mutate;
}
