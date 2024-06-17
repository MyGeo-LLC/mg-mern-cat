FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the frontend
RUN yarn build

# The entrypoint for the container
ENTRYPOINT ["/bin/bash"]
