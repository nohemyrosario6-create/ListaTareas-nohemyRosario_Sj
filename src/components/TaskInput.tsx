import { useState, type FC } from 'react';

interface Props {
  onAddTask: (title: string) => void;
}

export const TaskInput: FC<Props> = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleAddClick = () => {
    onAddTask(text);
    setText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAddClick();
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddClick}>Agregar</button>
    </div>
  );
};
