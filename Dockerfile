# node blog
FROM node:alpine3.16 as nodework

WORKDIR /myapp

COPY package.json .

RUN  npm install 


# local computer to copy file in container 
COPY  . .

# build the  project 
RUN npm run build



# nginx blog

FROM  nginx:1.23-alpine

#server content file in the 
WORKDIR /usr/share/nginx/html

#remove default containt
# and copy build folder directory

RUN  rm -rf ./*

#copy build inside content in the container

COPY --from=nodework /myapp/build .

#nginx server use as forground 
# daemon work alway as background
ENTRYPOINT [ "nginx","-g","daemon off;"]
