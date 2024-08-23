# products-registration-backend-API

## 📃 Descrição

Este é um projeto backend de registro de produtos desenvolvido com Fastify, TypeScript, Prisma e Zod. A aplicação fornece uma API RESTful para realizar operações de CRUD (criar, ler e deletar) em um banco de dados PostgreSQL, gerenciado pelo Prisma. O projeto utiliza validação de dados com Zod e está configurado para permitir requisições CORS, facilitando a integração com um frontend.

## Requisitos

### Requisitos funcionais

- [ ✔ ] Criação de Produto: Endpoint `POST /products` que aceita um corpo com `name` e `price`. Retorna o `productId` do produto criado;
- [ ✔ ] Listagem de Produtos: Endpoint `GET /products` que suporta filtros opcionais por `id`, `name`, e paginação (`page`). Retorna uma lista de produtos e a contagem total;
- [ ✔ ] Deleção de Produto: Endpoint `DELETE /products/:id` que deleta um produto baseado no `id` fornecido;

### Regras de negócio

- [ ✔ ] Validação de Produtos: Ao criar um produto, o nome deve conter pelo menos 4 caracteres e o preço deve ser um número válido;
- [ ✔ ] Pesquisa de Produtos: A pesquisa por nome é case-insensitive, permitindo buscar produtos independentemente do uso de maiúsculas e minúsculas;
- [ ✔ ] Paginação: A listagem de produtos é paginada com um máximo de 20 produtos por página. Caso um número de página não seja especificado, a página inicial (1) é assumida;
- [ ✔ ] Deleção de Produtos: A tentativa de deletar um produto que não existe retorna um erro 404;

### Requisitos não-funcionais

- Performance: A API foi projetada para ser leve e rápida, utilizando o framework Fastify para obter alta performance.
- Segurança: Implementação de CORS com restrição de origem e métodos permitidos, garantindo a segurança das requisições HTTP.
- Escalabilidade: Estrutura modular com rotas organizadas em arquivos separados, permitindo fácil manutenção e escalabilidade.
- Manutenibilidade: Uso de TypeScript para melhorar a tipagem estática e reduzir erros durante o desenvolvimento, além de facilitar a manutenção futura.
- Validação de Dados: Uso de Zod para validação rigorosa de entradas, garantindo que apenas dados válidos sejam processados pela aplicação.

## 🛠 Tecnologias

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## 🧰 Recursos

Este projeto aborda o uso de algumas ferramentas de desenvolvimento back-end utilizado em conjunto com o Node.js:

- `prisma`: o prisma é um ORM que foi utilizado para simplificar a interação com o banco de dados fornecendo uma interface amigável para consultas e manipulação de dados. Nesta API, o prisma foi utilizado para permitir a interação com o PostegreSQL, que é um banco de dados relacional.
- `@fastify/cors`: é um plugin para o framework Fastify que implementa o suporte ao CORS (Cross-Origin Resource Sharing). Um mecanismo de segurança utilizado pelos navegadores para determinar se scripts de uma origem determinada têm permissão para acessar recursos de outra origem na web. Com isso o projeto Front-end conseguiu realizar as solicitações da API sem violar as políticas de segurança do navegador.
- `zod`: o zod é uma biblioteca TypeScript de validação de esquemas (schema validation) e tipagem de dados. Com esta ferramenta, está aplicação foi desenvolvida aplicando regras de validação para verificar a tipagem dos dados enviados e recebidos por esta API em tempo de compilação, para assim evitar erros de tipo tornando o código mais seguro.

## 🙋‍♂️ Colaboradores

Este projeto foi desenvolvido por mim Wilker Guimarães, com o objetivo de criar um sistema backend para complementar um projeto frontend fornecendo uma API REST que realiza as operações CRUD. Este projeto oferece uma base sólida para a construção de uma aplicação backend escalável e segura, adequada para o registro e gerenciamento de produtos em um ambiente corporativo ou de desenvolvimento. A implementação modular e o uso de padrões de validação e segurança garantem que o código seja de fácil manutenção e extensão.

Acesse este link para acessar a documentação do projeto frontend: https://github.com/WilkerGuimaraes/products-registration-frontend
