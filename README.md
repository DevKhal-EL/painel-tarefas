# Painel de Tarefas

Sistema visual para exibição de tarefas, eventos e avisos em formato de painel corporativo.

## Objetivo

O projeto está sendo desenvolvido em Angular e tem como objetivo apresentar informações de forma clara e rápida para usuários que visualizam o painel em computadores ou televisores.

Inicialmente o foco está na construção da interface visual. Em etapas futuras serão desenvolvidas integrações com APIs REST para consumo de dados em formato JSON.

## Tecnologias Utilizadas

* Angular
* TypeScript
* SCSS
* HTML5

## Funcionalidades Planejadas

* Painel de tarefas em colunas
* Organização por status

  * A Fazer
  * Em Andamento
  * Aguardando
* Exibição de responsável, prioridade e data
* Integração com API REST
* Atualização dinâmica dos dados
* Layout otimizado para TVs e monitores

## Estrutura do Projeto

```text
src/
├── app/
│   ├── board/
│   ├── task-card/
│   └── task.model.ts
├── styles.scss
└── index.html
```

## Como Executar

### Verificar se Node.js e npm estão instalados:

```bash
node --version
npm --version
```

### Instale o Angular CLI globalmente:

```bash
npm install -g @angular/cli
```

### Instalar dependências:

```bash
npm install
```

### Executar o projeto

```bash
ng serve
```

A aplicação estará disponível em:

```text
http://localhost:4200
```

## Status do Projeto

🚧 Em desenvolvimento

Atualmente a interface principal do painel está sendo construída.

## Autor

Benício Khalel

Desenvolvido como projeto de estudo e prática de desenvolvimento Front-end com Angular.
