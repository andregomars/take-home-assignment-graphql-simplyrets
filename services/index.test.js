import { SimpleRetsAPI } from './index';

describe('SimpleRetsAPI RESTDatasource', () => {
  let simpleRetsAPI;

  beforeAll(() => {
    simpleRetsAPI = new SimpleRetsAPI();
    simpleRetsAPI.initialize({});
  });

  it('should return properties for Houston', async () => {
    const data = await simpleRetsAPI.getProperties(`Houston`);
    expect(data.length).toBeGreaterThan(0);
  });
});