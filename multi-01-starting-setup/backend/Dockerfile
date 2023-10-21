FROM node

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 80

ENV MONGODB_USERNAME=admin
ENV MONGODB_PASSWORD=admin

COPY . .

CMD [ "npm","start" ]