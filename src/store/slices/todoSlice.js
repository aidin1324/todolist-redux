import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: 'all', 
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, setFilter } = todoSlice.actions;

export const selectTodos = state => {
  switch (state.filter) {
    case 'active':
      return state.todos.filter(todo => !todo.completed);
    case 'completed':
      return state.todos.filter(todo => todo.completed);
    default:
      return state.todos;
  }
};

export const selectFilter = state => state.filter;

export default todoSlice.reducer;