export const resolvers = {
  Query: {
    listings: async (_, { city }, { dataSources }) => {
      return dataSources.simpleRetsAPI.getProperties(city);
    },
  }
};