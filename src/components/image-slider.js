function createNavDots(slider) {
  const dotsDiv = slider.querySelector('.c-image-slider__nav-dots');
  Array.from(slider.querySelector('.c-image-slider__images').children).forEach(
    (_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('c-image-slider__nav-dot');
      dot.setAttribute('data-index', index);
      dotsDiv.appendChild(dot);
      if (index === 0) dot.classList.add('is-selected');
    },
  );
}

function setNavDots(dotsDiv, index) {
  Array.from(dotsDiv.children).forEach((element) => {
    element.classList.remove('is-selected');
  });
  dotsDiv.children[index].classList.add('is-selected');
}

function goToImageIndex(slider, width, index) {
  const imageDiv = slider.querySelector('.c-image-slider__images');
  // eslint-disable-next-line no-param-reassign
  imageDiv.style.transform = `translateX(-${width * index}px)`;

  setNavDots(slider.querySelector('.c-image-slider__nav-dots'), index);
}

document.querySelectorAll('.c-image-slider').forEach((slider) => {
  let imageIndex = 0;

  createNavDots(slider);

  slider.querySelectorAll('.c-image-slider__button').forEach((button) => {
    button.addEventListener('click', (event) => {
      const imageWidth = Number(getComputedStyle(slider).width.slice(0, -2));

      // True if it goes to the previous image, false if it goes to the next one.
      const prevImageIndex = imageIndex;
      imageIndex = event.target.classList.contains(
        'c-image-slider__button--previous',
      )
        ? imageIndex - 1
        : imageIndex + 1;

      const { length } = slider.querySelector(
        '.c-image-slider__images',
      ).children;

      // If imageIndex is out of bounds, restore it to previous value.
      if (imageIndex < 0 || imageIndex > length - 1) {
        imageIndex = prevImageIndex;
      }

      goToImageIndex(slider, imageWidth, imageIndex);
    });
  });

  slider
    .querySelector('.c-image-slider__nav-dots')
    .addEventListener('click', (event) => {
      const index = event.target.getAttribute('data-index');

      // Make sure click was on a dot and not on the container.
      if (!index) return;

      const imageWidth = Number(getComputedStyle(slider).width.slice(0, -2));

      goToImageIndex(slider, imageWidth, index);
    });
});
