import { useMutation } from "@tanstack/react-query";
import { TaskDataTypes } from "../components/TaskCard";
import { API } from "../configs/api";

async function updateTask(task: TaskDataTypes) {
  const { id, title, description, date, status } = task;
  return await API.put(`/task/${id}`, { title, description, date, status });
}

export function usetaskUpdate() {
  const mutate = useMutation({
    mutationFn: updateTask,
    onSuccess: (response) => {
      if (response.status == 201) {
        alert("Tarefa atualizada!");
      }
    },
    onError: (error) => {
      alert("Erro ao atualizar tarefa!");
    },
  });

  return mutate;
}
