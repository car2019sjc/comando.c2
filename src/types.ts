export interface ConceptNode {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: ConceptNode[];
  details?: string[];
}
