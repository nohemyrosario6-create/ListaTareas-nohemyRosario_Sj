import type { FC } from 'react';

interface Props {
  completed: boolean;
}

export const StatusBadge: FC<Props> = ({ completed }) => {
  return (
    <span className={completed ? 'status-badge completed' : 'status-badge pending'}>
      {completed ? 'Completada' : 'Pendiente'}
    </span>
  );
};
