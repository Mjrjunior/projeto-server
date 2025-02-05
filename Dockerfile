# Build
FROM node:20-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .

RUN npm i --silent

COPY . .

RUN npm run build

# Server
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma/schema.prisma ./prisma/
COPY --from=build /app/prisma/migrations/ ./prisma/

COPY --from=build /app/entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

RUN npm config set update-notifier false

ENTRYPOINT ["entrypoint.sh"]

EXPOSE 5000

CMD ["npm", "start"]