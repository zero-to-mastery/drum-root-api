FROM node:9-slim
WORKDIR /server
COPY package.json /server
RUN npm install
COPY . /server
CMD ["npm", "start"]
