FROM  node:18.12.1-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN if [ -f package.json ]; then COPY package*.json ./; fi

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]