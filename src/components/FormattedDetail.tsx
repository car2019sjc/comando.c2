interface FormattedDetailProps {
  text: string;
  index: number;
}

export function FormattedDetail({ text, index }: FormattedDetailProps) {
  // Função para processar e formatar o texto mantendo-o na íntegra
  const formatText = (input: string) => {
    // Divide por padrões de seções numeradas como (1), (2), (a), (b), etc.
    const sections = input.split(/(?=\([a-z0-9]+\)\s)/gi);
    
    return sections.map((section, sectionIdx) => {
      // Extrai a marcação e o conteúdo
      const markerMatch = section.match(/^\(([a-z0-9]+)\)\s(.+)/is);
      
      if (markerMatch) {
        const [, marker, content] = markerMatch;
        return (
          <div key={sectionIdx} className="mb-4 last:mb-0">
            {/* Marcador da seção */}
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-md">
                {marker}
              </span>
              <div className="flex-1">
                {processContent(content)}
              </div>
            </div>
          </div>
        );
      }
      
      // Se não tem marcador, renderiza o conteúdo diretamente
      return (
        <div key={sectionIdx} className="mb-3">
          {processContent(section)}
        </div>
      );
    });
  };

  // Processa o conteúdo identificando palavras-chave e padrões
  const processContent = (content: string) => {
    const parts: JSX.Element[] = [];
    
    // Divide por sentenças preservando pontuação
    const sentences = content.split(/(?<=[.:])\s+/);
    
    sentences.forEach((sentence, idx) => {
      // Detecta início com palavra-chave seguida de dois pontos
      const keywordMatch = sentence.match(/^([A-ZÇÃÕ][A-Za-zÇçÃãÕõÊêÔôÂâÍíÓóÚúÁáÉé\s]+?):\s*(.+)/);
      
      if (keywordMatch) {
        const [, keyword, rest] = keywordMatch;
        parts.push(
          <p key={idx} className="mb-3 leading-relaxed">
            <span className="inline-block font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded mr-2">
              {keyword}:
            </span>
            {highlightImportantTerms(rest)}
          </p>
        );
      } else {
        // Verifica se a sentença termina com dois pontos (indicando continuação ou lista)
        const endsWithColon = sentence.trim().endsWith(':');
        
        if (endsWithColon) {
          parts.push(
            <p key={idx} className="mb-2 leading-relaxed">
              <span className="inline-block font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded">
                {highlightImportantTerms(sentence)}
              </span>
            </p>
          );
        } else {
          parts.push(
            <p key={idx} className="mb-3 leading-relaxed text-gray-700 dark:text-gray-300">
              {highlightImportantTerms(sentence)}
            </p>
          );
        }
      }
    });
    
    return <div>{parts}</div>;
  };

  // Destaca termos importantes (siglas, palavras-chave técnicas)
  const highlightImportantTerms = (text: string) => {
    const elements: JSX.Element[] = [];
    let lastIndex = 0;
    
    // Padrões a detectar (em ordem de prioridade)
    const patterns = [
      // Valores monetários: ~US$ 5k-15k, US$ 500-2k/mês
      { regex: /\~?US\$\s*[\d,]+[km]?(?:-[\d,]+[km]?)?(?:\/[a-zêç]+)?/gi, className: 'font-semibold text-emerald-600 dark:text-emerald-400' },
      // Números com unidades: 30s, 10Mbps, 5Mbps, <30s, ~500-700ms, 24-72h
      { regex: /[<~]?\d+(?:[-–]\d+)?(?:s|ms|h|Mbps|Gbps|km|m|kg|GB|MB|TB)(?![a-zà-ú])/gi, className: 'font-medium text-emerald-600 dark:text-emerald-400' },
      // Siglas com barra: GPS/GNSS, BGP/OSPF, ED-0341/ED-0366/ED-0408, HTML/PDF
      { regex: /\b[A-Z][A-Z0-9]+(?:\/[A-Z][A-Z0-9]+)+(?:-\d+(?:\/[A-Z]+-\d+)*)?/g, className: 'font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-1 rounded' },
      // Siglas puras: SGDC, VSAT, BGP, GIS, VoIP, COp, etc (3+ caracteres maiúsculos, isolados)
      { regex: /\b[A-ZÇÃÕ]{3,}\b/g, className: 'font-semibold text-blue-600 dark:text-blue-400' },
      // Siglas curtas mas importantes (2 letras): 3D, 2D, C2
      { regex: /\b(?:\d[A-Z]|[A-Z]\d)\b/g, className: 'font-semibold text-blue-600 dark:text-blue-400' }
    ];
    
    // Cria uma lista de todas as correspondências com suas posições
    const matches: Array<{ start: number; end: number; text: string; className: string }> = [];
    
    patterns.forEach(({ regex, className }) => {
      let match;
      const regexCopy = new RegExp(regex.source, regex.flags);
      while ((match = regexCopy.exec(text)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[0],
          className
        });
      }
    });
    
    // Ordena por posição e remove sobreposições (mantém a primeira)
    matches.sort((a, b) => a.start - b.start);
    const filteredMatches = matches.filter((match, idx) => {
      if (idx === 0) return true;
      const prev = matches[idx - 1];
      return match.start >= prev.end;
    });
    
    // Constrói o resultado com os destaques
    filteredMatches.forEach((match, idx) => {
      // Adiciona texto antes do destaque
      if (match.start > lastIndex) {
        elements.push(
          <span key={`text-${idx}`}>
            {text.substring(lastIndex, match.start)}
          </span>
        );
      }
      
      // Adiciona o destaque
      elements.push(
        <span key={`highlight-${idx}`} className={match.className}>
          {match.text}
        </span>
      );
      
      lastIndex = match.end;
    });
    
    // Adiciona texto restante
    if (lastIndex < text.length) {
      elements.push(
        <span key="text-final">
          {text.substring(lastIndex)}
        </span>
      );
    }
    
    return elements.length > 0 ? elements : text;
  };

  return (
    <div className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300">
      {/* Número do item */}
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
        {index + 1}
      </div>
      
      {/* Conteúdo formatado */}
      <div className="mt-2 space-y-2">
        {formatText(text)}
      </div>
      
      {/* Efeito visual de hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
    </div>
  );
}

