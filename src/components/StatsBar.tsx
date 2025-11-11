import { Layers, Eye, Shield, TrendingUp, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface StatsBarProps {
  totalNodes: number;
  expandedCount: number;
}

export function StatsBar({ totalNodes, expandedCount }: StatsBarProps) {
  const [animatedExpanded, setAnimatedExpanded] = useState(0);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  const percentage = Math.round((expandedCount / totalNodes) * 100);

  useEffect(() => {
    const duration = 1000;
    const steps = 50;
    const intervalTime = duration / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedExpanded(Math.round(expandedCount * progress));
      setAnimatedPercentage(Math.round(percentage * progress));

      if (step >= steps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [expandedCount, percentage]);

  const stats = [
    {
      icon: Layers,
      label: 'Total de Componentes',
      value: totalNodes,
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-500 dark:text-blue-400',
      bgColor: 'bg-blue-500/10 dark:bg-blue-500/20',
      borderColor: 'border-blue-500/30 dark:border-blue-500/40',
      iconBg: 'bg-blue-500',
      animate: false
    },
    {
      icon: Eye,
      label: 'Componentes Visíveis',
      value: animatedExpanded,
      color: 'from-emerald-500 to-emerald-600',
      textColor: 'text-emerald-500 dark:text-emerald-400',
      bgColor: 'bg-emerald-500/10 dark:bg-emerald-500/20',
      borderColor: 'border-emerald-500/30 dark:border-emerald-500/40',
      iconBg: 'bg-emerald-500',
      animate: true
    },
    {
      icon: Shield,
      label: 'Seções Principais',
      value: expandedCount,
      color: 'from-amber-500 to-amber-600',
      textColor: 'text-amber-500 dark:text-amber-400',
      bgColor: 'bg-amber-500/10 dark:bg-amber-500/20',
      borderColor: 'border-amber-500/30 dark:border-amber-500/40',
      iconBg: 'bg-amber-500',
      animate: false
    },
    {
      icon: TrendingUp,
      label: 'Taxa de Visualização',
      value: `${animatedPercentage}%`,
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-500 dark:text-purple-400',
      bgColor: 'bg-purple-500/10 dark:bg-purple-500/20',
      borderColor: 'border-purple-500/30 dark:border-purple-500/40',
      iconBg: 'bg-purple-500',
      animate: true,
      showProgress: true,
      progress: animatedPercentage
    }
  ];

  return (
    <div className="glassmorphism border-y border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative flex flex-col gap-3 p-5 ${stat.bgColor} rounded-2xl border-2 ${stat.borderColor} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden animate-fadeInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Sparkle effect */}
              <Sparkles className="absolute top-2 right-2 w-4 h-4 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex items-center gap-3">
                <div className={`p-3 rounded-xl ${stat.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {stat.label}
                  </p>
                  <p className={`text-2xl font-bold ${stat.textColor} transition-all`}>
                    {stat.value}
                  </p>
                </div>
              </div>

              {/* Progress bar for percentage */}
              {stat.showProgress && (
                <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${stat.progress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse" />
                  </div>
                </div>
              )}

              {/* Pulse animation for animated stats */}
              {stat.animate && (
                <div className={`absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
