import { Home, ChevronRight } from 'lucide-react';
import { ConceptNode } from '../types';

interface BreadcrumbsProps {
  path: ConceptNode[];
  onNavigate: (node: ConceptNode) => void;
}

export function Breadcrumbs({ path, onNavigate }: BreadcrumbsProps) {
  if (path.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => onNavigate(path[0])}
        className="p-1.5 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors group"
        aria-label="Início"
      >
        <Home className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
      </button>
      
      {path.map((node, index) => (
        <div key={node.id} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600" />
          <button
            onClick={() => onNavigate(node)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              index === path.length - 1
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {node.title}
          </button>
        </div>
      ))}
    </nav>
  );
}

