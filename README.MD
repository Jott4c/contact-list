# Documentação da API Contact list!

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
  - [Instalando Dependências](#21-instalando-dependências)
  - [Variáveis de Ambiente](#22-variáveis-de-ambiente)
  - [Migrations](#23-migrations)
- [Endpoints](#3-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

---

## 2. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 2.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Clients](#1-clients)
  - [POST - /clients](#11-criação-de-usuário)
  - [GET - /clients](#12-listando-usuários)
  - [GET - /clients/:id](#13-listar-usuário-por-id)
  - [PATCH - /clients/:id](#14-atualizando-os-dados-do-usuário)
  - [DELETE - /clients/:id](#15-deletar-usuário)
- [Login](#2-login)
  - [POST - /session](#21-login-do-user)
- [Contact](#3-contact)
  - [POST - /contact](#31-criação-de-contato)
  - [GET - /contact](#32-lista-todos-os-contatos)
  - [GET - /contact/:id](#33-listar-contato-por-id-do-usuário)
  - [PATCH - /contact/:id](#34-atualizando-os-dados-do-contato)
  - [DELETE - /contact/:id](#35-deletar-contato)

---

## 1. **Users**

[ Voltar para os Endpoints ](#3-endpoints)

O objeto User é definido como:

| Campo     | Tipo   | Descrição                                   |
| --------- | ------ | ------------------------------------------- |
| id        | string | Identificador único do usuário              |
| name      | string | O nome do usuário.                          |
| email     | string | O e-mail do usuário.                        |
| password  | string | A senha de acesso do usuário                |
| createdAt | date   | Define a hora e data de criação do usuário. |

### Endpoints

| Método | Rota       | Descrição                                                  |
| ------ | ---------- | ---------------------------------------------------------- |
| POST   | /users     | Criação de um usuário.                                     |
| GET    | /users     | Lista todos os usuários                                    |
| GET    | /users/:id | Lista um usuário usando seu ID como parâmetro              |
| PATCH  | /users/:id | Atualiza os dados do usuário usado seu ID como parâmetro   |
| DELETE | /users/:id | Deleta um usuário através do seu ID passado como parâmetro |
|        |

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#3-endpoints)

### `/clients`

### Exemplo de Request:

```
POST /clients
Host: https://localhost:4000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json

	{
	"name":"Admin",
	"email": "admin@admin.com",
	"password": "admin",
    "phone": "99 99999-9999"

}

```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "3bb6ffa8-d771-44f1-87e5-72b229264118",
  "name": "admin",
  "phone": "99 99999-9999",
  "email": "admin@admin.com",
  "createdAt": "2023-03-27T07:27:49.128Z"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                 |
| --------------- | ------------------------- |
| 400 Bad Request | Email is not valid        |
| 400 Bad Request | Email already registered. |

---

### 1.2. **Listando todos os usuários**

[ Voltar aos Endpoints ](#3-endpoints)

### `/clients`

### Exemplo de Request:

```
GET /clients
Host: https://localhost:4000
Authorization: Bearer {token}
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "3bb6ffa8-d771-44f1-87e5-72b229264118",
    "name": "admin",
    "phone": "99 99999-9999",
    "email": "admin@admin.com",
    "createdAt": "2023-03-27T07:27:49.128Z"
  }
]
```

### Possíveis Erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Invalid token |

---

### 1.3. **Listar Usuário por ID**

[ Voltar aos Endpoints ](#3-endpoints)

### `/clients/:id`

### Exemplo de Request:

```
GET /clients/3bb6ffa8-d771-44f1-87e5-72b229264118
Host: https://localhost:4000
Authorization: Bearer {token}
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "3bb6ffa8-d771-44f1-87e5-72b229264118",
  "name": "admin",
  "phone": "99 99999-9999",
  "email": "admin@admin.com",
  "createdAt": "2023-03-27T07:27:49.128Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Invalid token |

### 1.4. **Atualizando os dados do Usuário**

[ Voltar aos Endpoints ](#3-endpoints)

### `/clients/:id`

### Exemplo de Request:

```
PATCH /clients/3bb6ffa8-d771-44f1-87e5-72b229264118
Host: https://localhost:4000
Authorization: Bearer {token}
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
{
  "name": "superAdmin"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "3bb6ffa8-d771-44f1-87e5-72b229264118",
  "name": "superAdmin",
  "phone": "99 99999-9999",
  "email": "admin@admin.com",
  "createdAt": "2023-03-27T07:27:49.128Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição           |
| ---------------- | ------------------- |
| 400 Unauthorized | Email has been used |
| 404 Bad Request  | User not founded    |

### 1.5. **Deletar Usuário**

[ Voltar aos Endpoints ](#3-endpoints)

### `/clients/:id`

### Exemplo de Request:

```
DELETE /clients/3bb6ffa8-d771-44f1-87e5-72b229264118
Host: https://localhost:4000
Authorization: Bearer {token}
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```
204 NOT CONTENT
```

```json
vazio
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token  |
| 404 Bad Request  | User not found |

## 2. **Login**

[ Voltar para os Endpoints ](#3-endpoints)

O objeto de login é definido como:

| Campo    | Tipo   | Descrição                                        |
| -------- | ------ | ------------------------------------------------ |
| email    | string | O e-mail do usuário usado no cadastro.           |
| password | string | A senha de acesso do usuário criada no cadastro. |

### Endpoints

| Método | Rota     | Descrição         |
| ------ | -------- | ----------------- |
| POST   | /session | Login do usuário. |

### 2.1. **Login do user**

[ Voltar para os Endpoints ](#3-endpoints)

### `/session`

### Exemplo de Request:

```
POST /session
Host: https://localhost:4000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "admin",
  "password": "admin"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "56ac622f-44bd-43a0-8b80-e2e1669885c6",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FjdGl2ZSI6dHJ1ZSwiaXNBZG0iOnRydWUsImlhdCI6MTY2Nzk2NTgxNSwiZXhwIjoxNjY4MDUyMjE1LCJzdWIiOiI1NmFjNjIyZi00NGJkLTQzYTAtOGI4MC1lMmUxNjY5ODg1YzYifQ.klfpodJJA0rZyXMROrv7yWlU4Uo_dTmKH95grIxaA94"
}
```

### Possíveis Erros:

| Código do Erro | Descrição               |
| -------------- | ----------------------- |
| 403 Forbidden  | Wrong email or password |

## 3. **Contact**

[ Voltar para os Endpoints ](#3-endpoints)

O objeto contact é definido como:

| Campo | Tipo   | Descrição                      |
| ----- | ------ | ------------------------------ |
| id    | string | Identificador único do contato |
| name  | string | Nome do contato.               |
| email | string | Email do contato.              |
| phone | string | Telefone do contato            |

### Endpoints

| Método | Rota           | Descrição                                                   |
| ------ | -------------- | ----------------------------------------------------------- |
| POST   | /contacts      | Criação de um contato.                                      |
| GET    | /contacts      | Lista todos contatos.                                       |
| GET    | /contacts/:id  | Lista um contato usando o ID do usuário como parâmetro.     |
| PATCH  | /contacts/:id  | Atualiza os dados do contato usando seu ID como parâmetro.  |
| DELETE | /contacts /:id | Deleta um contato através do seu ID passado como parâmetro. |
|        |

### 3.1. **Criação de Contato**

[ Voltar aos Endpoints ](#3-endpoints)

### `/contacts`

Para criação do contato é preciso o token de um usuário válido logado

### Exemplo de Request:

```
POST /contacts
Host: https://localhost:4000
Authorization: Bearer {token}
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "name": "Junior",
  "email": "jrcba@gmail.com",
  "phone": "67993443452"
}
```

### Exemplo de Response:

```
201 CREATED
```

```json
{
  "id": "3ce0090a-fde1-48ec-9f0a-6e8514ab8b20",
  "name": "Junior",
  "phone": "67993443452",
  "email": "jrcba@gmail.com"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição        |
| --------------- | ---------------- |
| 404 Bad Request | User not founded |

### 3.2. **Lista todos os contatos**

[ Voltar aos Endpoints ](#3-endpoints)

### `/contacts`

### Exemplo de Request:

```
GET /contacts
Host: https://localhost:4000
Authorization: Bearer {token}
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "3bb6ffa8-d771-44f1-87e5-72b229264118",
  "name": "admin",
  "phone": "121344343455",
  "email": "admin@admin.com",
  "createdAt": "2023-03-27T07:27:49.128Z",
  "contact": [
    {
      "id": "3ce0090a-fde1-48ec-9f0a-6e8514ab8b20",
      "name": "Junior",
      "phone": "67993443452",
      "email": "jrcba@gmail.com"
    }
  ]
}
```

### Possíveis Erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Invalid token |

### 3.3. **Listar Contato por ID do contato**

[ Voltar aos Endpoints ](#3-endpoints)

### `/contacts/:id`

### Exemplo de Request:

```
GET /users/a8465d9b-a646-46a9-a8d9-a1004aa7e3ce
Host: https://localhost:4000
Authorization: Bearer {token}
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do contato |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "3ce0090a-fde1-48ec-9f0a-6e8514ab8b20",
  "name": "Junior",
  "phone": "67993443452",
  "email": "jrcba@gmail.com"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição     |
| ---------------- | ------------- |
| 401 Unauthorized | Invalid token |

### 3.4. **Atualizando os dados do contato**

[ Voltar aos Endpoints ](#3-endpoints)

### `/contacts/:id`

O usuário que estiver devidamente autorizado (deve ter token válido), poderá fazer atualizações nos dados de seus contatos.

### Exemplo de Request:

```
PATCH /contacts/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: https://localhost:4000
Authorization: Bearer {token}
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do anúncio |

### Corpo da Requisição:

```json
{
  "name": "Fabio"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "3ce0090a-fde1-48ec-9f0a-6e8514ab8b20",
  "name": "Fabio",
  "phone": "67993443452",
  "email": "jrcba@gmail.com"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição        |
| ---------------- | ---------------- |
| 404 Bad Request  | User not founded |
| 404 Bad Request  | User not founded |
| 401 Unauthorized | Invalid token    |

### 3.5. **Deletar Contato**

[ Voltar aos Endpoints ](#3-endpoints)

### `/contacts/:id`

O usuário que estiver devidamente autorizado (deve ter token válido), poderá fazer o delete de contato.

### Exemplo de Request:

```
PATCH /contacts/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: https://localhost:4000
Authorization: Bearer {token}
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                      |
| --------- | ------ | ------------------------------ |
| id        | string | Identificador único do anúncio |

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```
204 NOT CONTENT
```

```json
vazio
```

### Possíveis Erros:

| Código do Erro   | Descrição                 |
| ---------------- | ------------------------- |
| 401 Unauthorized | Invalid token             |
| 401 Unauthorized | You don't have permission |
| 404 Bad Request  | Announce not founded      |
