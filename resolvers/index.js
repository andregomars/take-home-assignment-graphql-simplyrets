export const resolvers = {
  Query: {
    listings: async (_, { city }, { isAuthed, dataSources }) => {
      if (!isAuthed) return null;

      return dataSources.simpleRetsAPI.getProperties(city);
    },
  }
};