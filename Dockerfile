# ---------- Build stage ----------
FROM node:22-alpine AS build

WORKDIR /app

# Copy lockfile first to maximize Docker layer caching for `npm ci`
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source
COPY . .

# Production build -> outputs to /app/dist
RUN npm run build

# ---------- Runtime stage ----------
FROM nginx:1.27-alpine AS runtime

# SPA-friendly Nginx config (client-side routing fallback, compression, headers)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Serve only the built artifacts (no dev files, no source, no node_modules)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://localhost/ || exit 1
