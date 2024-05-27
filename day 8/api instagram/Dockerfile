FROM node:21.6.2 
RUN npm install -g ts-node-dev
WORKDIR /app 
COPY package.json ./
RUN npm install

COPY . . 
EXPOSE 8002

CMD [ "npm", "run" , "dev" ]