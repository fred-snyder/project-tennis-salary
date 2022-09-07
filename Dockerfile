FROM node:16.17-alpine3.15

# set a directory for the app
WORKDIR /usr/src/app

# copy all the files to the container
COPY . .

# install pnpm globally
RUN npm install pnpm -g

# install project dependencies
RUN pnpm install

# define the port number the container should expose
EXPOSE 8080

# compile all Typescript source files\
# PROBABLY BETTER TO RUN THE COMPILE BEFORE DOCKERIZING??
# CMD ["tsc"]

# run the command
CMD ["node", "./dist/app.js"]
