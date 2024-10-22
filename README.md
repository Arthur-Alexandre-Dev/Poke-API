# Pokedex

Pokedex é uma aplicação web desenvolvida em React utilizando Vite como bundler. O projeto permite que os usuários pesquisem e visualizem informações sobre Pokémon, utilizando a API pública do Pokémon.

## Layout

https://github.com/user-attachments/assets/3cc7b5eb-3dc2-47bc-9680-81824ba7cbe0

## Funcionalidades

- **Pesquisa de Pokémon**: Os usuários podem pesquisar Pokémon pelo nome.
- **Filtragem por Tipo**: Os usuários podem filtrar Pokémon por tipo (ex: Fogo, Água, etc.).
- **Carregamento Infinito**: A aplicação carrega mais Pokémon à medida que o usuário rola para baixo.
- **Exibição de Detalhes**: Cada Pokémon é exibido com sua imagem, nome e tipo.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de construção rápida para desenvolvimento de aplicações web.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **React Infinite Scroll Component**: Componente para implementar rolagem infinita.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Arthur-Alexandre-Dev/Poke-API.git
   ```

2. **Navegue até o diretório do projeto**:

   ```bash
   cd Poke-API
   ```

3. **Instale as dependências**:

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

5. **Acesse a aplicação**: Abra seu navegador e vá para `http://localhost:3000`.

## Estrutura do Projeto
```bash
├── public/               # Arquivos estáticos
├── src/                  # Código fonte da aplicação
│   ├── assets/           # Recursos estáticos (imagens, ícones, etc.)
│   ├── components/       # Componentes reutilizáveis da interface
│   ├── hooks/            # Hooks personalizados
│   ├── pages/            # Páginas da aplicação
│   ├── services/         # Serviços (ex.: chamadas à API)
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Ponto de entrada da aplicação
├── .gitignore            # Arquivos e pastas ignorados pelo Git
├── package.json          # Dependências e scripts do projeto
├── vite.config.js        # Configuração do Vite
└── README.md             # Documentação do projeto
```


## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir, siga estas etapas:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b feature/nome-da-sua-feature`).
3. Faça suas alterações e commit (`git commit -m 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nome-da-sua-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](https://github.com/Arthur-Alexandre-Dev/Pokedex/blob/main/LICENSE) para mais detalhes.

## Contato

Para dúvidas ou sugestões, entre em contato:

- **Nome**: Arthur Alexandre
- **Email**: arthuralexandres.ti@gmail.com
- **GitHub**: [Arthur-Alexandre-Dev](https://github.com/Arthur-Alexandre-Dev)
