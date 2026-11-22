# Atividade 14 — Automação de Testes de Interface com Cypress

## 1. Sobre o projeto

Este projeto foi desenvolvido como parte da Atividade 14 — Automação de Testes de Interface com Cypress.

O objetivo é realizar testes automatizados de interface no site [Automation Test Store](https://automationteststore.com/), verificando funcionalidades de navegação, catálogo de produtos, carrinho de compras, formulários e responsividade.

A automação foi desenvolvida utilizando Cypress e JavaScript.

## 2. Tecnologias utilizadas

- **Cypress:** ferramenta de automação de testes de interface.
- **JavaScript:** linguagem utilizada para implementar os testes.
- **Node.js:** ambiente de execução JavaScript.
- **Visual Studio Code:** editor de código.

## 3. Estrutura do projeto

```text
projeto-cypress/
│
├── cypress/
│   ├── e2e/
│   │   ├── navegacao.cy.js
│   │   ├── produtos.cy.js
│   │   ├── carrinho.cy.js
│   │   ├── formularios.cy.js
│   │   └── responsividade.cy.js
│   │
│   ├── screenshots/
│   ├── videos/
│   └── support/
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## 4. Requisitos funcionais testados

### Módulo 01 — Navegação e categorias

- RF-01: Verificar acesso à página inicial.
- RF-02: Verificar navegação entre categorias.
- RF-03: Verificar acesso à categoria Makeup.
- RF-04: Verificar acesso à categoria Skincare.

### Módulo 02 — Catálogo e produtos

- RF-05: Verificar exibição dos produtos da categoria.
- RF-06: Verificar acesso aos detalhes de um produto.
- RF-07: Verificar busca de produto pelo nome.
- RF-08: Verificar informações comerciais do produto.

### Módulo 03 — Carrinho de compras

- RF-09: Verificar adição de produto ao carrinho.
- RF-10: Verificar alteração da quantidade de produtos.
- RF-11: Verificar remoção de produto do carrinho.
- RF-12: Verificar mensagem de carrinho vazio.

### Módulo 04 — Formulários e mensagens

- RF-13: Verificar comportamento do formulário de contato quando enviado vazio.
- RF-14: Verificar comportamento do formulário com endereço de e-mail inválido.

### Módulo 05 — Responsividade

- RF-15: Verificar carregamento da página inicial em dispositivos móveis.
- RF-16: Verificar carregamento da página inicial em dispositivos tablet.

## 5. Como instalar e executar o projeto

### Pré-requisitos

É necessário ter instalado:

- Node.js.
- npm.
- Cypress.

### Instalação das dependências

No terminal, dentro da pasta do projeto, execute:

```bash
npm install
```

### Abrir o Cypress

Para abrir a interface gráfica:

```bash
npx cypress open
```

### Executar todos os testes

Para executar a suíte completa pelo terminal:

```bash
npx cypress run
```

## 6. Evidências dos testes

O Cypress está configurado para gerar vídeos das execuções e capturas de tela quando ocorrem falhas.

Os arquivos são armazenados nos seguintes diretórios:

- `cypress/videos/`: vídeos das execuções.

Esses arquivos podem ser utilizados como evidências da execução dos testes automatizados.

## 7. Configuração do Cypress

O projeto utiliza as seguintes configurações principais:

- URL base: `https://automationteststore.com`
- Diretório dos testes: `cypress/e2e/**/*.cy.js`
- Resolução padrão: 1366 × 768.
- Gravação de vídeos habilitada.

## 8. Resultados dos testes

Os 16 casos de teste foram executados individualmente e aprovados durante o desenvolvimento.

| Módulo | Casos de teste | Resultado individual |
|---|---:|---|
| Navegação e categorias | 4 | Aprovados |
| Catálogo e produtos | 4 | Aprovados |
| Carrinho de compras | 4 | Aprovados |
| Formulários e mensagens | 2 | Aprovados |
| Responsividade | 2 | Aprovados |
| **Total** | **16** | **Aprovados individualmente** |

A execução integrada da suíte completa deverá ser registrada após a execução do comando `npx cypress run`.

## 9. Considerações finais

A atividade permitiu praticar a automação de testes de interface utilizando Cypress, desenvolver verificações de funcionalidades de um comércio eletrônico e compreender a importância da validação de elementos, navegação, formulários e diferentes resoluções de tela.

O projeto foi organizado em cinco módulos, totalizando 16 casos de teste automatizados.