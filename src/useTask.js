import { useLocalStorageState } from "./useLocalStorageState";

export const useTask = () => {
  const [tasks, setTasks] = useLocalStorageState("tasks", []);

  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return {
    deleteTask,
  };
};
