# ============================================================================ #
#                       OctalWeb: Shop | Development Node                      #
# ============================================================================ #
# Multi-stage Dockerfile optimized for Next.js development environments        #
# within the OctalMesh infrastructure.                                         #
# ============================================================================ #

FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk add --no-cache libc6-compat \
  && corepack enable \
  && mkdir -p /pnpm

WORKDIR /app

# ============================================================================ #
#                       Stage: Dependencies Installation                       #
# ============================================================================ #
FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# ============================================================================ #
#                     Stage: Development Environment Setup                     #
# ============================================================================ #
FROM base AS development

WORKDIR /app

ENV NODE_ENV=development
ENV SHOP_WEB_PORT=3001

USER root

RUN mkdir -p /app/.next

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE ${SHOP_WEB_PORT}

CMD ["sh", "-c", "pnpm dev -p ${SHOP_WEB_PORT}"]
