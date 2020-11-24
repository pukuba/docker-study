FROM node:12
WORKDIR /Users/erolf0123/Desktop/web/docker-study
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]