import { format } from "date-fns";
import { DATE_FORMAT_MASK, LOCAL_STORAGE_TASKS_KEY } from "../constants/todo";

export const getDefaultTasks = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) ?? [];

const generateTaskId = (allTasks) =>
  (allTasks[allTasks.length - 1]?.id ?? 0) + 1;

export const generateTask = (task, allTasks) => ({
  ...task,
  id: generateTaskId(allTasks),
  date: format(new Date(task.date), DATE_FORMAT_MASK),
});
