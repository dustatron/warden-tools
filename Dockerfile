FROM node:18.18.0-alpine AS builder

WORKDIR /app

COPY package*.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:18.8.0-alpine AS deployer

WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/package.json .

EXPOSE 3000

ENV NODE_ENV=production

CMD [ "node", "build" ]