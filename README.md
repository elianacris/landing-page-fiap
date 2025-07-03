# Landing Page FIAP

Este projeto foi desenvolvido como parte de um case para a FIAP, utilizando tecnologias modernas para criar uma landing page responsiva, interativa e de fácil manutenção.

## Tecnologias e Bibliotecas Utilizadas

O projeto utiliza as seguintes tecnologias principais:

- **Next.js**: Framework React para aplicações web modernas, com renderização híbrida (SSR/SSG) e ótima performance.
- **React**: Biblioteca para construção de interfaces de usuário baseadas em componentes.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, aumentando a robustez do código.
- **Sass**: Pré-processador CSS para facilitar a organização e reutilização de estilos.
- **GSAP**: Biblioteca para animações avançadas e interativas.
- **next/font**: Otimização e carregamento de fontes.

Além disso, as principais bibliotecas e ferramentas presentes no `package.json` são:

- `next`, `react`, `react-dom`, `gsap`, `sass`, `typescript`, `eslint`, `@types/*` (tipagens), entre outras para lint e desenvolvimento.

## Estrutura do Projeto

A estrutura do projeto foi pensada para separar responsabilidades e facilitar a escalabilidade:

- `app/`: Estrutura principal das rotas e layout da aplicação.
  - `page.tsx`: Página principal da landing page.
  - `layout.tsx`: Layout global da aplicação.
  - `Home/`: Componentes e estilos específicos da Home.
- `components/`: Componentes reutilizáveis de layout.
  - `layouts/Header/`: Cabeçalho da página.
  - `layouts/Navbar/`: Barra de navegação superior.
- `features/`: Componentes de funcionalidades específicas da landing page.
  - `Courses/`: Lista de cursos.
  - `FAQ/`: Perguntas frequentes.
  - `ImageContainer/`: Container de imagem com animação.
  - `TextBox/`: Caixa de texto animada.
- `public/`: Arquivos estáticos (imagens, fontes, favicon, etc).
- `styles/`: Estilos globais e variáveis Sass.

## Explicação das Pastas e Componentes

- **app/**: Contém a estrutura de rotas do Next.js, layouts globais e a página principal. A subpasta `Home/` centraliza os componentes e estilos da tela inicial.
- **components/layouts/**: Componentes de layout reutilizáveis, como o `Header` (cabeçalho com animações) e o `Navbar` (barra de navegação com progresso de scroll).
- **features/**: Componentes funcionais da landing page:
  - `Courses/`: Exibe categorias e lista de cursos disponíveis.
  - `FAQ/`: Seção de perguntas frequentes, com interação de abrir/fechar respostas.
  - `ImageContainer/`: Mostra imagens com efeitos de animação ao rolar a página.
  - `TextBox/`: Apresenta textos animados, utilizando GSAP para efeitos visuais.
- **public/**: Armazena imagens, fontes (como Gotham HTF) e outros arquivos estáticos acessíveis pela aplicação.
- **styles/**: Contém arquivos Sass para estilos globais, variáveis, mixins e breakpoints, promovendo padronização visual e responsividade.

## Como Executar o Projeto

1. Instale as dependências:

```bash
npm install
```

> **Observação:** O gerenciador de pacotes utilizado neste projeto é o **npm**. Caso prefira, também pode utilizar yarn, pnpm ou bun, mas o padrão é npm.

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

3. Acesse [http://localhost:3000](http://localhost:3000) no navegador para visualizar a aplicação.

## Deploy

A maneira mais fácil de fazer o deploy é utilizando a [Vercel](https://vercel.com/). Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais opções.

## Saiba Mais

- [Documentação Next.js](https://nextjs.org/docs)
- [Tutorial Interativo Next.js](https://nextjs.org/learn)
- [Repositório no GitHub](https://github.com/vercel/next.js)

---
