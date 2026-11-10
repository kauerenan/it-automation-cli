# IT Automation CLI

CLI desenvolvida em Node.js e TypeScript para consulta de informações do computador e execução de tarefas simples de automação e diagnóstico através do terminal.

## 🎯 Objetivo

O projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais de Node.js, TypeScript e automação de tarefas relacionadas à infraestrutura de TI.

A aplicação permite consultar informações do sistema, interfaces de rede e processos em execução diretamente pelo terminal.

## 🚀 Funcionalidades

Atualmente, o projeto possui os seguintes comandos:

### `info`

Exibe informações do computador, incluindo:

- Nome do computador
- Sistema operacional
- Arquitetura
- Versão do sistema
- Memória RAM total
- Memória RAM livre
- Memória RAM utilizada
- Modelo do processador
- Quantidade de núcleos lógicos

### `rede`

Exibe informações das interfaces de rede disponíveis, incluindo:

- Nome da interface
- Família do endereço
- Endereço IP
- Máscara de rede
- Endereço MAC
- Identificação de interface interna

### `processos`

Consulta os processos em execução no sistema operacional.

No Windows, utiliza o comando `tasklist`.

Em sistemas Unix-like, utiliza o comando `ps`.

### `ajuda`

Exibe a lista de comandos disponíveis na aplicação.

## 🛠️ Tecnologias utilizadas

- Node.js
- TypeScript
- JavaScript
- CommonJS
- Git
- GitHub

### Módulos nativos do Node.js

- `node:os`
- `node:child_process`

## 📋 Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Node.js
- npm

Também é recomendado possuir o Git para acompanhar as versões do projeto.

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/kauerenan/it-automation-cli.git
```

Entre na pasta do projeto:

```bash
cd it-automation-cli
```

Instale as dependências:

```bash
npm install
```

## 🔨 Compilação

Para compilar o projeto TypeScript:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `dist`.

## ▶️ Execução

Depois da compilação, execute:

```bash
npm start
```

Para utilizar os comandos diretamente:

```bash
node dist/index.js info
```

```bash
node dist/index.js rede
```

```bash
node dist/index.js processos
```

```bash
node dist/index.js ajuda
```

## 💻 Exemplos

### Consultar informações do computador

```bash
node dist/index.js info
```

### Consultar informações de rede

```bash
node dist/index.js rede
```

### Consultar processos em execução

```bash
node dist/index.js processos
```

### Consultar ajuda

```bash
node dist/index.js ajuda
```

## 📚 Conceitos praticados

Durante o desenvolvimento deste projeto foram praticados conceitos importantes de Node.js e TypeScript, como:

- Argumentos de linha de comando
- `process.argv`
- Condicionais
- Arrays e objetos
- Loops
- Funções nativas do Node.js
- Módulos
- Tipagem com TypeScript
- Tratamento de erros com `try/catch`
- Execução de comandos do sistema
- Manipulação de informações do sistema operacional
- Informações de hardware
- Informações de rede
- Gerenciamento de processos
- Compilação TypeScript
- Organização de projeto
- Git e GitHub

## 🧠 O que este projeto representa

Este projeto foi desenvolvido como parte do processo de aprendizado em desenvolvimento Backend com Node.js, JavaScript e TypeScript.

Além da programação, ele também aproxima o desenvolvimento de software de conceitos de infraestrutura de TI, permitindo trabalhar diretamente com informações do sistema operacional e comandos do terminal.

## 📌 Próximos projetos

Os próximos projetos terão como foco o desenvolvimento Backend com Node.js, evoluindo gradualmente para:

- APIs REST
- Express
- PostgreSQL
- Autenticação
- Testes
- Docker
- Deploy

## 👨‍💻 Autor

Kaue Renan

GitHub: https://github.com/kauerenan