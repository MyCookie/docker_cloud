# https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/

FROM node:lts-alpine

# create app dir
WORKDIR /opt/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# bundle app
COPY . .

# server runs on 80
EXPOSE 8080

# run the server
CMD [ "node", "index.js" ]
