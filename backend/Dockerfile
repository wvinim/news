FROM node:20-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app
RUN npm ci --only=production
RUN npm cache clear --force
USER node
CMD ["npm","run","migrate-start"]