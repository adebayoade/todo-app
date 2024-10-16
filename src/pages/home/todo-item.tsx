import { Button } from '@/components/core';
import { deleteTodo, markCompleted } from '@/store/slice/todo';
import { Todo } from '@/types';
import { CircleCheckIcon, CircleIcon, XIcon } from 'lucide-react';
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
      <div className="flex items-center gap-5">
        {todo.status == 'pending' ? (
          <CircleIcon />
        ) : todo.status == 'completed' ? (
          <CircleCheckIcon />
        ) : (
          ''
        )}

        <Button
          variant="link"
          onClick={() => {
            handleMarkCompleted(todo.id);
          }}
          className={`${
            todo.status === 'completed' && 'line-through text-gray-500 pointer-events-none'
          }`}
        >
          {todo.title}
        </Button>
      </div>

      <Button
        variant={'ghost'}
        onClick={() => {
          handleDelete(todo.id);
        }}
      >
        <XIcon />
      </Button>
    </div>
  );
}
