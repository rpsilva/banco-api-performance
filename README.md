# Banco API Performance Tests

## Introdução
Este repositório tem como objetivo centralizar e organizar testes de performance utilizando **JavaScript** e **k6**, aplicados a APIs. Ele foi criado para validar requisitos não funcionais como tempo de resposta, estabilidade, escalabilidade e comportamento sob carga, servindo como apoio técnico para times de QA, engenharia e arquitetura.

Os testes foram estruturados para permitir fácil manutenção, reutilização e execução em diferentes ambientes por meio de variáveis de ambiente.

---

## Tecnologias Utilizadas
- **JavaScript (ES6+)**
- **k6** – ferramenta de testes de performance
- **Git / GitHub** – versionamento de código
- **Variáveis de ambiente** – configuração dinâmica de execução

---

## Estrutura do Repositório
```text
banco-api-performance/
│
├── fixtures/
│   └── *.json
│
├── helpers/
│   └── helpers.js
│
├── tests/
│   └── *.js
│
├── utils/
│   └── *.json
│
├── config/
│   └── *.json
│
│
└── README.md
```

---

## Objetivo de Cada Grupo de Arquivos

### `fixtures/`
Arquivos JSON utilizados como massa de dados para os testes.

### `helpers/`
Conté funções auxiliares (ex.: geração de tokens, manipulação de datas, validação de resposta)

### `tests/`
Contém os testes organizados por funcionalidade da API (ex.; autenticação, transferências)

### `utils/`
Funções utilitárias reutilizáveis

### `config/`
Arquivos de configuração de variáveis de ambiente


---

## Modo de Instalação

### 1. Clonar o repositório
```bash
git clone https://github.com/rpsilva/banco-api-performance.git
cd banco-api-performance
```

### 2. Instalar o k6
Siga a documentação oficial:  
https://k6.io/docs/get-started/installation/

---

## Modo de Execução do Projeto

### Variáveis de Ambiente Obrigatórias

Altere o arquivo 'config.local.json' e defina a URL base da API a ser testada:

```json
{
    "baseUrl": "http://localhost:3000"
}
```

Essas variáveis serão usadas dinamicamente nos testes para montar as requisições

### Execução Básica de um Teste
```bash
k6 run tests/login.test.js
```
Certifique-se de passar a variável de ambiente 'BASE_URL', caso não esteja usando um 'config.local.json' ou uma abordagem de carregamento automático:

```bash
k6 run tests/autenticacao/login.test.js -e BASE_URL=http://localhost:3000
```


---

## Execução com Dashboard e Exportação de Relatório

Para acompanhar a execução em tempo real via dashboard web do k6 e exportar o relatório em HTML, utilize as variáveis de ambiente nativas do k6:

```bash
BASE_URL=https://api.exemplo.com K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run scenarios/load/exemplo-load-test.js
```

Ao final da execução:
- O dashboard poderá ser acompanhado em tempo real pelo navegador
- O arquivo `html-report.html` será gerado com o relatório completo

---

## Observações Finais
- Recomenda-se executar os testes em ambientes controlados
- Ajuste os thresholds e VUs conforme a estratégia de performance adotada
- Os cenários podem ser facilmente integrados a pipelines CI/CD

---

