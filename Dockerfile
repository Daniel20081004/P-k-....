FROM node:lts-buster

# Clone the repository
RUN git clone https://github.com/A-d-i-t-h-y-a-n/hermit-bot/home/suhail

# Change ownership of the directory to the 'node' user
RUN chown -R node:node /home/suhail

# Switch to the 'node' user
USER node

# Set the working directory
WORKDIR /home/suhail


# Clean npm cache and install dependencies using npm
RUN npm cache clean --force && npm install --legacy-peer-deps

COPY server.js .

# Create the start.sh script
RUN echo '#!/bin/sh\nnode server.js &\nnode index.js' > start.sh

# Make the start.sh script executable
RUN chmod +x start.sh

# Expose the required port
EXPOSE 8000

# Run the start.sh scrip
CMD ./start.sh
