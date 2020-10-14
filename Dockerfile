# Stage 1 - Build
FROM node:12-alpine as builder

WORKDIR /usr/app

COPY package*.json tsconfig.json ./

RUN npm ci

COPY src/ ./src

RUN npm run build && npm ci --production

# Stage 2 - Production
FROM node:12-alpine

WORKDIR /usr/app

COPY package*.json .env ./

COPY --from=builder /usr/app/node_modules ./node_modules

COPY --from=builder /usr/app/dist ./

EXPOSE 3000

CMD npm run start:prod
