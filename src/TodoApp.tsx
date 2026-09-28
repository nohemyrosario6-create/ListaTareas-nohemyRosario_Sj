import { TodoHeader } from './components/TodoHeader';
import { TaskInput } from './components/TaskInput';
import { FilterTabs } from './components/FilterTabs';
import { TaskList } from './components/TaskList';
import { useTasks } from './hooks/useTasks';

export const TodoApp = () => {
  const { tasks, filter, setFilter, addTask, toggleTask, deleteTask } = useTasks();

  return (
    <div className="todo-card">
      <TodoHeader />
      <TaskInput onAddTask={addTask} />
      <FilterTabs currentFilter={filter} onFilterChange={setFilter} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};
