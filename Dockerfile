# Use an official Node runtime as a parent image
FROM node:12.7.0-alpine

# Set the working directory to /app
WORKDIR /src/app

# Copy package.json to the working directory
COPY package.json /src/app

# Install any needed packages specified in package.json
RUN npm install

# Copying the rest of the code to the working directory
COPY . /src/app

# Make port 3000 available to the world outside this container
EXPOSE 4005

# Run index.js when the container launches
CMD ["npm", "run", "start"]
