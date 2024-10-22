FROM node:16-alpine

WORKDIR /app

COPY package.json .app
COPY yarn.lock .app

RUN yarn

COPY . .

CMD ['yarn', 'run', 'dev']