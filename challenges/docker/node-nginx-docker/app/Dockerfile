# Stage 1: Build
FROM --platform=arm64 node:20 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

# Download wait-for script
RUN curl -o /app/wait-for https://raw.githubusercontent.com/eficode/wait-for/master/wait-for \
    && chmod +x /app/wait-for

COPY . .

# Stage 2: Runtime
FROM --platform=arm64 node:20-alpine as run

WORKDIR /app

COPY --from=builder /app .


USER node

EXPOSE 3000

CMD ["node", "app.js"]
