# Poke-List

Poke-List é uma aplicação web desenvolvida em React utilizando Vite como bundler. O projeto permite que os usuários pesquisem e visualizem informações sobre Pokémon, utilizando a API pública do Pokémon.

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
poke-list/
├── public/ # Arquivos públicos
├── src/ # Código fonte da aplicação
│ ├── components/ # Componentes React
│ ├── services/ # Serviços para chamadas à API
│ ├── styles/ # Estilos CSS
│ ├── App.jsx # Componente principal da aplicação
│ ├── main.jsx # Ponto de entrada da aplicação
├── .gitignore # Arquivos a serem ignorados pelo Git
├── package.json # Dependências e scripts do projeto
├── vite.config.js # Configurações do Vite
└── README.md # Documentação do projeto

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir, siga estas etapas:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b feature/nome-da-sua-feature`).
3. Faça suas alterações e commit (`git commit -m 'Adiciona nova feature'`).
4. Envie para o repositório remoto (`git push origin feature/nome-da-sua-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para dúvidas ou sugestões, entre em contato:

- **Nome**: Arthur Alexandre
- **Email**: arthuralexandres.ti@gmail.com
- **GitHub**: [Arthur-Alexandre-Dev](https://github.com/Arthur-Alexandre-Dev)
