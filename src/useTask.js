import { useLocalStorageState } from "./useLocalStorageState";

export const useTask = () => {
  const [tasks, setTasks] = useLocalStorageState("tasks", []);

  const markAllTasksAsDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })))
  };

  const deleteTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }))
  };

  return {
    deleteTask,
    toggleTaskDone,
    markAllTasksAsDone,
  };
};
