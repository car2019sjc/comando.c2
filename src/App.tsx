import { useState } from 'react';
import { Shield, Info, BookOpen, X, Layers } from 'lucide-react';
import { ConceptNode } from './types';
import { mentalModel } from './data/mentalModelData';
import { ConceptCard } from './components/ConceptCard';
import { ConceptModal } from './components/ConceptModal';
import { ThemeToggle } from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';
import { useFavorites } from './hooks/useFavorites';

function App() {
  const [selectedNode, setSelectedNode] = useState<ConceptNode | null>(null);
  const [modalHistory, setModalHistory] = useState<ConceptNode[]>([]);
  const [showInfo, setShowInfo] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleCardClick = (node: ConceptNode) => {
    setSelectedNode(node);
    setModalHistory([node]);
  };

  const handleNavigateToChild = (child: ConceptNode) => {
    setModalHistory([...modalHistory, child]);
    setSelectedNode(child);
  };

  const handleModalBack = () => {
    if (modalHistory.length > 1) {
      const newHistory = [...modalHistory];
      newHistory.pop();
      const previousNode = newHistory[newHistory.length - 1];
      setModalHistory(newHistory);
      setSelectedNode(previousNode);
    }
  };

  const handleCloseModal = () => {
    // Se houver histórico de navegação, volta ao nível anterior
    if (modalHistory.length > 1) {
      handleModalBack();
    } else {
      // Se não houver histórico, fecha o modal
      setSelectedNode(null);
      setModalHistory([]);
    }
  };

  // Get main sections (level 0 children)
  const mainSections = mentalModel.children || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 dark:opacity-20" />

      <div className="relative">
        {/* Header */}
        <header className="glassmorphism border-b-2 border-gray-200 dark:border-gray-700 shadow-2xl sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              {/* Logo and Title */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl shadow-xl animate-pulse-slow">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Centros de Comando e Controle
                  </h1>
                  <p className="text-blue-600 dark:text-blue-400 text-sm md:text-base">
                    Modelo Mental Completo para Segurança Pública e Defesa
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <ThemeToggle theme={theme} onToggle={toggleTheme} />
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className={`p-2 rounded-xl border-2 transition-all duration-300 ${
                    showInfo
                      ? 'bg-blue-500 border-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500'
                  }`}
                >
                  {showInfo ? <X className="w-6 h-6" /> : <Info className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Info Panel */}
            {showInfo && (
              <div className="mt-6 p-6 glassmorphism rounded-2xl border-2 border-blue-200 dark:border-blue-800 animate-fadeInUp">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">Sobre o Modelo</h3>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Documentação completa e estruturada de Centros C2, incluindo conceitos fundamentais,
                      tecnologias, implementações reais e análise de riscos críticos.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">Navegação</h3>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Clique em qualquer card para abrir um modal com detalhes completos e sub-componentes.
                      Navegue entre os níveis usando o botão voltar dentro do modal.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">Aplicação</h3>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Base para planejamento, implementação e operação de centros de segurança
                      pública e defesa de alta complexidade.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Cards Grid */}
          <div className="glassmorphism rounded-3xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b-2 border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-slate-50 dark:from-blue-950/30 dark:to-slate-900/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Componentes Principais
                  </h2>
                </div>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                  {mainSections.length} {mainSections.length === 1 ? 'componente' : 'componentes'}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              {mainSections.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {mainSections.map((section) => (
                    <ConceptCard
                      key={section.id}
                      node={section}
                      level={0}
                      isFavorite={isFavorite(section.id)}
                      onToggleFavorite={() => toggleFavorite(section.id)}
                      onClick={() => handleCardClick(section)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Nenhum componente disponível.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedNode && (
          <ConceptModal
            node={selectedNode}
            onClose={handleCloseModal}
            onNavigateToChild={handleNavigateToChild}
            onBack={handleModalBack}
            canGoBack={modalHistory.length > 1}
            isFavorite={isFavorite(selectedNode.id)}
            onToggleFavorite={() => toggleFavorite(selectedNode.id)}
          />
        )}

        {/* Footer */}
        <footer className="mt-12 py-8 glassmorphism border-t-2 border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Modelo Mental de Centros de Comando e Controle para Segurança Pública e Defesa
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Baseado em implementações reais: SISFRON, CBP, EUROSUR, IDF, e outros sistemas globais
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className={`w-2 h-2 rounded-full ${theme === 'light' ? 'bg-amber-500' : 'bg-blue-500'} animate-pulse`} />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Tema {theme === 'light' ? 'Claro' : 'Escuro'} Ativo
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
