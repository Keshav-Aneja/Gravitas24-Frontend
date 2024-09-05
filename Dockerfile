    FROM node:lts-alpine AS base

    ARG BACKEND_URL
    ENV NEXT_PUBLIC_BACKEND_URL=/api
    ENV NEXT_PUBLIC_GOOGLE_ANALYTICS=G-SHEDXR92F7

    WORKDIR /app
    COPY package.json yarn.lock* package-lock.json* ./
    RUN yarn install
    COPY . .
    RUN yarn run build

    ENV NODE_ENV=production

    ENV PORT=3000

    CMD HOSTNAME=0.0.0.0 yarn run start