import { Button, Input } from '@/components/core';
import { Navbar } from '@/components/ui';
import { CircleIcon } from 'lucide-react';
import { TodoItem } from './todo-item';
import { useColorTheme } from '@/hooks/useColorTheme';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import {
  addTodo,
  clearCompletedTodos,
  selectFilteredTodos,
  selectPendingTodos,
  setFilter,
  Filter,
} from '@/store/slice/todo';
import { Todo } from '@/types';
import { useState } from 'react';

export function Home() {
  const [newTask, setNewTask] = useState<Todo | null>();
  const { data: theme } = useColorTheme();
  const todos = useSelector(selectFilteredTodos);
  const filter = useSelector((state: RootState) => state.todos.filter);
  const pendingTodos = useSelector(selectPendingTodos);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(addTodo(newTask));
    } catch (error) {
      console.log(error);
    } finally {
      setNewTask(null);
    }
  };

  const handleClearTodos = () => {
    try {
      dispatch(clearCompletedTodos());
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = (newFilter: Filter) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <>
      <header
        className={`h-[270px] ${
          theme === 'dark'
            ? "bg-[url('/images/bg-desktop-dark.jpg')]"
            : "bg-[url('/images/bg-desktop-light.jpg')]"
        } bg-cover`}
      >
        <div className="pt-14 container max-w-[750px] flex flex-col gap-7">
          <Navbar />

          <form onSubmit={handleSubmit} className="relative">
            <CircleIcon size={31} className="absolute top-4 ml-5 text-gray-300" />
            <Input
              value={newTask ? newTask.title : ''}
              onChange={e =>
                setNewTask({
                  id: Math.floor(Math.random() * 1000) + 1,
                  title: e.target.value,
                  status: 'active',
                })
              }
              placeholder="Create a new todo..."
              className={`rounded-lg ${
                theme === 'dark' ? 'bg-veryDarkDesaturatedBlue' : 'bg-white'
              } pl-[85px]`}
            />
          </form>
        </div>
      </header>

      <section className="container max-w-[750px] flex flex-col gap-5 -mt-7">
        <div
          className={`rounded-lg ${theme === 'dark' ? 'bg-veryDarkDesaturatedBlue' : 'bg-white'}`}
        >
          <div className={`todo-list flex flex-col`}>
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>

          <div className="text-darkGrayishBlue p-5 flex items-center justify-between gap-5">
            <span>
              {pendingTodos || 0} {pendingTodos > 0 ? 'items' : 'item'} left
            </span>

            <div className="hidden lg:flex gap-1">
              <Button
                onClick={() => handleFilterChange('all')}
                disabled={filter === 'all'}
                variant={'ghost'}
                className={`${filter === 'all' && 'text-primary'}`}
              >
                All
              </Button>
              <Button
                onClick={() => handleFilterChange('active')}
                disabled={filter === 'active'}
                variant={'ghost'}
                className={`${filter === 'active' && 'text-primary'}`}
              >
                Active
              </Button>
              <Button
                onClick={() => handleFilterChange('completed')}
                disabled={filter === 'completed'}
                variant={'ghost'}
                className={`${filter === 'completed' && 'text-primary'}`}
              >
                Completed
              </Button>
            </div>

            <Button onClick={() => handleClearTodos()} variant={'ghost'}>
              Clear Completed
            </Button>
          </div>
        </div>

        <div
          className={`rounded-lg p-3 flex lg:hidden justify-evenly gap-0 ${
            theme === 'dark' ? 'bg-veryDarkDesaturatedBlue' : 'bg-white'
          }`}
        >
          <Button
            onClick={() => handleFilterChange('all')}
            disabled={filter === 'all'}
            variant={'ghost'}
          >
            All
          </Button>
          <Button
            onClick={() => handleFilterChange('active')}
            disabled={filter === 'active'}
            variant={'ghost'}
          >
            Active
          </Button>
          <Button
            onClick={() => handleFilterChange('completed')}
            disabled={filter === 'completed'}
            variant={'ghost'}
          >
            Completed
          </Button>
        </div>
      </section>
    </>
  );
}
