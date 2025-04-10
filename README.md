# Todo App with Redux Toolkit

A feature-complete Todo application built with React, Redux Toolkit, and Redux Persist. This application allows users to manage tasks with persistence across page reloads.


![image](https://github.com/user-attachments/assets/3cc6c82b-cf3b-411e-a575-41455da10738)
![image](https://github.com/user-attachments/assets/f94a3b8d-d42b-4e3d-92e7-100ca6cb8073)
![image](https://github.com/user-attachments/assets/6ccec6dd-01b0-4d08-99c9-fea26cf6b0e3)


---

## Assignment Requirements

### Functional Requirements

- **✅ Task Addition**
    - Text input through a form.
    - "Add" button adds tasks to the list.
    - New tasks appear at the beginning of the list.
    - Input field clears after adding.

- **✅ Task Display**
    - Each task displays with text and a checkbox.
    - Clicking the checkbox marks the task as completed.
    - Completed tasks display with a strikethrough.

- **✅ Task Deletion**
    - Each task has a "Delete" button.
    - Clicking the button removes the task.

- **✅ Task Filtering**
    - Three filter buttons: "All", "Active", "Completed".
    - "All" filter is active by default.
    - Filtering is implemented through the Redux store.

- **✅ State Persistence**
    - Redux Persist configuration ensures:
        - Tasks and selected filter persist after page reload.

---

### Technical Requirements

- **✅ React + Redux Toolkit**
    - Used `createSlice` for task management.
    - Properly set up the Redux store.

- **✅ Redux Persist Integration**
    - State is saved to `localStorage`.
    - No direct `localStorage` access in components.

- **✅ React-Redux Hooks**
    - Used `useSelector` and `useDispatch`.
    - No local `useState` for task list or filter.

- **✅ UI Implementation**
    - Styled with Tailwind CSS.
    - Responsive design.
    - Dark mode support.

---

## Implementation Details

### Redux Store Structure

The application uses a single slice with the following state:

- `todos`: Array of todo objects with `id`, `text`, and `completed` status.
- `filter`: Current active filter (`'all'`, `'active'`, or `'completed'`).

### Components

- **TodoForm**: Handles task creation with input validation.
- **TodoItems**: Renders the list of tasks with completion toggle and delete functionality.
- **TodoFilters**: Manages filtering between all, active, and completed tasks.

### Data Persistence

Redux Persist is configured to save the entire state to `localStorage`, ensuring tasks and filter selection remain after page reload.

---

## Getting Started

Visit [http://localhost:5173](http://localhost:5173) to view the application.
