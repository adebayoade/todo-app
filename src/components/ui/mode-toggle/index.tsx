import { Button } from '@/components/core/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/core/dropdown-menu';

import { Theme, useTheme } from '@/providers/theme-provider';
import { useColorTheme } from '@/hooks/useColorTheme';
import { Icon } from '@/components/icons';

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
        <Button variant="icon" size="icon">
          {theme === 'dark' ? <Icon.Moon /> : <Icon.Sun />}
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
