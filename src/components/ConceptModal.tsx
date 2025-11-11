import { X, ChevronLeft, Star, Eye, FileText } from 'lucide-react';
import { ConceptNode } from '../types';
import { ConceptCard } from './ConceptCard';
import { FormattedDetail } from './FormattedDetail';

interface ConceptModalProps {
  node: ConceptNode | null;
  onClose: () => void;
  onNavigateToChild: (child: ConceptNode) => void;
  onBack?: () => void;
  canGoBack?: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export function ConceptModal({
  node,
  onClose,
  onNavigateToChild,
  onBack,
  canGoBack = false,
  isFavorite = false,
  onToggleFavorite
}: ConceptModalProps) {
  if (!node) return null;

  const Icon = node.icon;
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-6xl max-h-[90vh] glassmorphism rounded-3xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 px-6 py-5 border-b-2 border-blue-700 dark:border-blue-900">
          <div className="flex items-center gap-4">
            {/* Back Button */}
            {canGoBack && onBack && (
              <button
                onClick={onBack}
                className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
                aria-label="Voltar"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Icon */}
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg">
              <Icon className="w-7 h-7 text-white" />
            </div>

            {/* Title */}
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-white line-clamp-1">
                {node.title}
              </h2>
              <p className="text-blue-100 text-sm mt-1">
                {node.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Favorite Button */}
              {onToggleFavorite && (
                <button
                  onClick={onToggleFavorite}
                  className={`p-2.5 rounded-xl transition-all duration-300 ${
                    isFavorite
                      ? 'bg-amber-500 text-white hover:bg-amber-600'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                  aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                >
                  <Star className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] bg-white dark:bg-gray-900">
          <div className="p-6 space-y-8">
            {/* Details Section */}
            {node.details && node.details.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Detalhes
                  </h3>
                  <span className="ml-auto text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {node.details.length} {node.details.length === 1 ? 'item' : 'itens'}
                  </span>
                </div>
                <div className="space-y-6">
                  {node.details.map((detail, index) => (
                    <FormattedDetail key={index} text={detail} index={index} />
                  ))}
                </div>
              </div>
            )}

            {/* Children Section */}
            {hasChildren && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                    <Eye className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Sub-Componentes
                  </h3>
                  <span className="ml-auto text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                    {node.children!.length} {node.children!.length === 1 ? 'item' : 'itens'}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {node.children!.map((child) => (
                    <ConceptCard
                      key={child.id}
                      node={child}
                      level={1}
                      onClick={() => onNavigateToChild(child)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {!node.details?.length && !hasChildren && (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Nenhum detalhe ou sub-componente disponível para este item.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

