# Replace with tag from https://hub.docker.com/_/node/
FROM node:alpine
MAINTAINER ltfschoen

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies and build app
WORKDIR /usr/src/app
RUN npm install
RUN npm build

# Replace with app port to expose
EXPOSE 8888

# Start the app
CMD npm start