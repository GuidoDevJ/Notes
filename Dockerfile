FROM node:20-alpine as deps
WORKDIR /app
COPY package.json .
RUN yarn install --frozen-lockfile

FROM node:20-alpine as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:20-alpine  as prod-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --prod --frozen-lockfile

FROM node:20-alpine  as runner
EXPOSE 5173
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY package.json ./
RUN yarn add serve global
CMD ["yarn", "serve"]