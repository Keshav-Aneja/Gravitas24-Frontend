FROM node:lts-alpine AS base

ARG BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=/api
ENV NEXT_PUBLIC_GOOGLE_ANALYTICS=G-SHEDXR92F7
#ENV NODE_ENV=production

WORKDIR /frontend

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

ENV PORT=3000

CMD HOSTNAME=0.0.0.0 npm run start