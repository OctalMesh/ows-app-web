# ============================================================================ #
#                       OctalWeb: Shop | Development Node                      #
# ============================================================================ #
# Multi-stage Dockerfile optimized for Next.js development environments        #
# within the OctalMesh infrastructure.                                         #
# ============================================================================ #

FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

# ============================================================================ #
#                       Stage: Dependencies Installation                       #
# ============================================================================ #
FROM base AS deps

COPY package*.json ./

RUN npx npm@11 install -g npm@11

RUN npm ci

# ============================================================================ #
#                     Stage: Development Environment Setup                     #
# ============================================================================ #
FROM base AS development

WORKDIR /app

ENV NODE_ENV=development
ENV SHOP_WEB_PORT=3001

USER root

RUN mkdir -p /app/.next && chown -R node:node /app

COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node . .

USER node
EXPOSE ${SHOP_WEB_PORT}

CMD ["sh", "-c", "npm run dev -- --port ${SHOP_WEB_PORT}"]
