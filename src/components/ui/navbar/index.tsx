import { ModeToggle } from '../../ui';
import { Logo } from '../logo';

export function Navbar() {
  return (
    <nav className="py-4 shadow-sm">
      <div className="items-center justify-between flex gap-5">
        <Logo />

        <ModeToggle />
      </div>
    </nav>
  );
}
