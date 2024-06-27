FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Install netcat for wait-for script
RUN apt-get update && apt-get install -y netcat

# Copy the wait-for script and make it executable
COPY wait-for /wait-for
RUN chmod +x /wait-for

CMD ["sh", "-c", "/wait-for mongo:27017 -- npm run dev"]
