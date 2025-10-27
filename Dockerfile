# Multi-stage build voor optimale image grootte

# Stage 1: Build stage
FROM node:18-alpine AS builder

# Stel werkdirectory in
WORKDIR /app

# Kopieer package files
COPY package*.json ./

# Installeer alle dependencies (inclusief dev voor build)
RUN npm ci

# Kopieer source code
COPY . .

# Build de applicatie
RUN npm run build

# Stage 2: Production stage
FROM nginx:alpine

# Kopieer custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Kopieer de gebouwde app naar nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose poort 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]