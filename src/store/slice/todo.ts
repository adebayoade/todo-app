import { TODO } from '@/data';
import { Todo } from '@/types';
import { createSelector, createSlice } from '@reduxjs/toolkit';

export type Filter = 'all' | 'pending' | 'completed';

export type TodoState = {
  value: Todo[];
  filter: Filter;
};

const initialState: TodoState = {
  value: TODO,
  filter: 'all',
};

const todoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter(todo => todo.id !== action.payload);
    },
    // markCompleted: (state, action) => {
    //   const index = state.value.findIndex(todos => todos.id === action.payload.id);

    //   if (index !== -1) {
    //     const updated = state.value[index];
    //     updated.status = 'completed';

    //     state.value[index] = updated;
    //   }
    // },
    markCompleted: (state, action) => {
      const todo = state.value.find(todo => todo.id === action.payload);
      if (todo) {
        todo.status = 'completed'; // Directly mutate the status of the found todo
      }
    },
    clearAllTodos: state => {
      state.value = [];
    },
    setFilter: (state, action) => {
      state.filter = action.payload; // Update filter value
    },
    clearCompletedTodos: state => {
      state.value = state.value.filter(todo => todo.status !== 'completed');
    },
  },
});

// Selector to get pending todos
export const selectPendingTodos = createSelector(
  (state: { todos: TodoState }) => state.todos.value,
  todos => todos.filter(todo => todo.status === 'pending').length
);

// Selector to get filtered todos based on the current filter
export const selectFilteredTodos = createSelector(
  (state: { todos: TodoState }) => state.todos.value,
  (state: { todos: TodoState }) => state.todos.filter,
  (todos, filter) => {
    if (filter === 'pending') {
      return todos.filter(todo => todo.status === 'pending');
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.status === 'completed');
    }
    return todos; // If filter is 'all'
  }
);

export const { addTodo, deleteTodo, markCompleted, clearAllTodos, clearCompletedTodos, setFilter } =
  todoReducer.actions;

export default todoReducer.reducer;
