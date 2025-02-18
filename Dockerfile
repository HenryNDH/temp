# Dockerfile for Fragments Microservice

# Use node version 22.12.0
FROM node:22.12.0

# Metadata
LABEL maintainer="Hoang Nguyen <Hoang.email@example.com>"
LABEL description="Fragments node.js microservice"

# Environment Variables
ENV PORT=8080
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY ./src ./src

# Copy our HTPASSWD file
COPY ./tests/.htpasswd ./tests/.htpasswd

# Expose port 8080
EXPOSE 8080

# Command to run the server
CMD npm start
