FROM node

COPY src/index.js ./

EXPOSE 8080

CMD [ "node", "index" ]