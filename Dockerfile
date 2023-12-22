
FROM node:latest AS BUILD_IMAGE

WORKDIR /app

COPY package.json .

RUN npm install  --legacy-peer-deps

COPY . .

RUN npm run build


# image for production
# FROM node:18-alpine as PRODUCTION_IMAGE
# WORKDIR /app/deskshow

# COPY --from=BUILD_IMAGE  /app/deskshow/dist/ /app/deskshow/dist/

# # EXPOSE 8080

# COPY package.json .

# COPY vite.config.ts .
# RUN npm install typescript --legacy-peer-deps

# CMD ["npm","run","preview"]



# FROM nginx:alpine

# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*

# COPY --from=BUILD_IMAGE  /app/deskshow/dist/ .


# # # Start Nginx
# ENTRYPOINT  ["nginx", "-g", "daemon off;"]