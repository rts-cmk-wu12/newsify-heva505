
const fetchMostPopularByViews = require('../src/api.js');

describe('fetchMostPopularByViews', () => {
    it('should return a list of most popular articles', async () => {
        const data = await fetchMostPopularByViews(7);
        expect(data.results).toBeDefined();
        expect(data.results.length).toBeGreaterThan(0);
    });

    it('should throw an error for invalid API key', async () => {
        const invalidApiKey = 'invalidkey';
        const api = require('../src/api.js');
        api.API_KEY = invalidApiKey;

        await expect(fetchMostPopularByViews(7)).rejects.toThrow();
    });
});

