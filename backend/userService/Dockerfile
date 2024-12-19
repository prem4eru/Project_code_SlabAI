FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --production
 
COPY . .

EXPOSE 3001

ENV PORT=${PORT}
ENV MONGO_URI=${MONGO_URI}

CMD [ "node", "index.js" ]
