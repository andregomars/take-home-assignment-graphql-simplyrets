export const resolvers = {
  Query: {
    listings: async (_, __, { dataSources }) => {
      return dataSources.simpleRetsAPI.getProperties(`Houston`);
    },
  }
};