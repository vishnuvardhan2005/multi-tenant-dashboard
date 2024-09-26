# Use the official Node.js image
FROM node:latest

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the remaining frontend code
COPY . .

# Expose the port the frontend will run on
EXPOSE 3000

# Command to start the frontend service
CMD ["npm", "start"]
