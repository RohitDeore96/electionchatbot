# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package management files
COPY package*.json ./

# Install dependencies using clean install
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Vite React app for production
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install the 'serve' package globally to host static files
RUN npm install -g serve

# Copy the built files from the previous stage
COPY --from=build /app/dist ./dist

# Cloud Run dynamically assigns a port via the PORT environment variable.
# We set a default of 8080 just in case.
ENV PORT=8080
EXPOSE $PORT

# Serve the 'dist' directory as a single-page application (-s) on the specified port
CMD ["sh", "-c", "serve -s dist -l ${PORT}"]
