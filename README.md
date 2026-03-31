# 🎵 BuscaBanda - Frontend

Plataforma para conectar músicos, bandas, bares, estúdios e eventos musicais.

## 🎯 Sobre o Projeto

**BuscaBanda** é uma plataforma web desenvolvida para a comunidade musical, facilitando a conexão entre profissionais da música e estabelecimentos. Através dela, é possível:

- **🎸 Encontrar Músicos** - Descubra instrumentistas, vocalistas e produtores para seu projeto
- **🎵 Encontrar Bandas** - Contrate bandas para eventos e festas
- **🍺 Encontrar Bares** - Localize estabelecimentos que oferecem música ao vivo
- **🎙️ Encontrar Estúdios** - Ache estúdios de gravação e ensaio na sua região
- **📅 Encontrar Eventos** - Veja freelas, festivais, agenda de bares e workshops disponíveis

## ✨ Funcionalidades

### 🎸 Para Músicos e Bandas

- Perfil profissional com portfólio
- Divulgação de trabalhos e freelas
- Agenda de shows e apresentações
- Busca por oportunidades de trabalho
- Networking com outros músicos

### 🍺 Para Bares e Estabelecimentos

- Cadastro de estabelecimento
- Divulgação da programação musical
- Contratação de músicos e bandas
- Gestão de eventos
- Avaliações e feedback

### 🎙️ Para Estúdios

- Divulgação de serviços
- Agenda de disponibilidade
- Portfólio de trabalhos
- Valores e pacotes
- Equipamentos disponíveis

### 📅 Eventos

- **Freelas** - Oportunidades de trabalho pontuais para músicos (tocar em casamentos, festas, bares)
- **Festivais** - Grandes eventos musicais e festivais
- **Agenda de Bares** - Programação semanal/mensal dos estabelecimentos com música ao vivo
- **Workshops** - Aulas, masterclasses e eventos educacionais para músicos

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 18** - Biblioteca JavaScript para UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router v6** - Navegação entre páginas
- **Tailwind CSS** - Framework CSS utility-first com paleta customizada
- **Lucide React** - Biblioteca de ícones
- **React Query** - Gerenciamento de estado servidor
- **Axios** - Cliente HTTP para chamadas de API

### Backend / Infraestrutura

- **Supabase** - Backend-as-a-Service
  - PostgreSQL (banco de dados)
  - Supabase Auth (autenticação)
  - Supabase Storage (armazenamento de imagens)
  - Row Level Security (RLS)

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── dashboard/      # Componentes do dashboard
│   │   └── DashboardLayout.tsx
│   ├── PrivateRoute.tsx
│   └── ...
│
├── pages/              # Páginas da aplicação
│   ├── LandingPage.tsx
│   ├── LoginPage.tsx
│   ├── SignInPage.tsx
│   ├── DashboardHome.tsx
│   ├── MusicosPage.tsx
│   ├── BandasPage.tsx
│   ├── BaresPage.tsx
│   ├── EstudiosPage.tsx
│   └── EventosPage.tsx      # 🆕 Página de eventos
│
├── contexts/           # React Context
│   └── AuthContext.tsx
│
├── routes/             # Configuração de rotas
│   └── AppRoutes.tsx
│
├── services/           # Serviços de API
│   └── supabase.ts
│
├── types/              # TypeScript types e interfaces
│
├── App.tsx
└── main.tsx
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- Conta no Supabase (para backend)

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/plataforma-musical.git
   cd plataforma-musical
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto:

   ```env
   VITE_SUPABASE_URL=https://seu-projeto.supabase.co
   VITE_SUPABASE_ANON_KEY=sua-chave-anon
   VITE_API_URL=http://localhost:3000/api
   ```

4. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

   O projeto estará rodando em `http://localhost:5173`

## 📱 Páginas e Rotas

### Rotas Públicas

- `/` - Landing page
- `/login` - Página de login
- `/signin` - Página de cadastro

### Rotas Privadas (Dashboard)

Todas as rotas abaixo requerem autenticação:

- `/dashboard` - Dashboard home
- `/dashboard/musicos` - Lista de músicos disponíveis
- `/dashboard/bandas` - Catálogo de bandas
- `/dashboard/bares` - Lista de estabelecimentos
- `/dashboard/estudios` - Diretório de estúdios
- `/dashboard/eventos` - 🆕 Eventos musicais (freelas, festivais, agenda de bares, workshops)

## 🎨 Design System

### Paleta de Cores BuscaBanda

```css
@theme {
  /* Cores principais */
  --color-cream: #f5f0e8; /* Fundo claro */
  --color-cream-dark: #ede7d9; /* Fundo escuro */
  --color-ink: #1a1612; /* Texto principal */
  --color-ink-soft: #3d3530; /* Texto secundário */
  --color-punch: #e8431a; /* Cor de destaque */
  --color-punch-warm: #f2622e; /* Hover punch */
  --color-gold: #d4a843; /* Dourado */
  --color-sage: #6b8f6e; /* Verde sálvia */
  --color-muted: #8a7f74; /* Texto discreto */
  --color-card: #fdfaf4; /* Background de cards */
  --color-border-warm: #d9d0c0; /* Bordas */
}
```

### Uso das Cores

- **Punch (vermelho-alaranjado)** - CTAs, botões principais, links, elementos interativos
- **Cream** - Backgrounds, áreas amplas
- **Ink** - Textos principais, títulos
- **Gold** - Badges, destaques especiais
- **Sage** - Elementos secundários, sucesso

### Tipografia

- Fonte: System fonts (Inter, -apple-system)
- Headings: font-bold
- Body: font-normal

## 🔐 Autenticação

O sistema utiliza **Supabase Auth** integrado via Context API:

- **AuthContext** - Gerencia estado de autenticação globalmente
- **PrivateRoute** - Componente que protege rotas privadas
- Login com email/senha
- Cadastro de novos usuários
- Recuperação de senha (em desenvolvimento)

**🎵 BuscaBanda - Conectando a comunidade musical!**
