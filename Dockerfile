# Replace with tag from https://hub.docker.com/_/node/

FROM node:alpine
MAINTAINER ltfschoen

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Replace with app port to expose
EXPOSE 8080

# Start the app
CMD [ "npm", "start" ]
