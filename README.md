# Mvp Volunteer Activity

MVP de um sistema de gestão de atividades voluntárias. Administradores criam e
gerenciam atividades; usuários comuns navegam pelas atividades disponíveis,
se inscrevem, cancelam inscrições e acompanham em quais atividades já estão
inscritos.

Autores: Helton Dick e Felippe Angrevski

O projeto é dividido em duas aplicações independentes que conversam por HTTP:

```
Mvp_Volunteer_Activity/
  backend/   → API REST (NestJS + Prisma + MySQL)
  frontend/  → interface web (Next.js)
```

---

## Stack

### Backend
| Ferramenta / Função no projeto |

| **NestJS** (TypeScript) | Framework da API — módulos, controllers, services |
| **Prisma ORM** (`provider = "prisma-client"`, gerador novo) | Acesso ao banco de dados, migrations |
| **MySQL** | Banco de dados relacional |
| **@prisma/adapter-mariadb** | Driver adapter que o Prisma usa para falar com o MySQL/MariaDB |
| **class-validator** / **class-transformer** | Validação e transformação automática dos dados recebidos nas rotas (DTOs) |
| **@nestjs/jwt** | Geração e verificação de tokens JWT |
| **bcrypt** | Hash de senhas (nunca são salvas em texto puro) |
| **dotenv** | Carrega variáveis do `.env` no ambiente Node |
| **@nestjs/swagger** (`@ApiProperty`) | Decorators de documentação nos DTOs |

### Frontend
| Ferramenta / Função no projeto |

| **Next.js (App Router)** | Framework React, roteamento por pastas |
| **TypeScript** | Tipagem estática em todo o projeto |
| **React** (hooks: `useState`, `useEffect`) | Componentes e estado das telas |
| **CSS puro** (sem framework de CSS) | Estilização via `globals.css` com tokens de design (cores, tipografia) |
| **next/font/google** | Carrega as fontes Fraunces (títulos) e Public Sans (texto) |
| **localStorage** | Guarda o token JWT e os dados do usuário logado no navegador |

### Banco de dados

**MySQL**, acessado via Prisma com o driver adapter de MariaDB (compatível com
MySQL). Três tabelas principais:

- `users` — contas do sistema (admin ou usuário comum)
- `activities` — atividades voluntárias cadastradas
- `activity_participants` — tabela de associação N:N entre `users` e
  `activities` (quem está inscrito em qual atividade)

---

## Estrutura do backend

```
backend/
  prisma/
    schema.prisma               Modelos do banco (user, activity, activity_participant, enum Role) e migrations
    migrations/                 Histórico de migrations geradas pelo Prisma

  src/
    main.ts                     Ponto de entrada: carrega .env, configura CORS e o ValidationPipe global
    app.module.ts               Módulo raiz: importa todos os outros módulos

    prisma/
      prisma.service.ts         Conecta no banco via PrismaMariaDb adapter, usando as variáveis DATABASE_*
      prisma.module.ts          Módulo global — PrismaService fica disponível em qualquer lugar sem reimportar

    activities/
      activities.controller.ts  Rotas HTTP de /activities (GET público p/ logados, POST/PATCH/DELETE só ADMIN)
      activities.service.ts     Regras de negócio e queries Prisma para atividades
      acrivities.module.ts      Liga controller + service
      types/
        create-activitie.dto.ts Validação dos campos ao criar uma atividade
        update-activitie.dto.ts Igual ao de criar, mas com todos os campos opcionais (PartialType)

    users/
      users.controller.ts       Rotas de /users — restritas a ADMIN (@Roles no controller inteiro)
      users.service.ts          CRUD de usuários; faz hash da senha e nunca devolve o campo password
      users.module.ts           Liga controller + service
      types/
        create-user.dto.ts      Validação dos campos ao criar um usuário
        update-user.dto.ts      Versão parcial do DTO de criação

    auth/
      auth.controller.ts        Rotas públicas /auth/register e /auth/login
      auth.service.ts           Verifica credenciais, faz hash/compare de senha, emite o JWT (com id, email e role)
      auth.module.ts            Registra o JwtModule e os guards globais (JwtAuthGuard, RolesGuard)
      types/
        register.dto.ts         Validação de nome/e-mail/senha no cadastro
        login.dto.ts            Validação de e-mail/senha no login

    volunteer/  (activity_participant)
      activityparticipant.controller.ts
                                 Rotas aninhadas /activities/:id/participants
                                 - GET: lista quem está inscrito (qualquer logado)
                                 - POST /me, DELETE /me: o próprio usuário se inscreve/cancela
                                 - POST, DELETE /:participantId: ADMIN gerencia qualquer inscrição
      me.controller.ts           Rota GET /me/participations — atividades em que o usuário logado está inscrito
      activityparticipant.service.ts  Regras de negócio: evita inscrição duplicada, confirma que atividade/usuário existem
      activityparticipant.module.ts   Liga os dois controllers ao service
      types/
        create-activity-participant.dto.ts  Validação do participantId ao inscrever alguém (uso administrativo)

    common/
      decorators/
        public.decorator.ts         @Public() — marca uma rota como isenta do guard global de autenticação
        roles.decorator.ts          @Roles('ADMIN') — define quais papéis podem acessar a rota
        current-user.decorator.ts   @CurrentUser() — extrai o usuário autenticado (id/email/role) direto do request
      guards/
        jwt-auth.guard.ts        Guard global: valida o token Bearer em toda rota, exceto as marcadas @Public()
        roles.guard.ts           Guard global: compara o papel do usuário logado com o exigido por @Roles()

    generated/
      prisma/                    Client do Prisma gerado automaticamente (nunca editar à mão, nem versionar)

  .env                          Variáveis de ambiente (banco de dados, JWT, porta)
```

### Fluxo de autenticação e permissões

1. `POST /auth/register` ou `POST /auth/login` devolvem `{ user, token }`.
   A senha é validada com bcrypt e nunca retorna nas respostas.

2. O token JWT carrega `{ sub: id, email, role }` e expira em 7 dias.

3. **Todas as rotas da API exigem esse token no header
   `Authorization: Bearer <token>`**, exceto `/auth/register` e `/auth/login`
   (marcadas com `@Public()`).

4. O `JwtAuthGuard` roda primeiro (valida o token e popula `request.user`);
   o `RolesGuard` roda em seguida e bloqueia rotas marcadas com
   `@Roles('ADMIN')` se o usuário não for admin.

5. Não existe endpoint para alguém se tornar admin sozinho — a promoção é
   manual, direto no banco (ex: via `npx prisma studio`), por segurança.

### Referência rápida das rotas da API

| Método | Rota | Quem acessa | O que faz |

| POST | `/auth/register` | Público | Cria uma conta (papel `USER` por padrão) |
| POST | `/auth/login` | Público | Autentica e devolve o token |
| GET | `/activities` | Qualquer logado | Lista todas as atividades |
| GET | `/activities/:id` | Qualquer logado | Detalhe de uma atividade |
| POST | `/activities` | ADMIN | Cria atividade |
| PATCH | `/activities/:id` | ADMIN | Edita atividade |
| DELETE | `/activities/:id` | ADMIN | Remove atividade |
| GET | `/activities/:id/participants` | Qualquer logado | Lista quem está inscrito nessa atividade |
| POST | `/activities/:id/participants/me` | Qualquer logado | Inscreve o próprio usuário |
| DELETE | `/activities/:id/participants/me` | Qualquer logado | Cancela a própria inscrição |
| POST | `/activities/:id/participants` | ADMIN | Inscreve qualquer usuário (body: `participantId`) |
| DELETE | `/activities/:id/participants/:participantId` | ADMIN | Remove qualquer participante |
| GET | `/me/participations` | Qualquer logado | Atividades em que o usuário logado está inscrito |
| GET | `/users` | ADMIN | Lista todos os usuários (sem senha) |
| GET | `/users/:id` | ADMIN | Detalhe de um usuário |
| POST | `/users` | ADMIN | Cria usuário diretamente |
| PATCH | `/users/:id` | ADMIN | Edita usuário |
| DELETE | `/users/:id` | ADMIN | Remove usuário |

---

## Estrutura do frontend

```
frontend/
  app/
    layout.tsx                  Layout raiz: só <html>/<body> + fontes (Fraunces/Public Sans). Envolve tudo.
    globals.css                 Tokens de design (cores, tipografia) e todas as classes CSS do projeto

    (app)/                      Grupo de rotas da área logada (não aparece na URL)
      layout.tsx                Protege a área toda (RequireAuth) e renderiza Sidebar + conteúdo
      page.tsx                  Dashboard "/" — cards diferentes conforme o papel do usuário

      activities/                Só ADMIN
        page.tsx                 Lista de atividades em tabela, com editar/excluir
        new/page.tsx             Formulário de criar atividade
        [id]/edit/page.tsx       Formulário de editar atividade

      browse/                    Qualquer usuário logado
        page.tsx                 Grid de cards com todas as atividades disponíveis
        [id]/page.tsx            Detalhe da atividade: descrição, lista de inscritos, botão inscrever/cancelar

      my-activities/
        page.tsx                 Grid de cards das atividades em que o usuário está inscrito

      users/                     Só ADMIN
        page.tsx                 Tabela somente leitura com todos os usuários cadastrados

    (auth)/                      Grupo de rotas sem sidebar
      layout.tsx                 Tela cheia centralizada
      login/page.tsx             Formulário de login com validação client-side
      register/page.tsx          Formulário de cadastro com validação client-side

  components/
    layout/
      Sidebar.tsx                Navegação lateral; muda os links conforme o papel (ADMIN vs USER) e mostra logout
    ui/
      Button.tsx                 Botão genérico reaproveitado em todo o app (variantes primary/ghost/danger)
    activities/
      ActivityForm.tsx           Formulário compartilhado entre criar e editar atividade
      ActivitiesTable.tsx        Tabela de atividades com ação de excluir (com confirmação)
    auth/
      RequireAuth.tsx            Componente que bloqueia o conteúdo até confirmar login (e papel, se exigido)

  hooks/
    useCurrentUser.ts            Hook que lê o usuário logado do localStorage

  lib/
    api.ts                       Cliente HTTP único: monta a URL da API, anexa o token Bearer automaticamente,
                                 e expõe activitiesApi, authApi, participantsApi e usersApi
    auth.ts                      Funções de sessão: salvar/ler/limpar token e usuário no localStorage
    validation.ts                Funções de validação reutilizadas nos formulários (ex: formato de e-mail)

  types/
    activity.ts                  Tipos de Activity e dos dados de formulário/criação/edição
    auth.ts                      Tipos de usuário autenticado, login, registro e resposta de autenticação
    participation.ts             Tipos da relação usuário-atividade (participante de uma atividade / "minhas inscrições")
    user.ts                      Tipo do usuário como listado na tela de admin

  .env.local                     NEXT_PUBLIC_API_URL — endereço da API (http://localhost:3001)
```

### Como a autorização funciona no frontend

- O token e os dados do usuário ficam salvos no `localStorage` (função
  `saveSession` em `lib/auth.ts`) assim que o login/registro é concluído.
- `lib/api.ts` lê esse token e adiciona `Authorization: Bearer <token>` em
  toda chamada à API automaticamente.
- `components/auth/RequireAuth.tsx` é usado para proteger páginas: redireciona
  para `/login` se não houver usuário salvo, e para `/` se o papel do usuário
  não bater com o exigido (`role="ADMIN"`, por exemplo).
- A proteção da área logada como um todo acontece em
  `app/(app)/layout.tsx`; a proteção por papel específico (admin-only)
  acontece dentro de cada página que precisa dela.
- **Importante:** essa é uma proteção só de interface (esconde telas e
  botões). A segurança de verdade está no backend, que valida o token e o
  papel em cada rota — mesmo que alguém burle a tela, a API recusa a
  ação.

---

## Rodando o projeto localmente

### Backend
```bash
cd backend
npm install
npx prisma migrate dev   # aplica as migrations e gera o Prisma Client
npm run start:dev        # sobe em http://localhost:3001
```

Variáveis esperadas no `backend/.env`:
```dotenv
DATABASE_URL="mysql://usuario:senha@127.0.0.1:3306/nome_do_banco"
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_USER=usuario
DATABASE_PASSWORD=senha
DATABASE_NAME=nome_do_banco
JWT_SECRET=uma_string_longa_e_aleatoria
```

### Frontend
```bash
cd frontend
npm install
npm run dev               # sobe em http://localhost:3000
```

Variável esperada no `frontend/.env.local`:
```dotenv
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Primeiro acesso
1. Cadastre uma conta pela tela `/register` (ela nasce com o papel `USER`).
2. Promova essa conta a administradora manualmente no banco, por exemplo com
   `npx prisma studio` (dentro de `backend/`) e alterando o campo `role` do
   usuário para `ADMIN`.
3. Faça login novamente para que o token já venha com o papel atualizado.

---
