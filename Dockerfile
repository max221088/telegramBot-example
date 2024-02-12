# Use official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory
COPY . ./

# Expose the port the app runs on
EXPOSE 2320

# Command to run the application
CMD ["npm", "run","start"]
# CMD ["tail", "-f", "/dev/null"]
