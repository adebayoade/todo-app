import { Footer, Navbar } from '@/components/ui';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
