FROM --platform=arm64 golang:1.20.13-alpine AS builder

WORKDIR /app

COPY fullcycle.go /app/

RUN go build fullcycle.go

FROM scratch AS runner

COPY --from=builder /app/fullcycle /

ENTRYPOINT [ "/fullcycle" ]