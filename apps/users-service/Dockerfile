FROM node:16-alpine

# App directory creation
RUN mkdir -p /apps/users-service
WORKDIR /apps/users-service

# Copy files to container
RUN echo "¡Copying files to container!"
COPY . .

RUN echo "¡Installing dependencies!"
RUN yarn install

EXPOSE 7778

CMD ["yarn", "run", "start"]