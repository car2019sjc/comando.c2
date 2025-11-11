import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="relative p-2 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 group overflow-hidden"
      aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-500 ${
            theme === 'light' 
              ? 'rotate-0 opacity-100 scale-100' 
              : 'rotate-90 opacity-0 scale-0'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-500 ${
            theme === 'dark' 
              ? 'rotate-0 opacity-100 scale-100' 
              : '-rotate-90 opacity-0 scale-0'
          }`}
        />
      </div>
    </button>
  );
}

