import { Button } from '@/components/core';
import { Icon } from '@/components/icons';
import { deleteTodo, markCompleted } from '@/store/slice/todo';
import { Todo } from '@/types';
import { CheckIcon, CircleIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';

type TodoItemProp = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProp) {
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    try {
      dispatch(deleteTodo(id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleMarkCompleted = (id: number) => {
    try {
      dispatch(markCompleted(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="todo-item flex justify-between gap-5 p-5 border-b">
      <div className="flex w-max items-center gap-5 overflow-hidden">
        <div>
          {todo.status == 'active' ? (
            <CircleIcon className="text-gray-300" size={31} />
          ) : todo.status == 'completed' ? (
            // <Icon.Check />
            <CheckIcon
              className="bg-[linear-gradient(hsl(192,100%,67%),hsl(280,87%,65%))] rounded-full text-white"
              size={31}
            />
          ) : (
            ''
          )}
        </div>

        <Button
          variant="link"
          onClick={() => {
            handleMarkCompleted(todo.id);
          }}
          className={`${
            todo.status === 'completed' && 'line-through text-gray-500 pointer-events-none'
          } overflow-hidden`}
        >
          <span className="overflow-hidden text-ellipsis">{todo.title}</span>

          {/* {todo.title} */}
        </Button>
      </div>

      <Button
        variant={'ghost'}
        onClick={() => {
          handleDelete(todo.id);
        }}
        size={'icon'}
      >
        {/* <XIcon /> */}
        <Icon.Cross />
      </Button>
    </div>
  );
}
