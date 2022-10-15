FROM node:16.15.0-alpine
WORKDIR /usr/src/app
EXPOSE 3000

# docker-compose run --rm react-app sh -c "yarn create react-app react-sample --template @chakra-ui/typescript"