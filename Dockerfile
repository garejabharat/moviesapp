# # Use the official Node.js runtime as the base image
# FROM node:alpine3.16 as build

# # Set the working directory in the container
# WORKDIR /myapp

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install dependencies
# RUN npm install  --legacy-peer-deps

# # Copy the entire application code to the container
# COPY . .

# # Build the React app for production
# RUN npm run build 

# # Use Nginx as the production server
# FROM nginx:1.23-alpine


# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*

# # Copy the built React app to Nginx's web server directory
# COPY --from=build /myapp/build .


# # Expose port 80 for the Nginx server
# EXPOSE 80

# # Start Nginx when the container runs
# ENTRYPOINT  ["nginx", "-g", "daemon off;"]



FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app/deskshow

COPY package.json .

RUN npm install  --legacy-peer-deps



COPY . .

RUN npm run build


#image for production
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/deskshow

COPY --from=BUILD_IMAGE  /app/deskshow/dist/ /app/deskshow/dist/

EXPOSE 8080

COPY package.json .

COPY vite.config.ts .
RUN npm install typescript --legacy-peer-deps

CMD ["npm","run","preview"]