const API_KEY = 'MlTTn3vMLfdAE6nqruHnKOI2fioS97Ft';
const BASE_URL = 'https://api.nytimes.com/svc/';
const endpoints = {
    mostPopularByViews: 'mostpopular/v2/viewed/'
};

async function fetchMostPopularByViews(days = 1) {
    const url = new URL(`${endpoints.mostPopularByViews}${days}.json`, BASE_URL);
    url.searchParams.set('api-key', API_KEY);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();
    return data;
}

module.exports = fetchMostPopularByViews;
