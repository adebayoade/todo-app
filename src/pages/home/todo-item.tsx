import { Todo } from '@/types';
import { CircleCheckIcon, CircleIcon, XIcon } from 'lucide-react';

type TodoItemProp = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProp) {
  return (
    <div className="todo-item flex justify-between gap-5 p-5 border-b">
      <div className="flex gap-5">
        {todo.status == 'pending' ? (
          <CircleIcon />
        ) : todo.status == 'completed' ? (
          <CircleCheckIcon />
        ) : (
          ''
        )}

        <button className={`${todo.status === 'completed' && 'line-through text-gray-500'}`}>
          {todo.title}
        </button>
      </div>

      <button>
        <XIcon />
      </button>
    </div>
  );
}
