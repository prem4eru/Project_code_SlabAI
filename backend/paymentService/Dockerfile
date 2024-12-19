FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3002

ENV PORT=3002

CMD [ "node", "index.js" ]
