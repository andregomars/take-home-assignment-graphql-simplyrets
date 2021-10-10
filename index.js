import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import typeDefs from './types/index.js';
import { resolvers } from './resolvers/index.js';
import { dataSources } from './services/index.js';

try {
  dotenv.config();
  const app = express();

  const server = new ApolloServer({ 
    typeDefs, 
    // mocks: true,
    resolvers,
    dataSources,
    context: ({ req }) => {
      const isAuthed = req.headers.authorization === `Basic ${process.env.AUTH_TOKEN_GRAPHQL}`;
      if (!isAuthed) throw new AuthenticationError(`Auth failed!`);
      console.log({ isAuthed })
      return { isAuthed };
    },
    // Overwrite http status to 401 once request is declined due to authentication failure
    plugins: [
      {
        requestDidStart: () => ({
          didEncounterErrors(errors, { response: { http } } ) {
            if (http && errors.some(err => err.name === "AuthenticationError")) {
              http.status = 401;
            }
          }
        })
      }
    ]
  });

  await server.start();
  server.applyMiddleware({ app, path: `/graphql` });

  /** Please remove me line 11-14 **/
  app.get('*', (req, res, next) => {
    res.send("Good luck! 😀")
  });

  app.listen({ port: 4000 }, () => {
    console.log(`ENV`, process.env.ENV);
    console.log(`SIMPLERETS_API`, process.env.SIMPLERETS_API);
    console.log(`AUTH_TOKEN_SIMPLERETS`, process.env.AUTH_TOKEN_SIMPLERETS);
    console.log(`AUTH_TOKEN_GRAPHQL`, process.env.AUTH_TOKEN_GRAPHQL);
    console.log(`Listening on http://localhost:4000/graphql`)
  });
} catch (err) {
  console.error(err);
}