# 🚀 Playwright BDD com Cucumber

Este projeto tem como objetivo demonstrar a utilização do Playwright com BDD (Behavior Driven Development) utilizando Cucumber. O exemplo se baseia em testes automatizados para o site de exemplo: [E-commerce Playground](https://ecommerce-playground.lambdatest.io/).

## 🌐 O que é o Playwright?

Playwright é um framework de automação para navegadores que permite realizar testes end-to-end em aplicações web modernas. Ele oferece suporte para múltiplos navegadores (Chromium, Firefox e WebKit), bem como execução de testes em dispositivos móveis e ambientes headless (sem interface gráfica).

## 📖 O que é BDD (Behavior Driven Development)?

BDD é uma metodologia de desenvolvimento ágil que incentiva a colaboração entre desenvolvedores, QA e partes interessadas do negócio através de descrições claras e compreensíveis de comportamentos esperados. No contexto de testes, utiliza-se uma sintaxe chamada Gherkin, que permite descrever cenários de testes de forma legível.

## 🥒 O que é Cucumber?

Cucumber é uma ferramenta que suporta a escrita e execução de testes em BDD, interpretando arquivos no formato Gherkin e mapeando esses cenários a funções que realizam as ações necessárias para validar o comportamento descrito.

---

## 📁 Estrutura do Projeto

```plaintext
playwright-bdd/
├── tests/
│   ├── features/
│   │   ├── ecomic_changeName.feature
│   │   ├── ecomlogin.feature
│   ├── fixtures/
│   │   ├── fixture.js
│   │   ├── page.js
│   ├── hooks/
│   │   └── hooks.js
│   ├── pages/
│   │   ├── ecomic_changeNameObjs.js
│   │   ├── ecomloginObjs.js
│   └── steps/
│       ├── ecomic_changeNamesteps.js
│       ├── ecomLoginstpes.js
├── playwright.config.js
├── package.json
└── README.md
```

- **tests/features/**: Contém arquivos com cenários escritos em Gherkin.
- **tests/fixtures/**: Contém arquivos de configurações e inicializações necessárias para os testes.
- **tests/hooks/**: Contém hooks que são executados antes ou depois dos testes.
- **tests/pages/**: Implementação dos objetos de página utilizados nos testes.
- **tests/steps/**: Implementação dos passos definidos nas features.
- **playwright.config.js**: Arquivo de configuração do Playwright.
- **package.json**: Gerencia dependências e scripts do projeto.
- **README.md**: Instruções de uso do projeto.

---

## ⚙️ Configuração do Ambiente

1. Inicialize o projeto Playwright:

```bash
npm init playwright@latest
```

2. Instale as dependências necessárias:

```bash
npm i -D playwright-bdd @cucumber/cucumber@latest
```

3. Altere o arquivo `playwright.config.js` para suportar BDD:

```javascript
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  paths: ["tests/features/ecomlogin.feature"],
  require: ["tests/steps/ecomLoginstpes.js"],
});
```

4. Gere a estrutura básica para BDD:

```bash
npx bddgen
```

---

## ▶️ Execução dos Testes

Para executar os testes com relatório em HTML:

```bash
"test": "npx playwright test",
"test:ui": "npx playwright test --ui",
"test:debug": "npx playwright test --debug"
```
