import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { ThemeProvider } from './providers/theme-provider';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter(routes);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
