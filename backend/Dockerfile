FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY .env.docker .env

COPY ./src ./src

CMD [ "npm", "start" ]
