import { Button, Input } from '@/components/core';
import { Navbar } from '@/components/ui';
import { TODO } from '@/data';
import { CircleIcon } from 'lucide-react';
import { TodoItem } from './todo-item';
import { useColorTheme } from '@/hooks/useColorTheme';

export function Home() {
  const { data: theme } = useColorTheme();

  return (
    <>
      <header
        className={`h-[270px] ${
          theme === 'dark'
            ? "bg-[url('/images/bg-desktop-dark.jpg')]"
            : "bg-[url('/images/bg-desktop-light.jpg')]"
        } bg-cover`}
      >
        <div className="pt-14 container flex flex-col gap-7">
          <Navbar />

          <div className="relative">
            <CircleIcon className="absolute top-4 ml-5 text-gray-400" />
            <Input
              placeholder="Create a new todo..."
              className={`rounded-lg ${
                theme === 'dark' ? 'bg-veryDarkDesaturatedBlue' : 'bg-white'
              } pl-14`}
            />
          </div>
        </div>
      </header>

      <section className="container flex flex-col gap-5 -mt-7">
        <div
          className={`rounded-lg ${theme === 'dark' ? 'bg-veryDarkDesaturatedBlue' : 'bg-white'}`}
        >
          <div className={`todo-list flex flex-col`}>
            {TODO.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>

          <div className="p-5 flex items-center justify-between gap-5">
            <span className="">5 items left</span>

            <div className="hidden lg:flex gap-5">
              <button className="">All</button>
              <button className="">Active</button>
              <button className="">Completed</button>
            </div>

            <Button variant={'ghost'}>Clear Completed</Button>
          </div>
        </div>

        <div className="flex lg:hidden justify-around gap-5">
          <Button variant={'ghost'} className="">
            All
          </Button>
          <Button variant={'ghost'} className="">
            Active
          </Button>
          <Button variant={'ghost'} className="">
            Completed
          </Button>
        </div>
      </section>
    </>
  );
}
