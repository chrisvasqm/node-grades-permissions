FROM node:20.14-alpine3.20
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build
USER node
EXPOSE 3000
CMD ["pnpm", "start"]