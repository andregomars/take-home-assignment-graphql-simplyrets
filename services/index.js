import dotenv from 'dotenv';
import { RESTDataSource } from 'apollo-datasource-rest';
dotenv.config();

export class SimpleRetsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.SIMPLERETS_API;
  }

  async getProperties(city, limit, offset) {
    console.log({limit, offset})
    const data = await this.get(`/properties?q=${city}&limit=${limit}&offset=${offset}`, null, {
      cacheOptions: { ttl: 3600 }
    });
    return data;
  }

  willSendRequest(request) {
    request.headers.set(`Authorization`, `Basic ${process.env.AUTH_TOKEN_SIMPLERETS}`);
  }
}

export const dataSources = () => {
  return { 
    simpleRetsAPI: new SimpleRetsAPI(),
  };
}