FROM node:14

WORKDIR /app

COPY package*.json ./

## Disclaimer: I am using legacy peer deps since I am using some packages that are not updated to the latest version of React
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
