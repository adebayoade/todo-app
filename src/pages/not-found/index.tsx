import { TriangleAlertIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <main className="py-32 container h-full">
      <div className="flex items-center flex-col gap-5">
        <TriangleAlertIcon size={30} className="text-yellow-500 text-6xl" />
        <h1 className="title text-center">The requested page can not be found!</h1>
        <span className="leading-text text-center">
          Click{' '}
          <Link className="text-primary hover:underline" to={'/'}>
            Here
          </Link>{' '}
          to go back to the home page
        </span>
      </div>
    </main>
  );
}
