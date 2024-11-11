# Use an official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the React app for production (this step is optional)
# RUN npm run build

# Expose the port that the app will run on (default React port is 3000)
EXPOSE 3000

# Start the React app in development mode (if you want to run it in development)
CMD ["npm", "start"]
