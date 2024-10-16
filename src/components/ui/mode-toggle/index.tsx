import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/core/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/core/dropdown-menu';

import { Theme, useTheme } from '@/providers/theme-provider';
import { useColorTheme } from '@/hooks/useColorTheme';

export function ModeToggle() {
  const { setTheme } = useTheme();
  const { data: theme } = useColorTheme();

  const THEME = [
    {
      name: 'light',
      value: 'Light',
    },
    {
      name: 'dark',
      value: 'Dark',
    },
    {
      name: 'system',
      value: 'System',
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`${theme === 'dark' ? '#F8FAFC' : '#000000'}`}
          variant="outline"
          size="icon"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {THEME.map((theme, index) => (
          <DropdownMenuItem key={index} onClick={() => setTheme(theme.name as Theme)}>
            {theme.value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
