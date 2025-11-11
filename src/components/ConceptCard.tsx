import { Star, ChevronRight } from 'lucide-react';
import { ConceptNode } from '../types';

interface ConceptCardProps {
  node: ConceptNode;
  level: number;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  onClick: () => void;
}

export function ConceptCard({
  node,
  level,
  isFavorite = false,
  onToggleFavorite,
  onClick
}: ConceptCardProps) {
  const hasChildren = node.children && node.children.length > 0;
  const Icon = node.icon;

  const getLevelColors = () => {
    switch (level) {
      case 0:
        return {
          gradient: 'from-blue-500 to-blue-600',
          bgGradient: 'from-blue-50 to-slate-50 dark:from-blue-950/50 dark:to-slate-900/50',
          border: 'border-blue-300 dark:border-blue-700',
          hoverBorder: 'hover:border-blue-500 dark:hover:border-blue-400',
          iconBg: 'bg-blue-500'
        };
      case 1:
        return {
          gradient: 'from-emerald-500 to-teal-600',
          bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-900/50',
          border: 'border-emerald-300 dark:border-emerald-700',
          hoverBorder: 'hover:border-emerald-500 dark:hover:border-emerald-400',
          iconBg: 'bg-emerald-500'
        };
      case 2:
        return {
          gradient: 'from-amber-500 to-orange-600',
          bgGradient: 'from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-900/50',
          border: 'border-amber-300 dark:border-amber-700',
          hoverBorder: 'hover:border-amber-500 dark:hover:border-amber-400',
          iconBg: 'bg-amber-500'
        };
      default:
        return {
          gradient: 'from-slate-500 to-gray-600',
          bgGradient: 'from-slate-50 to-gray-50 dark:from-slate-950/50 dark:to-gray-900/50',
          border: 'border-slate-300 dark:border-slate-700',
          hoverBorder: 'hover:border-slate-500 dark:hover:border-slate-400',
          iconBg: 'bg-slate-500'
        };
    }
  };

  const colors = getLevelColors();

  return (
    <div
      className={`group relative glassmorphism rounded-2xl border-2 ${colors.border} ${colors.hoverBorder} transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden animate-fadeInUp`}
      onClick={onClick}
    >
      {/* Gradient Header */}
      <div className={`h-2 bg-gradient-to-r ${colors.gradient}`} />
      
      {/* Card Content */}
      <div className={`p-6 bg-gradient-to-br ${colors.bgGradient}`}>
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`p-3 rounded-xl ${colors.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg line-clamp-2">
                {node.title}
              </h3>
              
              {/* Favorite Button */}
              {onToggleFavorite && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite();
                  }}
                  className={`p-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
                    isFavorite
                      ? 'text-amber-500 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-900/50'
                      : 'text-gray-400 dark:text-gray-500 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                  }`}
                  aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                >
                  <Star className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              )}
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
              {node.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {node.details && node.details.length > 0 && (
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                  {node.details.length} {node.details.length === 1 ? 'detalhe' : 'detalhes'}
                </span>
              )}
              {hasChildren && (
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                  {node.children!.length} {node.children!.length === 1 ? 'subitem' : 'subitens'}
                  <ChevronRight className="w-3 h-3" />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

