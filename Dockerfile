FROM node:lts-alpine AS build

ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

CMD ["node", "main.js"]