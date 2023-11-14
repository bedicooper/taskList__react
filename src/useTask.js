import { useLocalStorageState } from "./useLocalStorageState";

export const useTask = () => {
  const [tasks, setTasks] = useLocalStorageState("tasks", []);

  return {

  };
};
