import './styles/main.scss';

document.querySelectorAll('.c-dropdown').forEach((elem) => {
  elem.addEventListener('click', (event) => {
    const content = event.target.parentNode.querySelector('.c-dropdown__content');
    if (content.classList.contains('is-visible')) {
      content.classList.remove('is-visible');
    } else {
      content.classList.add('is-visible');
    }
  });
});
