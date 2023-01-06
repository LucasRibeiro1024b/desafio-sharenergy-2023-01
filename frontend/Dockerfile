FROM node:16-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:16-alpine AS production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build ./build

COPY --from=builder /usr/src/app/package.json.docker package.json

RUN npm install

CMD [ "npm", "run", "serve" ]
