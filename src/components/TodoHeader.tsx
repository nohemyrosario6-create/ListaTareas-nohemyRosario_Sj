export const TodoHeader = () => {
  return (
    <div className="todo-header">
      <div className="todo-header-icon">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path
            d="M5 12l4 4 10-10"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1>Mi Lista de Tareas</h1>
    </div>
  );
};
