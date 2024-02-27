# News Front-end

Um APP de notícias feito para um desafio técnico.

### Tecnologias

- Node 20.11.1
- Vite
- React 18.2
- ContextAPI
- React Router DOM
- Axios
- Jest
- Docker

## Antes de iniciar...

Eu desenvolvi esse desafio em caráter de demonstração, adicionei alguns exemplos de testes automatizados e uso de ferramentas.

Esse APP pode ser iniciado em seu ambiente local ou via docker, como preferir.

Utilizei uma técnica para manter parte da URL amigável na página de visualização de notícias, com redirecionamento para os casos de erro.

### Instalando

- npm

  ```sh
  npm install
  ```

- Edite o arquivo .env
  - VITE_BASE_API_URL = 'A URL BASE DA API'
  - VITE_CLIENT_PORT = 'A PORTA QUE DESEJA EXECUTAR O APP'

### Rodando

Segue uma breve explicação sobre cada comando disponibilizado em "scripts" do arquivo "package.json".

- Testes automatizados

  ```sh
  npm run test
  ```

- Ambiente dev

  ```sh
  npm run dev
  ```

- Build (Gera a pasta dist)

  ```sh
  npm run build
  ```

- Previw (Depende do comando build)

  ```sh
  npm run preview
  ```

- Docker (Preview)

  ```sh
  docker-compose up -d
  ```

### Melhorias que eu consideraria aplicar no projeto

- Implementar o CRUD de notícias no front
- Adicionar um editor de texto que converte as marcações para HTML
- Aplicar mais regras de estilização de acordo com o system design da empresa
