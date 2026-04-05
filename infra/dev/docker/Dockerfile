# ============================================================================ #
#                       OctalWeb: Shop | Development Node                      #
# ============================================================================ #
# Multi-stage Dockerfile optimized for Next.js development environments        #
# within the OctalMesh infrastructure.                                         #
# ============================================================================ #

FROM node:22-alpine AS base

# Install system dependencies for native module compatibility
RUN apk add --no-cache libc6-compat

WORKDIR /app

# ============================================================================ #
#                       Stage: Dependencies Installation                       #
# ============================================================================ #
FROM base AS deps

COPY package*.json ./

# Use 'npm ci' for deterministic dependency resolution from lockfile
RUN npm ci

# ============================================================================ #
#                     Stage: Development Environment Setup                     #
# ============================================================================ #
FROM base AS development

WORKDIR /app

# Sync node_modules from the 'deps' stage to isolate build artifacts
COPY --from=deps --chown=node:node /app/node_modules ./node_modules

# Copy source manifest
COPY --chown=node:node . .

# Runtime environment configuration
ENV NODE_ENV=development
ENV SHOP_WEB_PORT=3000

EXPOSE ${SHOP_WEB_PORT}

# Execute development server
CMD ["sh", "-c", "npm run dev -- --port ${SHOP_WEB_PORT}"]
