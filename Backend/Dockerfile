FROM node:12.18.4-alpine

ENV HOME=/home/node/app
RUN mkdir $HOME
WORKDIR $HOME
COPY . $HOME
COPY package*.json ./

ENV NPM_CONFIG_LOGLEVEL warn

RUN wget https://raw.githubusercontent.com/eficode/wait-for/master/wait-for -P ../.. && chmod +x ../../wait-for
RUN npm install supervisor@^0.12.0 -g
RUN npm install -g nodemon@^1.19.4
RUN npm install @feathersjs/cli@^3.6.3 -g
RUN npm install
RUN apk upgrade --update
RUN apk add --update mongodb-tools

EXPOSE 3030

CMD npm run start