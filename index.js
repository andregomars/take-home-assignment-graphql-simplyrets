import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './types/index.js';

try {
  dotenv.config();
  const app = express();
  const server = new ApolloServer({ 
    typeDefs, 
    mocks: true,
  });

  await server.start();
  server.applyMiddleware({ app, path: `/graphql` });

  /** Please remove me line 11-14 **/
  app.get('*', (req, res, next) => {
    res.send("Good luck! 😀")
  });

  app.listen({ port: 4000 }, () => {
    console.log(`ENV`, process.env.ENV);
    console.log(`AUTH_TOKEN_SIMPLERETS`, process.env.AUTH_TOKEN_SIMPLERETS);
    console.log(`AUTH_TOKEN_GRAPHQL`, process.env.AUTH_TOKEN_GRAPHQL);
    console.log(`Listening on http://localhost:4000/graphql`)
  });
} catch (err) {
  console.error(err);
}