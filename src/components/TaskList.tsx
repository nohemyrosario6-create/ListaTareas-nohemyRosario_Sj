import type { FC } from 'react';
import type { Task } from '../types/task';
import { TaskItem } from './TaskItem';

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskList: FC<Props> = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) {
    return <p className="empty-state">No hay tareas para mostrar.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
};
