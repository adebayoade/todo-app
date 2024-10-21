import { TODO } from '@/data';
import { Todo } from '@/types';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define types for filter and state
export type Filter = 'all' | 'active' | 'completed';

export type TodoState = {
  value: Todo[];
  filter: Filter;
};

// Initial state
const initialState: TodoState = {
  value: TODO,
  filter: 'all',
};

// Slice
const todoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Add a new todo item
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.value.push(action.payload);
    },
    // Delete a todo item by id
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(todo => todo.id !== action.payload);
    },
    // Mark a todo as completed by id
    markCompleted: (state, action: PayloadAction<number>) => {
      const todo = state.value.find(todo => todo.id === action.payload);
      if (todo) {
        todo.status = 'completed'; // Update the status directly
      }
    },
    // Clear all todo items
    clearAllTodos: state => {
      state.value = [];
    },
    // Set the current filter
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    // Clear only the completed todos
    clearCompletedTodos: state => {
      state.value = state.value.filter(todo => todo.status !== 'completed');
    },
  },
});

// Selector to get the number of active todos
export const selectPendingTodos = createSelector(
  (state: { todos: TodoState }) => state.todos.value,
  todos => {
    return todos.filter(todo => todo.status === 'active').length;
  }
);

// Selector to get the todos based on the current filter
export const selectFilteredTodos = createSelector(
  (state: { todos: TodoState }) => state.todos.value,
  (state: { todos: TodoState }) => state.todos.filter,
  (todos, filter) => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => todo.status === 'active');
      case 'completed':
        return todos.filter(todo => todo.status === 'completed');
      default:
        return todos;
    }
  }
);

// Export actions and reducer
export const { addTodo, deleteTodo, markCompleted, clearAllTodos, clearCompletedTodos, setFilter } =
  todoReducer.actions;

export default todoReducer.reducer;
