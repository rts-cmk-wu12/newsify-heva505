import '../sass/_settings.scss';
import '../sass/_home.scss';
import '../sass/_auth.scss';
import '../sass/_resets.scss';
import '../sass/_stayle.scss';

const fetchMostPopularByViews = require('./home.js');

document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app');

  class SplashScreen {
    #element = null;

    get element() {
      return this.#element;
    }

    constructor() {
      this.#element = document.createElement('div');
      this.#element.classList.add('splash-screen');
    }

    createLogo() {
      const logo = document.createElement('img');
      logo.classList.add('newsify-logo');
      logo.src = './screens/newsify_logo-1.jpg'; // Update the image path
      logo.alt = 'Logo';
      this.#element.append(logo);
      setTimeout(() => {
        logo.style.opacity = 1;
        logo.style.transition = 'opacity 1s ease-in-out';
      }, 1000);
    }

    createHeading() {
      const heading = document.createElement('h1');
      heading.textContent = 'Newsify';
      heading.classList.add('newsify-heading');
      heading.style.opacity = 0;
      this.#element.append(heading);
      setTimeout(() => {
        heading.style.opacity = 1;
        heading.style.transition = 'opacity 1s ease-in-out';
      }, 2000);
    }
  }

  const splashScreen = new SplashScreen();
  splashScreen.createLogo();
  splashScreen.createHeading();
  app.appendChild(splashScreen.element);

  const showOnboarding = () => {
    app.innerHTML = `
      <div id="onboarding" class="onboarding">
        <div id="wrapper">
          <section class="onborard">
            <div class="onboard_img">
              <img src="./screens/Onboarding-1.png" alt="onborard">
            </div>
            <div class="onboard1">
              <h1 class="onboard_heading">Stay Connected,<br>Everywhere, Anytime</h1>
              <p class="onboard_writing">Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>
            </div>
            <div class="swap">
              <span class="first_dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <div class="onboard_button">
              <button class="skip_button">Skip</button>
              <button class="continue_button">Continue</button>
            </div>
          </section>
        </div>
      </div>
    `;
    initializeOnboarding();
  };

  setTimeout(showOnboarding, 4000);

  function initializeOnboarding() {
    const slides = [
      {
        image: './screens/Onboarding-2.png',
        heading: 'Stay Connected,<br>Everywhere, Anytime',
        text: 'Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.'
      },
      {
        image: './screens/Onboarding-3.png',
        heading: 'Discover the World,<br>One Story at a Time',
        text: 'Explore a wide range of topics and stories from around the globe, tailored just for you.'
      },
      {
        image: './screens/Onboarding-4.png',
        heading: 'Stay Informed,<br>Stay Ahead',
        text: 'Get timely updates and notifications on the topics that matter most to you.'
      }
    ];

    let currentIndex = 0;

    const onboardImage = document.querySelector('.onboard_img img');
    const onboardHeading = document.querySelector('.onboard_heading');
    const onboardWriting = document.querySelector('.onboard_writing');
    const continueButton = document.querySelector('.continue_button');
    const skipButton = document.querySelector('.skip_button');
    const dots = document.querySelectorAll('.dot, .first_dot');

    continueButton.addEventListener('click', () => {
      if (currentIndex === slides.length - 1) {
        window.location.href = 'auth.html';
      } else {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide(currentIndex);
      }
    });

    skipButton.addEventListener('click', () => {
      window.location.href = 'auth.html';
    });

    function updateSlide(index) {
      onboardImage.src = slides[index].image;
      onboardHeading.innerHTML = slides[index].heading;
      onboardWriting.textContent = slides[index].text;
      updateDots(index);
    }

    function updateDots(index) {
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
      });
    }

    updateSlide(currentIndex);
  }
});
