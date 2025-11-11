import { useState, useCallback } from 'react';
import { ConceptNode } from '../types';

export function useHistory() {
  const [history, setHistory] = useState<ConceptNode[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const addToHistory = useCallback((node: ConceptNode) => {
    setHistory(prev => {
      const newHistory = prev.slice(0, currentIndex + 1);
      if (newHistory[newHistory.length - 1]?.id !== node.id) {
        newHistory.push(node);
        setCurrentIndex(newHistory.length - 1);
        return newHistory.slice(-20); // Keep last 20 items
      }
      return prev;
    });
  }, [currentIndex]);

  const goBack = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      return history[currentIndex - 1];
    }
    return null;
  }, [currentIndex, history]);

  const goForward = useCallback(() => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      return history[currentIndex + 1];
    }
    return null;
  }, [currentIndex, history]);

  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < history.length - 1;

  return {
    history,
    addToHistory,
    goBack,
    goForward,
    canGoBack,
    canGoForward
  };
}

