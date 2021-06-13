FROM node:14.15.1
ENV APP_ROOT /usr/src/app/frontend
WORKDIR $APP_ROOT
COPY package.json $APP_ROOT/package.json

RUN npm install
COPY . $APP_ROOT
