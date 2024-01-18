# Stage 1: Build
FROM --platform=arm64 node:20-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Stage 2: Runtime
FROM --platform=arm64 node:20-alpine

WORKDIR /app

COPY --from=builder /app .

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000

CMD ["node", "app.js"]
