FROM node:12.16.3-alpine as buildStage

WORKDIR /app

COPY package*.json /app/
RUN npm install --production
RUN cp -R node_modules /tmp/prod_node_modules
RUN npm install
COPY ./ /app/
RUN npm run lint && npm run build

FROM buildStage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Copy source and production nodemodules
COPY --from=buildStage /app/dist/ /usr/src/app
COPY --from=buildStage /tmp/prod_node_modules /usr/src/app/node_modules

EXPOSE 8001
CMD ["npm", "run", "prod"]