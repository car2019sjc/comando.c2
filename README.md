# 🛡️ Centros de Comando e Controle (C2)

## Modelo Mental Completo para Segurança Pública e Defesa

Uma aplicação web moderna e interativa para documentação e visualização de Centros de Comando e Controle, com interface completamente reformulada.

---

## ✨ Funcionalidades Principais

### 🎨 Interface Moderna
- **Glassmorphism**: Efeito de vidro fosco em painéis
- **Gradientes**: Cores harmoniosas e profissionais
- **Animações**: Transições suaves e elegantes
- **Responsiva**: Funciona perfeitamente em qualquer dispositivo

### 🌙 Modo Escuro/Claro
- Alternância instantânea entre temas
- Persistência da preferência do usuário
- Animações suaves de transição
- Cores otimizadas para ambos os modos

### 🔍 Busca Inteligente
- Busca em tempo real
- Highlighting de termos encontrados
- Busca em títulos, descrições e detalhes
- Contador de resultados

### ⭐ Sistema de Favoritos
- Marque itens importantes
- Filtro "Apenas Favoritos"
- Persistência local
- Acesso rápido

### 🕐 Histórico de Navegação
- Botões Voltar/Avançar
- Últimas 20 navegações
- Sincronização automática

### 🍞 Breadcrumbs
- Caminho completo da navegação
- Navegação rápida por níveis
- Visual claro e intuitivo

### 📊 Estatísticas Animadas
- Total de componentes
- Nós expandidos
- Seções principais
- Taxa de visualização com barra de progresso

### 📑 Painel de Detalhes com Tabs
- **Visão Geral**: Resumo e estatísticas
- **Detalhes**: Informações expandíveis
- **Subitens**: Lista de componentes filhos

---

## 🚀 Como Usar

### Instalação

```bash
# Clone o repositório
cd "Centros de Comando e Controle"

# Instale as dependências (se necessário)
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Ou compile para produção
npm run build
```

### Navegação Básica

1. **Explorar**: Clique nas setas para expandir/recolher seções
2. **Selecionar**: Clique em qualquer item para ver detalhes
3. **Buscar**: Digite na barra de busca para encontrar rapidamente
4. **Favoritar**: Clique na estrela para marcar itens importantes
5. **Alternar Tema**: Clique no ícone Sol/Lua no cabeçalho

### Atalhos Úteis

- **Expandir Tudo**: Visualize toda a estrutura de uma vez
- **Recolher Tudo**: Volte à visão inicial
- **Apenas Favoritos**: Filtre para ver só itens marcados
- **Breadcrumbs**: Navegue rapidamente pela hierarquia

---

## 📚 Documentação

- **[GUIA_USUARIO.md](GUIA_USUARIO.md)**: Tutorial completo de todas as funcionalidades
- **[CHANGELOG.md](CHANGELOG.md)**: Histórico detalhado de mudanças
- **[RESUMO_REFORMULACAO.md](RESUMO_REFORMULACAO.md)**: Visão executiva da reformulação

---

## 🛠️ Tecnologias

- **React 18.3.1**: Biblioteca UI
- **TypeScript 5.5.3**: Tipagem estática
- **Tailwind CSS 3.4.1**: Framework CSS utility-first
- **Vite 5.4.2**: Build tool e dev server
- **Lucide React 0.344.0**: Ícones modernos

---

## 📂 Estrutura do Projeto

```
Centros de Comando e Controle/
├── src/
│   ├── components/          # Componentes React
│   │   ├── ConceptNodeItem.tsx
│   │   ├── DetailPanel.tsx
│   │   ├── StatsBar.tsx
│   │   ├── SearchBar.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Breadcrumbs.tsx
│   │   └── NavigationControls.tsx
│   ├── hooks/              # Hooks customizados
│   │   ├── useTheme.ts
│   │   ├── useSearch.ts
│   │   ├── useFavorites.ts
│   │   └── useHistory.ts
│   ├── data/               # Dados da aplicação
│   │   └── mentalModelData.ts (702 linhas)
│   ├── App.tsx             # Componente principal
│   ├── types.ts            # Definições TypeScript
│   └── index.css           # Estilos globais
├── CHANGELOG.md            # Histórico de mudanças
├── GUIA_USUARIO.md         # Guia do usuário
├── RESUMO_REFORMULACAO.md  # Resumo executivo
└── README.md               # Este arquivo
```

---

## 🎯 Conteúdo

A aplicação documenta os seguintes tópicos sobre Centros C2:

### 1. Conceitos Fundamentais
- Arquitetura em Camadas
- Interoperabilidade
- Resiliência Operacional
- Segurança em Profundidade

### 2. Tecnologias de Monitoramento Fronteiriço
- Sensores Terrestres
- Radares e Sistemas Aéreos
- Sistemas Satelitais
- Drones e VANT
- Inteligência Artificial

### 3. Sistemas de Gerenciamento de Crises
- Comunicação Redundante
- Mobilidade Tática
- Análise Situacional
- Gestão de Recursos

### 4. Implementações Reais
- SISFRON (Brasil)
- US CBP (EUA)
- EUROSUR (União Europeia)
- IDF C4I (Israel)
- Smart Cities

### 5. Riscos e Vulnerabilidades
- Vetores de Ataque
- Impactos Operacionais
- Mitigações
- Resiliência

### 6. Procedimentos Operacionais Padrão
- Protocolos de Emergência
- Gestão de Incidentes
- Compliance e Auditorias
- Manutenção Preventiva

---

## 🌟 Destaques da Interface

### Antes da Reformulação
- Interface funcional básica
- Apenas tema claro
- Navegação simples
- Sem busca ou filtros

### Depois da Reformulação
- ✨ Design moderno com glassmorphism
- 🌙 Modo escuro/claro
- 🔍 Busca inteligente em tempo real
- ⭐ Sistema de favoritos
- 🕐 Histórico de navegação
- 🍞 Breadcrumbs
- 📊 Estatísticas animadas
- 📑 Painel com tabs organizadas
- 📱 Totalmente responsivo
- ♿ Acessível

---

## 💡 Casos de Uso

### Para Estudantes
- Explore a estrutura completa
- Marque conceitos importantes como favoritos
- Use a busca para encontrar tópicos específicos

### Para Profissionais
- Consulte rapidamente informações técnicas
- Utilize favoritos para acesso rápido
- Apresente usando modo escuro/claro conforme ambiente

### Para Gestores
- Visualize a estrutura hierárquica completa
- Use estatísticas para compreensão geral
- Navegue via breadcrumbs para contexto

### Para Apresentações
- Modo escuro para ambientes com pouca luz
- Expandir tudo para visão completa
- Painel de detalhes para informações específicas

---

## 🎨 Temas

### Tema Claro
- Fundo: Gradiente azul claro/cinza
- Painéis: Branco translúcido
- Texto: Cinza escuro
- Acentos: Azul vibrante

### Tema Escuro
- Fundo: Gradiente azul escuro/cinza
- Painéis: Cinza escuro translúcido
- Texto: Branco/cinza claro
- Acentos: Azul claro

---

## 📱 Responsividade

### Desktop (≥ 1280px)
- Layout em 3 colunas
- Painel de detalhes fixo lateral
- Todos os controles visíveis

### Tablet (768px - 1280px)
- Layout em 2 colunas
- Painel abaixo da estrutura
- Controles adaptados

### Mobile (< 768px)
- Layout em coluna única
- Elementos empilhados
- Controles simplificados

---

## 🔒 Privacidade e Dados

- ✅ **Sem servidor**: Tudo roda no navegador
- ✅ **Sem tracking**: Sem analytics ou rastreamento
- ✅ **Dados locais**: Favoritos e preferências salvos localmente
- ✅ **Sem login**: Acesso livre e imediato

---

## ⚡ Performance

- Build otimizado com Vite
- CSS via Tailwind (tree-shaking)
- Componentes leves
- Animações via GPU
- Lazy evaluation

---

## ♿ Acessibilidade

- ARIA labels em todos os controles
- Navegação por teclado
- Alto contraste (modo escuro)
- Foco visual claro
- Semântica HTML

---

## 🐛 Solução de Problemas

### Interface não carrega
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Tema não persiste
- Verifique se localStorage está habilitado
- Alguns navegadores bloqueiam em modo anônimo

### Busca não encontra
- Verifique ortografia
- Use termos mais genéricos
- Mínimo 2 caracteres

---

## 📞 Suporte

Para dúvidas:
1. Consulte o [GUIA_USUARIO.md](GUIA_USUARIO.md)
2. Revise o [CHANGELOG.md](CHANGELOG.md)
3. Verifique o código-fonte (bem documentado)

---

## 📈 Status do Projeto

✅ **Interface**: Completamente reformulada  
✅ **Funcionalidades**: Todas implementadas  
✅ **Dados**: 100% preservados  
✅ **Documentação**: Completa  
✅ **Testes**: Compilação sem erros  
✅ **Qualidade**: Zero warnings  

---

## 🎉 Pronto para Usar!

A aplicação está **100% funcional** e pronta para proporcionar uma experiência excepcional.

Basta executar:
```bash
npm run dev
```

E acessar: `http://localhost:5173`

---

## 📝 Licença

Este projeto é uma documentação técnica para fins educacionais e profissionais.

---

## 🙏 Agradecimentos

Desenvolvido com dedicação para proporcionar a melhor experiência possível na consulta e estudo de Centros de Comando e Controle.

**Aproveite! 🚀**

---

*Última atualização: 11 de Novembro de 2025*

