## Desafio para o processo seletivo SHARENERGY 2023/01
<br>

[Vídeo explicativo no Youtube](https://youtu.be/zHxWdugUtZU)
<br><br>

## Stacks utilizadas<br><br>
### Banco de dados
- MongoDB
### Backend
- Express.js
### Frontend
- React, HTML e CSS
<br><br>

## Passos iniciais
- `git clone git@github.com:GabrielPinheiroMatiucci/desafio-sharenergy-2023-01.git`

- `cd desafio-sharenergy-2023-01`
<br><br>

## Iniciar a aplicação
Você pode rodar a aplicação localmente com ou sem Docker.<br><br>

### Sem Docker
Verifique se o serviço do MongoDB está ativo; caso não esteja, inicie-o.

Abra 2 terminais na pasta raiz do projeto. Em um deles rode o comando `cd backend && npm install && npm start` e no outro `cd frontend && npm install && npm run serve`.

O React irá gerar um build da aplicação e ele será "servido" pelo pacote serve no endereço `http://localhost:3000`.

O Express.js já possui uma forma de criar um servidor HTTP e servir a aplicação que poderá ser acessada no endereço `http://localhost:3001`.
<br><br>

### Com Docker
Verifique se o Docker está ativo; caso não esteja, inicie-o.

Abra um terminal na raiz do projeto. Rode o comando `npm run docker:up`. Espere todos os comandos serem executados, todas as imagens serem baixadas - isso pode demorar um pouco - e todos os containers serem inicializados.

Existem alguns arquivos .sh que irão executar os passo necessários para realizar todas as operações.

O frontend estará acessível no endereço `http://localhost:3000` e o backend no `http://localhost:3001`.
<br><br>

## Parar a aplicação
### Sem Docker
Em cada um dos 2 dois terminais aperte `CTRL + C`.

<br>

### Com Docker
No terminal na raiz do projeto execute o comando `npm run docker:down`. Espere todos os comandos serem executados.
<br><br>

## Aplicação

- Na página inicial de login deve-se colocar o username `desafiosharenergy` e password `sh@r3n3rgy`. Pode-se marcar a opção de remember me para não precisar ficar "logando" toda vez.
- Existem 4 botões que redirecionarão para as respectivas páginas: Usuários, Cat HTTP Status, Random Dog e Clientes.
- Inicialmente não aparecerá nenhum cliente na página de clientes. Será necessário realizar o cadastro de pelo menos um. O telefone e o CPF precisam conter, respectivamente, 10-11 caracteres e 11 caracteres sem pontos, vírgulas ou quaisquer caracter especial.
