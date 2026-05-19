# ============================================================================ #
#                        OctalWeb: Shop | Staging Node                         #
# ============================================================================ #
# Multi-stage Dockerfile for a production-like staging environment.            #
# Produces a fully built Next.js application with optimized runtime.           #
# ============================================================================ #

FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk add --no-cache libc6-compat \
    && corepack enable \
    && corepack prepare pnpm@11.1.3 --activate

WORKDIR /app

# ============================================================================ #
#                       Stage: Dependencies Installation                       #
# ============================================================================ #
FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# ============================================================================ #
#                              Stage: Static Build                             #
# ============================================================================ #
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN pnpm build

# ============================================================================ #
#                         Stage: Staging Runtime                               #
# ============================================================================ #
FROM node:22-alpine AS production

WORKDIR /app

ENV NODE_ENV=production
ENV SHOP_WEB_PORT=3001

USER node

COPY --from=builder --chown=node:node /app/public           ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static     ./.next/static

EXPOSE ${SHOP_WEB_PORT}

ENV PORT=${SHOP_WEB_PORT}
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
