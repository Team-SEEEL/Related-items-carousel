FROM node:12.18.2-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package.json ./

COPY public ./public/

COPY  client ./client/

COPY db ./db/

COPY server ./server/

RUN npm install --production



EXPOSE 3002


CMD ["npm", "start"]