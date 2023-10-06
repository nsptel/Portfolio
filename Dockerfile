# STAGE 1: BUILDING BASIC IMAGE
# pull node image
FROM node:18.14.2-alpine3.17 AS BUILD_IMAGE
#create and use app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app
# copy code
COPY . .
# install deps and build
RUN yarn install
RUN yarn build
# remove unnecessary dev deps since the build is ready
RUN rm -rf ./node_modules
RUN yarn install --prod --ignore-scripts

# STAGE 2: BUILDING PROD IMAGE
# pull node image
FROM node:18.14.2-alpine3.17
# setting node environment to production
ENV NODE_ENV production
# create user group for managing access
RUN addgroup -g 1001 -S default_group
RUN adduser -S nsptel -u 1001
#create and use app directory
RUN mkdir -p /usr/app
WORKDIR /usr/app
# copy only necessary directories and files from BUILD_IMAGE
COPY --from=BUILD_IMAGE --chown=nsptel:default_group /usr/app/ .

# expose the port and start prod server
EXPOSE 3000
