# Use the official Node.js 18 image as the base image
FROM node:21.7

# Set the working directory in the container
WORKDIR /backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Ensure the ts-node-dev is in the PATH
ENV PATH /backend/node_modules/.bin:$PATH

# Start the Node.js application
CMD ["npm", "run", "dev"]