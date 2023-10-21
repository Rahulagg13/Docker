# Base image
FROM node

WORKDIR /home/app/


# copy in the docker
COPY package.json ./

WORKDIR /home/app/

RUN npm install

COPY server.js ./

EXPOSE 8001

# command
CMD [ "node","server.js" ]
