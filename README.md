# 🏫 Portal Acadêmico - Projeto React

Este é um projeto fictício desenvolvido como parte de uma atividade para a faculdade. O portal simula um site institucional com informações sobre a instituição, notícias e uma área administrativa para gerenciamento de conteúdos.

## 🔧 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router DOM** - Gerenciamento de rotas SPA.
- **React Bootstrap** - Estilização com componentes prontos baseados no Bootstrap.
- **Axios** - Requisições HTTP para consumo de API.
- **JSON Server** - Mock de API REST para simular o backend.

## 📁 Estrutura de Diretórios

```bash
├── public/
├── src/
│   ├── components/
│   │   ├── CustomNavbar.jsx
│   │   └── Footer.jsx
│   │   └── BannerAd.jsx   
│   ├── pages/
│   │   ├── Inicial.jsx
│   │   ├── Faculdade.jsx
│   │   ├── DpoLgpd.jsx
│   │   ├── Noticias.jsx
│   │   ├── VisualizaNoticia.jsx
│   │   └── Admin.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── index.js
├── db.json
└── README.md
```

## 📌 Funcionalidades

- Página inicial com informações institucionais.
- Página “A Faculdade” com dados sobre a instituição.
- Página “DPO / LGPD” com informações sobre proteção de dados.
- Listagem de notícias.
- Visualização de notícia específica via rota dinâmica.
- Tela administrativa com:
  - Biografia do administrador.
  - Painel de notificações.
  - Métricas fictícias da faculdade.
  - Barra lateral de navegação.
  - Rodapé com informações de copyright.

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor JSON:**
   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. **Rode a aplicação React:**
   ```bash
   npm start
   ```

5. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

## 👨‍💻 Autor

**Miguel Rodrigues**  
Desenvolvedor Back end e Suporte Técnico na Vsoft  
20 anos — apaixonado por dados, tecnologia e soluções inteligentes.