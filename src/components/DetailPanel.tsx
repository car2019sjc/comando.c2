import { Eye, AlertTriangle, ChevronRight, X, FileText, List, Star, Sparkles, Layers } from 'lucide-react';
import { ConceptNode } from '../types';
import { useState } from 'react';

interface DetailPanelProps {
  selectedNode: ConceptNode | null;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

type TabType = 'overview' | 'details';

export function DetailPanel({ selectedNode, isFavorite = false, onToggleFavorite }: DetailPanelProps) {
  const [expandedDetail, setExpandedDetail] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const parseDetail = (detail: string) => {
    const colonIndex = detail.indexOf(':');
    if (colonIndex > 0 && colonIndex < 100) {
      return {
        title: detail.substring(0, colonIndex).trim(),
        content: detail.substring(colonIndex + 1).trim()
      };
    }
    return { title: detail, content: null };
  };

  const handleDetailClick = (index: number) => {
    setExpandedDetail(expandedDetail === index ? null : index);
  };

  const tabs = [
    { id: 'overview' as TabType, label: 'Visão Geral', icon: Eye },
    { id: 'details' as TabType, label: 'Detalhes', icon: FileText, count: selectedNode?.details?.length }
  ];

  return (
    <div className="glassmorphism rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden animate-fadeInUp">
      {/* Header */}
      <div className="relative p-6 bg-gradient-to-br from-blue-600 to-slate-700 dark:from-blue-700 dark:to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        <div className="relative flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-3">
            <Eye className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Detalhes</h2>
          </div>
          {selectedNode && onToggleFavorite && (
            <button
              onClick={onToggleFavorite}
              className={`p-2 rounded-xl transition-all duration-300 ${
                isFavorite
                  ? 'bg-amber-500 text-white hover:bg-amber-600'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
              aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
              <Star className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>
        <p className="relative text-blue-100 text-sm">
          Informações detalhadas do componente selecionado
        </p>
      </div>

      {/* Tabs */}
      {selectedNode && (
        <div className="flex border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
              {tab.count !== undefined && tab.count > 0 && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeTab === tab.id
                    ? 'bg-blue-600 dark:bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-6 max-h-[calc(100vh-400px)] overflow-y-auto">
        {selectedNode ? (
          <div className="space-y-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-4 animate-fadeIn">
                {/* Main Card */}
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-900/30 rounded-xl border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                  {selectedNode.icon && (
                    <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl shadow-xl">
                      <selectedNode.icon className="w-10 h-10 text-white" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-3">
                      {selectedNode.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                      {selectedNode.description}
                    </p>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Details Count */}
                  {selectedNode.details && selectedNode.details.length > 0 ? (
                    <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-900/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-emerald-500 dark:bg-emerald-600 rounded-lg">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                            Informações Disponíveis
                          </p>
                          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                            {selectedNode.details.length} {selectedNode.details.length === 1 ? 'Detalhe' : 'Detalhes'}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-emerald-700 dark:text-emerald-400">
                        Acesse a aba <span className="font-semibold">"Detalhes"</span> para visualizar todas as informações técnicas
                      </p>
                    </div>
                  ) : (
                    <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-900/30 rounded-xl border-2 border-amber-200 dark:border-amber-800 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-amber-500 dark:bg-amber-600 rounded-lg">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                            Componente de Nível Superior
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-amber-700 dark:text-amber-400">
                        Este é um componente organizacional que agrupa conceitos relacionados. Explore os subitens para mais informações.
                      </p>
                    </div>
                  )}

                  {/* Children Count */}
                  {selectedNode.children && selectedNode.children.length > 0 && (
                    <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-900/30 rounded-xl border-2 border-purple-200 dark:border-purple-800 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-purple-500 dark:bg-purple-600 rounded-lg">
                          <Layers className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-purple-700 dark:text-purple-300 uppercase tracking-wide">
                            Estrutura Hierárquica
                          </p>
                          <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                            {selectedNode.children.length} {selectedNode.children.length === 1 ? 'Subitem' : 'Subitens'}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-purple-700 dark:text-purple-400">
                        Este componente contém elementos subordinados que você pode explorar na estrutura principal
                      </p>
                    </div>
                  )}
                </div>

                {/* Quick Preview of Details */}
                {selectedNode.details && selectedNode.details.length > 0 && (
                  <div className="p-5 bg-white dark:bg-gray-800/50 rounded-xl border-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-4">
                      <List className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                        Prévia dos Conteúdos
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {selectedNode.details.slice(0, 3).map((detail, index) => {
                        const parsed = parseDetail(detail);
                        return (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                          >
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                {parsed.title}
                              </p>
                              {parsed.content && (
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                                  {parsed.content}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                      {selectedNode.details.length > 3 && (
                        <button
                          onClick={() => setActiveTab('details')}
                          className="w-full mt-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                        >
                          Ver todos os {selectedNode.details.length} detalhes →
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Details Tab */}
            {activeTab === 'details' && (
              <div className="space-y-3 animate-fadeIn">
                {selectedNode.details && selectedNode.details.length > 0 ? (
                  <>
                    <div className="flex items-center gap-2 pb-3 border-b-2 border-blue-200 dark:border-blue-800">
                      <List className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                        Elementos Principais
                      </h4>
                      <span className="ml-auto text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {selectedNode.details.length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {selectedNode.details.map((detail, index) => {
                        const parsed = parseDetail(detail);
                        const isExpanded = expandedDetail === index;

                        return (
                          <div key={index} className="space-y-2">
                            <div
                              onClick={() => handleDetailClick(index)}
                              className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-300 group ${
                                isExpanded
                                  ? 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-blue-400 dark:border-blue-600 shadow-lg'
                                  : 'bg-white dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md'
                              }`}
                            >
                              <div className={`flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold shadow-sm transition-all ${
                                isExpanded
                                  ? 'bg-blue-700 dark:bg-blue-600 text-white scale-110'
                                  : 'bg-blue-600 dark:bg-blue-500 text-white group-hover:scale-110'
                              }`}>
                                {index + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                {parsed.content ? (
                                  <>
                                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                                      {parsed.title}
                                    </p>
                                    <p className={`text-sm text-gray-600 dark:text-gray-400 leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
                                      {parsed.content}
                                    </p>
                                  </>
                                ) : (
                                  <p className={`text-sm text-gray-700 dark:text-gray-300 leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
                                    {detail}
                                  </p>
                                )}
                              </div>
                              <div className="flex-shrink-0 mt-0.5">
                                {isExpanded ? (
                                  <X className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform rotate-0" />
                                ) : (
                                  <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="p-8 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-900/30 rounded-xl border-2 border-blue-200 dark:border-blue-800 text-center">
                    <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                      <Sparkles className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Componente Organizacional
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 max-w-md mx-auto">
                      Este componente serve como categoria organizacional e não possui detalhes técnicos específicos.
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                      💡 Explore os subitens na estrutura principal para mais informações
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-900/30 rounded-full mb-4">
              <AlertTriangle className="w-16 h-16 text-blue-300 dark:text-blue-700" />
            </div>
            <p className="text-gray-900 dark:text-white font-medium text-lg mb-2">
              Nenhum componente selecionado
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Clique em qualquer item da estrutura para visualizar detalhes
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
