FROM node:16-alpine

# App directory creation
RUN mkdir -p /apps/frontend
WORKDIR /apps/frontend

# Copy files to container
RUN echo "¡Copying files to container!"
COPY . .

RUN echo "¡Installing dependencies!"
RUN yarn install

EXPOSE 3333

CMD ["yarn", "run", "start"]