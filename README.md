# Youtube Clone

1. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
2. There are 2 docker files in the repository 
  a. Dockerfile - This docker file uses the builder stage to create the build package and uses the output files to copy the files to NGINX server which acts as a local webserver      running in a container.      
  b. Dockerfile.dev : This is primarily for development purposes and runs the application directly using yarn start  
## Available Scripts
1. Docker file
      FROM node:14-alpine AS builder
      WORKDIR /app
      COPY package.json ./

      RUN yarn install 
      COPY . .
      RUN yarn build

      FROM nginx:1.19-alpine AS server
      COPY --from=builder ./app/build /usr/share/nginx/html
2. Dockerfile.dev
      FROM node:14-alpine AS development
      # Add a work directory
      WORKDIR /app
      # Cache and Install dependencies
      COPY package.json .

      RUN yarn install
      # Copy app files
      COPY . .
      # Expose port
      EXPOSE 3000
      # Start the app
      CMD [ "yarn", "start" ]

### Run the docker image in Development mode

   docker build -f Dockerfile.dev -t react-docker-dev . 
   
   
   docker run -p 3000:3000 react-docker-dev

### Run the docker image in Production mode

   docker build -f Dockerfile -t react-docker-prod . 
   
   
   docker run -p 4000:80 react-docker-prod
   
Since we are using NGINX as the webserver to host our application, and it uses the default port 80 to expose the application, we are mapping the port 4000 to the NGINX port number 80. 

Post that, you should see two images in the Docker Desktop as below.


![image](https://user-images.githubusercontent.com/50028950/131117683-9606839a-bff0-48bb-aedf-b360448cbb7f.png)

Clicking the Open in Browser button against each container should redirect you to browser where you can see the Youtube clone application.
