#Estagio de compilação
FROM node:10 AS builder
WORKDIR /app
COPY . .
RUN yarn install \
    && yarn build

#Estagio de deploy
FROM nginx:alpine AS deploy
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build .
CMD ["nginx", "-g", "daemon off;"]