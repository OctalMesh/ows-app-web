# ============================================================================ #
#                        OctalWeb: Shop | Staging Node                         #
# ============================================================================ #
# Multi-stage Dockerfile for a production-like staging environment.            #
# Produces a fully built Next.js application with optimized runtime.           #
# ============================================================================ #

FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

# ============================================================================ #
#                       Stage: Dependencies Installation                       #
# ============================================================================ #
FROM base AS deps

COPY package*.json ./

RUN npm ci

# ============================================================================ #
#                         Stage: Static Build                                  #
# ============================================================================ #
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production

RUN npm run build

# ============================================================================ #
#                         Stage: Staging Runtime                               #
# ============================================================================ #
FROM node:22-alpine AS staging

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY --from=deps       /app/node_modules    ./node_modules
COPY --from=builder    /app/.next           ./.next
COPY --from=builder    /app/.next/static    ./.next/static
COPY --chown=node:node package*.json        ./
COPY --chown=node:node next.config.ts       ./
COPY --chown=node:node public/              ./public/

ENV NODE_ENV=production
ENV SHOP_WEB_PORT=3001

USER node

EXPOSE ${SHOP_WEB_PORT}

CMD ["sh", "-c", "npm run start -- -p ${SHOP_WEB_PORT}"]
