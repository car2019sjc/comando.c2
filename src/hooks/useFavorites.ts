import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify([...favorites]));
  }, [favorites]);

  const toggleFavorite = (nodeId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(nodeId)) {
        newFavorites.delete(nodeId);
      } else {
        newFavorites.add(nodeId);
      }
      return newFavorites;
    });
  };

  const isFavorite = (nodeId: string) => favorites.has(nodeId);

  return {
    favorites,
    toggleFavorite,
    isFavorite
  };
}

