import { useState } from 'react';
import type { Task, FilterType } from '../types/task';

const initialTasks: Task[] = [
  { id: '1', title: 'Estudiar para la clase de tecnologias web', completed: false },
  { id: '2', title: 'Hacer los ejercicios pendientes', completed: false },
  { id: '3', title: 'Cocinar', completed: false },
  { id: '4', title: 'Lavar los platos', completed: true },
];

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<FilterType>('all');

  const addTask = (title: string) => {
    const cleanTitle = title.trim();
    if (cleanTitle.length === 0) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: cleanTitle,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
  };
};
