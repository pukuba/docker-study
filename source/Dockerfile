FROM node:12

WORKDIR /source

COPY . .

RUN npm install

EXPOSE 3000
#docker-compose -> express -> expose:3000

CMD ["node", "app.js"]