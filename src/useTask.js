import { useLocalStorageState } from "./useLocalStorageState";

export const useTask = () => {
  const [tasks, setTasks] = useLocalStorageState("tasks", []);

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

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
    tasks,
    deleteTask,
    toggleTaskDone,
    markAllTasksAsDone,
    addNewTask,
  };
};
