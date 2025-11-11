import { ArrowLeft, ArrowRight, Maximize2, Minimize2, Star } from 'lucide-react';

interface NavigationControlsProps {
  canGoBack: boolean;
  canGoForward: boolean;
  onBack: () => void;
  onForward: () => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
  showFavoritesOnly: boolean;
  onToggleFavoritesFilter: () => void;
  favoritesCount: number;
}

export function NavigationControls({
  canGoBack,
  canGoForward,
  onBack,
  onForward,
  onExpandAll,
  onCollapseAll,
  showFavoritesOnly,
  onToggleFavoritesFilter,
  favoritesCount
}: NavigationControlsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* History Navigation */}
      <div className="flex items-center gap-1 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-1">
        <button
          onClick={onBack}
          disabled={!canGoBack}
          className="p-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </button>
        <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />
        <button
          onClick={onForward}
          disabled={!canGoForward}
          className="p-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
          aria-label="Avançar"
        >
          <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </button>
      </div>

      {/* Expand/Collapse */}
      <div className="flex items-center gap-2">
        <button
          onClick={onExpandAll}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-xl transition-all text-sm font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
        >
          <Maximize2 className="w-4 h-4" />
          <span className="hidden sm:inline">Expandir Tudo</span>
        </button>
        <button
          onClick={onCollapseAll}
          className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-600 text-white rounded-xl transition-all text-sm font-medium shadow-lg shadow-slate-500/30 hover:shadow-slate-500/50 hover:scale-105"
        >
          <Minimize2 className="w-4 h-4" />
          <span className="hidden sm:inline">Recolher Tudo</span>
        </button>
      </div>

      {/* Favorites Filter */}
      {favoritesCount > 0 && (
        <button
          onClick={onToggleFavoritesFilter}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all text-sm font-medium shadow-lg ${
            showFavoritesOnly
              ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/30 hover:shadow-amber-500/50'
              : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700'
          }`}
        >
          <Star className={`w-4 h-4 ${showFavoritesOnly ? 'fill-current' : ''}`} />
          <span className="hidden sm:inline">
            {showFavoritesOnly ? 'Mostrar Todos' : 'Apenas Favoritos'}
          </span>
          <span className="text-xs">({favoritesCount})</span>
        </button>
      )}
    </div>
  );
}

