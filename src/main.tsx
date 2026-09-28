import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TodoApp } from './TodoApp';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp />
  </StrictMode>
);
