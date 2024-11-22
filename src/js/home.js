require('../sass/_home.scss');

const fetchMostPopularByViews = require('./api.js');

document.addEventListener('DOMContentLoaded', async () => {
    const settingsButton = document.querySelector('.settings');
    settingsButton.addEventListener('click', () => {
        window.location.href = 'settings.html';
    });

    try {
        const popularNews = await fetchMostPopularByViews(7);
        console.log(popularNews);

        const newsSections = document.querySelectorAll('.news-section');

        popularNews.results.forEach(article => {
            newsSections.forEach(section => {
                const sectionName = section.querySelector('.section-heading__text').textContent.toLowerCase();
                if (article.section.toLowerCase().includes(sectionName)) {
                    const dropdownContent = section.querySelector('.dropdown-content');
                    const articleElement = document.createElement('article');
                    articleElement.classList.add('news-article');
                    articleElement.innerHTML = `
                        <img class="news-image" src="${article.media[0]?.['media-metadata'][0].url}" alt="${article.title}">
                        <div class="news-text">
                            <h3>${article.title}</h3>
                            <p>${article.abstract}</p>
                        </div>
                    `;
                    dropdownContent.appendChild(articleElement);
                }
            });
        });

        newsSections.forEach(section => {
            const arrow = section.querySelector('.arrow');
            arrow.addEventListener('click', () => {
                section.classList.toggle('open');
            });
        });
    } catch (error) {
        console.error('Error fetching popular news:', error);
    }
});
