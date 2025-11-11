import { ChevronRight, ChevronDown, Star } from 'lucide-react';
import { ConceptNode } from '../types';

interface ConceptNodeItemProps {
  node: ConceptNode;
  level: number;
  isExpanded: boolean;
  isSelected: boolean;
  onToggle: () => void;
  onSelect: () => void;
  renderChildren: () => React.ReactNode;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export function ConceptNodeItem({
  node,
  level,
  isExpanded,
  isSelected,
  onToggle,
  onSelect,
  renderChildren,
  isFavorite = false,
  onToggleFavorite
}: ConceptNodeItemProps) {
  const hasChildren = node.children && node.children.length > 0;
  const Icon = node.icon;

  const getLevelColors = () => {
    switch (level) {
      case 0:
        return {
          border: 'border-blue-300 dark:border-blue-700',
          bg: 'bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-900/30',
          hoverBg: 'hover:from-blue-100 hover:to-slate-100 dark:hover:from-blue-900/40 dark:hover:to-slate-800/40',
          selectedBorder: 'border-blue-600 dark:border-blue-400',
          selectedBg: 'bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-800/50',
          iconColor: 'text-blue-600 dark:text-blue-400',
          iconBg: 'bg-blue-500 dark:bg-blue-600'
        };
      case 1:
        return {
          border: 'border-emerald-200 dark:border-emerald-800',
          bg: 'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-900/30',
          hoverBg: 'hover:from-emerald-100 hover:to-teal-100 dark:hover:from-emerald-900/40 dark:hover:to-teal-800/40',
          selectedBorder: 'border-emerald-600 dark:border-emerald-400',
          selectedBg: 'bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900/50 dark:to-emerald-800/50',
          iconColor: 'text-emerald-600 dark:text-emerald-400',
          iconBg: 'bg-emerald-500 dark:bg-emerald-600'
        };
      case 2:
        return {
          border: 'border-amber-200 dark:border-amber-800',
          bg: 'bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-900/30',
          hoverBg: 'hover:from-amber-100 hover:to-orange-100 dark:hover:from-amber-900/40 dark:hover:to-orange-800/40',
          selectedBorder: 'border-amber-600 dark:border-amber-400',
          selectedBg: 'bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-900/50 dark:to-amber-800/50',
          iconColor: 'text-amber-600 dark:text-amber-400',
          iconBg: 'bg-amber-500 dark:bg-amber-600'
        };
      default:
        return {
          border: 'border-gray-200 dark:border-gray-700',
          bg: 'bg-white dark:bg-gray-800/50',
          hoverBg: 'hover:bg-gray-50 dark:hover:bg-gray-700/50',
          selectedBorder: 'border-slate-600 dark:border-slate-400',
          selectedBg: 'bg-slate-50 dark:bg-slate-800/50',
          iconColor: 'text-slate-600 dark:text-slate-400',
          iconBg: 'bg-slate-500 dark:bg-slate-600'
        };
    }
  };

  const colors = getLevelColors();


  return (
    <div className="mb-2 animate-fadeInUp">
      <div
        className={`group flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 backdrop-blur-sm ${
          isSelected
            ? `${colors.selectedBorder} ${colors.selectedBg} shadow-xl scale-[1.02] ring-4 ring-blue-500/20 dark:ring-blue-400/20`
            : `${colors.border} ${colors.bg} ${colors.hoverBg} shadow-md hover:shadow-xl hover:scale-[1.01]`
        }`}
        style={{ 
          marginLeft: `${level * 20}px`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        onClick={onSelect}
      >
        {/* Expand/Collapse Button */}
        {hasChildren && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className={`mt-1 p-1 rounded-lg transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-800/50 ${
              isExpanded
                ? `${colors.iconColor} rotate-0`
                : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
            aria-label={isExpanded ? 'Recolher' : 'Expandir'}
          >
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 transition-transform duration-300" />
            ) : (
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            )}
          </button>
        )}

        {/* Icon */}
        <div className={`mt-1 ${!hasChildren ? 'ml-8' : ''}`}>
          <div className={`p-2.5 rounded-xl ${colors.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className={`font-semibold text-gray-900 dark:text-white ${level === 0 ? 'text-lg' : 'text-base'} transition-colors`}>
              {node.title}
            </h3>
            
            {/* Favorite Button */}
            {onToggleFavorite && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite();
                }}
                className={`p-1.5 rounded-lg transition-all duration-300 ${
                  isFavorite
                    ? 'text-amber-500 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-900/50'
                    : 'text-gray-400 dark:text-gray-500 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }`}
                aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              >
                <Star className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            )}
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed line-clamp-2">
            {node.description}
          </p>
          
          {/* Badges */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {node.details && node.details.length > 0 && (
              <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-2.5 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                {node.details.length} {node.details.length === 1 ? 'detalhe' : 'detalhes'}
              </span>
            )}
            {hasChildren && node.children && (
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                {node.children.length} {node.children.length === 1 ? 'subitem' : 'subitens'}
              </span>
            )}
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 dark:group-hover:from-blue-400/10 dark:group-hover:to-purple-400/10 transition-all duration-300 pointer-events-none" />
      </div>

      {/* Children */}
      {isExpanded && hasChildren && (
        <div className="mt-2 space-y-2 animate-fadeIn">
          {renderChildren()}
        </div>
      )}
    </div>
  );
}
