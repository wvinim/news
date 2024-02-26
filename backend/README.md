# news

Uma API de notícias feita para um desafio técnico.

### Tecnologias

- Node 20.11.1
- Express
- MongoDB
- Jest
- MongoMemoryServer
- Supertest
- Docker

## Antes de iniciar...

Eu desenvolvi esse desafio em caráter de demonstração, adicionei alguns exemplos de validações, testes e uso de ferramentas.

Essa API pode ser iniciada em seu ambiente local ou via docker, como preferir.

Os testes rodam utilizando o [mongodb-memory-server](https://github.com/nodkz/mongodb-memory-server), não é necessário configurar um servidor mongodb específico para testes.

Eu utilizei o gerenciador de migrações [migrate-mongo](https://github.com/seppevs/migrate-mongo) para importar a carga inicial de notícias.

### Instalando

- npm

  ```sh
  npm install
  ```

- Edite o arquivo .env

### Rodando

Segue uma breve explicação sobre cada comando disponibilizado em "scripts" do arquivo "package.json".

- Testes automatizados

  ```sh
  npm run test
  ```

- Ambiente local

  ```sh
  npm start
  ```

- Ambiente dev

  ```sh
  npm run dev
  ```

- Migração autônoma (Utilizázel no docker)

  ```sh
  npm run migrate
  ```

- Rollback de migração autônoma (Utilizázel no docker)

  ```sh
  npm run migrate-rollback
  ```

- Migração autônoma e start da aplicação (Padrão setado no Dockerfile)

  ```sh
  npm run migrate-start
  ```

- Migração autônoma para ambiente local linux

  ```sh
  npm run migrate-linux
  ```

- Rollback de migração autônoma para ambiente local linux

  ```sh
  npm run migrate-linux-rollback
  ```

- Migração autônoma e start da aplicação para ambiente local linux

  ```sh
  npm run migrate-linux-start
  ```

- Para windows a mesma lógica, basta substituir a palavra "linux" por "windows"

- Docker

  ```sh
  docker-compose up -d
  ```

No arquivo Dockerfile, o gerenciador de migrações está setado para executar ao iniciar o container, isso não é recomendável em produção por afetar a performance da disponibilização de pods.

### Melhorias que eu consideraria aplicar no projeto

- Adicionar um sistema de login com hierarquia de permissões
- Adicionar lógica para registrar as atividades
- Adicionar lógica para manter um histórico das alterações feitas pelos usuários
- Adicionar mais validações e aplicar em mais campos
- Padronizar o idioma dos modelos e toda a aplicação (De acordo com a convenção do time/empresa)
- Configurar "cors" corretamente para os domínios seguros
