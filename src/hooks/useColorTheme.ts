import { ThemeProviderContext } from '@/providers/theme-provider';
import { useContext } from 'react';

export const useColorTheme = () => {
  const { theme } = useContext(ThemeProviderContext);
  let data = theme;

  if (data === 'system') {
    data = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return { data };
};
