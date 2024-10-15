import { Footer } from '@/components/ui';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
