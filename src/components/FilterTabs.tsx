import type { FC } from 'react';
import type { FilterType } from '../types/task';

interface Props {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendientes' },
  { value: 'completed', label: 'Completadas' },
];

export const FilterTabs: FC<Props> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="filter-tabs">
      {filters.map((f) => (
        <button
          key={f.value}
          className={currentFilter === f.value ? 'filter-tab active' : 'filter-tab'}
          onClick={() => onFilterChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};
