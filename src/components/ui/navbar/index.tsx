import { ModeToggle } from '../mode-toggle';

export function Navbar() {
  return (
    <nav className="mt-5 py-4 shadow-sm">
      <div className="container justify-between flex gap-5">
        <h2 className="text-2xl font-semibold">Where in the world?</h2>

        <ModeToggle />
      </div>
    </nav>
  );
}
