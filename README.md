# FURIA LandingPage com ChatBot IA: 
<p align="center">
  <img src="https://github.com/prtpj1/prtpj1/blob/main/Headers/furia_header_github.png?raw=true" alt="Header" />
</p>

---
<p align="center">
<a href="#descrição-do-projeto">Descrição do Projeto</a> •
<a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
<a href="#como-rodar-a-aplicação">Rodar a Aplicação</a> •
<a href="#próximas-etapas">Próximas Etapas</a>
</p>

---
## Descrição
Landing page para o time FURIA com um chatbot integrado com IA que personifica a maior fã do time através da personagem Furiosinha, também criada digitalmente por AI + edição de imagem.<br>

Além do chat com a IA, há tambem disponível no header os links das redes sociais do time e também um botão no final do formulário de inscrição que leva a loja com produtos do FURIA.<br>

Não adicionei a funcionalidade de inscrição no formulário, por não ter comigo o link.<br>
A IA do chatbot é limitada por causa do meu orçamento (ele não existe), então por enquanto suas respostas estão limitadas até a ultima atualização do modelo llama-3.1 que foi o modelo mais atualizado totalmente grátis que encontrei para usar.
Mudando para um modelo pago será possivel respostas com pesquisa em tempo real e muito mais acuradas.<br>

⚠️OBS:⚠️ a versão que esta no ar está usando uma APIKEY grátis, então ela tem limitações quanto a quantidade diária de tokens. Pode ocorrer de ao você testar o site, o bot não consiga responder pela falta de tokens diários, mas é uma condição remotamente improvável.
Em todo caso, se acontecer, você precisará seguir os passos de como Rodar a Aplicação descrita passo a passo abaixo e usar uma APIKey sua, gerada no site da OpenRouter

[Site da OpenRouter](https://openrouter.ai/settings/keys)


## Tecnologias Utilizadas 
### FrontEnd
- HTML5
- CSS3
- JavaScript
- TypeScript
- React
- Next
- AI SDK

<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/html2.png?raw=true" width="50" height="50" alt="HTML Icon" /></a><a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/CSS2.png?raw=true" width="50" height="50" alt="CSS3 Icon" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/JavaScript2.png?raw=true" width="50" height="50" alt="JavaScript Icon" /></a><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Typescript2.png?raw=true" width="50" height="50" alt="TypeScript Icon" /></a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/React2.png?raw=true" width="50" height="50" alt="React Icon" /></a><a href="https://nextjs.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/piece_100_Next.png?raw=true" width="50" height="50" alt="Next Icon" /></a><a href="https://ai-sdk.dev/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/piece_100_ai_sdk.png?raw=true" width="50" height="50" alt="AI SDK Icon" /></a>

## Como rodar a aplicação?
- Clone o repositório: <br>
`git clone git@github.com:prtpj1/furia-chatbot.git`
- Acesse a pasta do projeto: <br>
`cd furia-chatbot`
- Renomeie o arquivo <strong>example.env</strong> para <strong>.env</strong> <br>
- Coloque sua APIKey da OpenRouter no arquivo <strong>.env</strong> <br>
- Instale as dependências: <br>
`npm install`
- Faça o build da aplicação: <br>
`npm run build`
- Inicie a aplicação: <br>
`npm start` <br>
⚠️Aguarde a aplicação abrir no seu navegador. Caso não ocorra, coloque na barra de endereços do seu navegador: `http://localhost:3000/` ou clique no link que o terminal exibir.
</br>

## Link para visualizar o site
[Visualizar site](https://furia-chatbot-theta.vercel.app/)

---

## Próximas Etapas

- Migrar para um plano pago da OpenRouter para obter respostas em tempo real e maior precisão.  
- Criar interface para gerenciamento de configuração da IA (seleção de modelo, ajuste de temperatura, etc.).  
- Incluir testes automatizados (unitários e de integração).
- Internacionalizar a interface para suportar múltiplos idiomas.  
