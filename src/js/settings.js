require('../sass/_settings.scss')



const htmlContainer = document.getElementById('html-container');
const bodyContainer = document.getElementById('body-container');
const container = document.getElementById('container');
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('change', () => {
  htmlContainer.classList.toggle('dark-mode');
  bodyContainer.classList.toggle('dark-mode');
  container.classList.toggle('dark-mode');
});