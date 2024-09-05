FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

FROM base AS builder
ARG BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=/api
ENV NEXT_PUBLIC_GOOGLE_ANALYTICS=G-SHEDXR92F7
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
ARG BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=/api
ENV NEXT_PUBLIC_GOOGLE_ANALYTICS=G-SHEDXR92F7
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME 0.0.0.0

CMD ["node", "server.js"]