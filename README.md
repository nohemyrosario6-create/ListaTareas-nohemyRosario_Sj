# Mi Lista de Tareas (To-Do List)

Proyecto hecho con React + TypeScript + Vite, siguiendo el mismo estilo del
proyecto de gifs (componentes chiquitos, hooks personalizados, tipado
estricto).

## Cómo correrlo

```bash
npm install
npm run dev
```

## Estructura

```
src/
├── types/
│   └── task.ts          # Interface Task y tipo FilterType
├── hooks/
│   └── useTasks.ts      # Toda la lógica: agregar, borrar, filtrar
├── components/
│   ├── TodoHeader.tsx
│   ├── TaskInput.tsx
│   ├── FilterTabs.tsx
│   ├── TaskList.tsx
│   ├── TaskItem.tsx
│   └── StatusBadge.tsx
├── TodoApp.tsx           # Componente principal, arma todo
├── main.tsx
└── style.css
```

## Nota

El buscador (SearchBar) todavía no está implementado, queda pendiente para
una siguiente iteración.
