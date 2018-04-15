FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

#install app dependency
COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm install --only=production


# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
