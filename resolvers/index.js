export const resolvers = {
  Query: {
    listings: async (_, { city, limit, offset }, { isAuthed, dataSources }) => {
      if (!isAuthed) return null;

      return dataSources.simpleRetsAPI.getProperties(city, limit, offset);
    },
  }
};