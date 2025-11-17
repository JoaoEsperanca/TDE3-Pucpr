TDE – Documentação do Consumo de API com JavaScript
1. API Utilizada
A API escolhida para este trabalho foi a JSONPlaceholder, disponível publicamente em https://jsonplaceholder.typicode.com. Ela é uma API gratuita voltada para testes e estudos, permitindo realizar requisições HTTP sem necessidade de autenticação. Os dados fornecidos são fictícios e servem como base para exercitar o consumo de APIs reais.
No projeto foram utilizados os seguintes endpoints: • GET /posts – retorna uma lista de posts em formato JSON. • POST /posts – permite enviar um novo post para a API, retornando o objeto criado.

2. Métodos Implementados
Foram implementados dois métodos obrigatórios: GET e POST. Ambos foram desenvolvidos usando fetch, async/await e tratamento de erros com try/catch.
Método GET: O método GET foi utilizado para buscar dados na API. A aplicação faz uma requisição ao endpoint /posts e recebe uma lista de posts. Os cinco primeiros itens são exibidos na página HTML. O código verifica se a resposta é válida (status 200–299) e trata erros caso ocorram.

Principais etapas: • Chamada com fetch(url) • await para aguardar a resposta • Conversão para JSON • Verificação de resposta.ok • Exibição dinâmica no HTML
Método POST: O método POST cria um novo post, enviando um objeto em formato JSON contendo título, conteúdo e userId. Embora a API JSONPlaceholder não crie dados reais, ela retorna um objeto simulando a criação, permitindo testar esse tipo de operação.
Principais etapas: • fetch(url, { method: "POST", headers, body }) • JSON.stringify para enviar dados • await para aguardar a resposta • Verificação de resposta.ok • Exibição do novo post na página

3. Tratamento de Erros
Para evitar falhas silenciosas, foi utilizado try/catch em todas as requisições. Também foi verificado o campo resposta.ok para garantir que a resposta estivesse dentro da faixa de sucesso (200–299). Caso ocorra erro de rede ou resposta inválida, uma mensagem é exibida para o usuário.

4. Tecnologias Utilizadas
• HTML5 para estrutura da página • JavaScript puro (vanilla JS) • fetch API • async/await • JSON para troca de dados • JSONPlaceholder API como fonte externa

5. Funcionamento da Aplicação
O usuário possui dois botões na interface: • “Buscar Posts (GET)” – executa o método GET e mostra os dados na tela. • “Criar Post (POST)” – cria um post fictício e exibe o resultado retornado pela API.
O conteúdo é mostrado dinamicamente dentro de cards gerados com JavaScript. O sistema funciona localmente, bastando abrir o arquivo index.html no navegador.

6. Conclusão
O trabalho demonstra o uso correto de requisições HTTP, manipulação de JSON e integração de front-end com APIs externas. A implementação cumpre os requisitos solicitados, utilizando métodos GET e POST, tratamento de erros e exibição organizada dos dados na interface.
