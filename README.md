# 🛡️ Centros de Comando e Controle (C2)

## Modelo Mental Completo para Segurança Pública e Defesa

[![Deploy Status](https://github.com/car2019sjc/comando.c2/actions/workflows/deploy.yml/badge.svg)](https://github.com/car2019sjc/comando.c2/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://car2019sjc.github.io/comando.c2/)

Uma aplicação web interativa e moderna para visualização e exploração do modelo mental completo de Centros de Comando e Controle aplicados à segurança pública e defesa.

## 🎯 Sobre o Projeto

Esta aplicação foi desenvolvida para apresentar de forma organizada e visualmente atraente o modelo mental completo de Centros C2, incluindo:

- **Conceitos Fundamentais** de sistemas de comando e controle
- **Tecnologias** utilizadas em implementações reais
- **Arquiteturas** e componentes de sistemas C2
- **Casos de Uso** e implementações globais
- **Análise de Riscos** e segurança crítica
- **Requisitos Técnicos** detalhados

## ✨ Funcionalidades

### 🎨 Interface Moderna
- **Cards Interativos**: Visualização em grid responsivo dos componentes principais
- **Modal Detalhado**: Expansão completa com detalhes formatados e sub-componentes
- **Navegação Hierárquica**: Sistema de navegação por níveis com histórico
- **Modo Escuro/Claro**: Alternância suave entre temas

### 📋 Formatação Inteligente
- **Detecção Automática**: Identifica seções, listas e palavras-chave
- **Destaques Visuais**: Siglas, valores e termos técnicos em destaque
- **Estruturação Clara**: Parágrafos, badges e marcadores visuais
- **Leitura Otimizada**: Layout organizado para fácil compreensão

### ⭐ Recursos Adicionais
- **Sistema de Favoritos**: Marque componentes importantes
- **Breadcrumbs**: Visualize o caminho de navegação
- **Animações Suaves**: Transições elegantes e responsivas
- **Totalmente Responsivo**: Funciona perfeitamente em qualquer dispositivo

## 🚀 Acesso Rápido

**🌐 Aplicação Online**: [https://car2019sjc.github.io/comando.c2/](https://car2019sjc.github.io/comando.c2/)

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos e elegantes
- **GitHub Pages** - Hospedagem gratuita e confiável
- **GitHub Actions** - Deploy automático CI/CD

## 📦 Instalação Local

### Pré-requisitos
- Node.js 20+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/car2019sjc/comando.c2.git
cd comando.c2
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 🔨 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
comando.c2/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── components/             # Componentes React
│   │   ├── ConceptCard.tsx     # Card de componente
│   │   ├── ConceptModal.tsx    # Modal detalhado
│   │   ├── FormattedDetail.tsx # Formatação inteligente
│   │   └── ...
│   ├── data/
│   │   └── mentalModelData.ts  # Dados do modelo mental
│   ├── hooks/                  # Custom React hooks
│   ├── types.ts                # Definições TypeScript
│   ├── App.tsx                 # Componente principal
│   └── main.tsx                # Entry point
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 Componentes Principais

### 1. **ConceptCard**
Cards visuais para cada componente do modelo mental, com:
- Ícone identificador
- Título e descrição
- Badges informativos (detalhes, sub-itens)
- Botão de favoritos
- Efeitos hover elegantes

### 2. **ConceptModal**
Modal expansível com:
- Header com navegação e ações
- Seção de detalhes formatados
- Grid de sub-componentes
- Navegação hierárquica

### 3. **FormattedDetail**
Sistema inteligente de formatação que:
- Detecta seções numeradas (a), (b), (c)
- Destaca palavras-chave e siglas
- Formata valores e medidas
- Cria estrutura visual clara

## 📊 Conteúdo

O modelo mental inclui 6 seções principais:

1. **Fundamentos de C2** - Conceitos básicos e princípios
2. **Arquitetura de Sistemas** - Estrutura e componentes
3. **Tecnologias Essenciais** - Ferramentas e plataformas
4. **Implementações Reais** - Casos de uso globais
5. **Segurança e Resiliência** - Proteção e continuidade
6. **Gestão e Operações** - Processos e procedimentos

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é de uso interno para fins educacionais e documentação técnica.

## 👨‍💻 Autor

**Carlos Rodrigues**
- GitHub: [@car2019sjc](https://github.com/car2019sjc)

## 🙏 Agradecimentos

- Baseado em implementações reais: SISFRON, CBP, EUROSUR, IDF
- Documentação técnica de sistemas C2 militares e de segurança pública
- Comunidade React e desenvolvedores open source

---

**⚠️ Nota**: Esta aplicação é parte de um projeto de documentação e não contém informações classificadas ou sensíveis.

**🔗 Links Úteis**:
- [Aplicação Online](https://car2019sjc.github.io/comando.c2/)
- [Repositório GitHub](https://github.com/car2019sjc/comando.c2)
- [Issues](https://github.com/car2019sjc/comando.c2/issues)
