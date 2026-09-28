import type { FC } from 'react';
import type { Task } from '../types/task';
import { StatusBadge } from './StatusBadge';

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: FC<Props> = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span className={task.completed ? 'task-title completed' : 'task-title'}>
        {task.title}
      </span>

      <StatusBadge completed={task.completed} />

      <button className="icon-btn check" onClick={() => onToggle(task.id)}>
        ✓
      </button>
      <button className="icon-btn delete" onClick={() => onDelete(task.id)}>
        🗑
      </button>
    </div>
  );
};
