FROM node:16-alpine

# App directory creation
RUN mkdir -p /apps/auth-service
WORKDIR /apps/auth-service

# Copy files to container
RUN echo "¡Copying files to container!"
COPY . .

RUN echo "¡Installing dependencies!"
RUN yarn install

EXPOSE 7777

CMD ["yarn", "run", "start"]