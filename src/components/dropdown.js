document.querySelectorAll('.c-dropdown').forEach((elem) => {
  elem.addEventListener('click', (event) => {
    // Do nothing if clicked element is not title.
    if (!event.target.classList.contains('c-dropdown__title')) return;

    const deselect = event.currentTarget.classList.contains('is-selected');

    document.querySelectorAll('.c-dropdown').forEach((e) => {
      e.classList.remove('is-selected');
    });

    if (!deselect) event.currentTarget.classList.add('is-selected');
  });
});
