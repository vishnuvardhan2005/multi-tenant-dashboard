# Use the official Node.js image
FROM node:latest

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the remaining backend code
COPY . .

# Expose the port the backend will run on
EXPOSE 5000

# Command to run the backend service
CMD ["node", "app.js"]
