FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY .env.docker .env

COPY ./src ./src

EXPOSE 3001

CMD [ "npm", "start" ]
