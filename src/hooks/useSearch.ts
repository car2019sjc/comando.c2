import { useState, useMemo } from 'react';
import { ConceptNode } from '../types';

export function useSearch(rootNode: ConceptNode) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchNodes = (node: ConceptNode, term: string): boolean => {
    if (!term) return true;
    
    const lowerTerm = term.toLowerCase();
    const titleMatch = node.title.toLowerCase().includes(lowerTerm);
    const descMatch = node.description.toLowerCase().includes(lowerTerm);
    const detailsMatch = node.details?.some(d => 
      d.toLowerCase().includes(lowerTerm)
    );

    return titleMatch || descMatch || !!detailsMatch;
  };

  const getAllMatchingIds = (node: ConceptNode, term: string): Set<string> => {
    const ids = new Set<string>();
    
    if (searchNodes(node, term)) {
      ids.add(node.id);
    }

    if (node.children) {
      node.children.forEach(child => {
        const childIds = getAllMatchingIds(child, term);
        childIds.forEach(id => ids.add(id));
      });
    }

    return ids;
  };

  const matchingIds = useMemo(() => 
    getAllMatchingIds(rootNode, searchTerm),
    [rootNode, searchTerm]
  );

  const hasMatches = matchingIds.size > 0 || !searchTerm;

  return {
    searchTerm,
    setSearchTerm,
    matchingIds,
    hasMatches,
    searchNodes
  };
}

