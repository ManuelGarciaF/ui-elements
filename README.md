# JS UI elements

## Reusable dropdown menu and image carousel/slider

### Dropdown menu

#### Usage:

```html
<div class="c-dropdown">
  <span class="c-dropdown__title">Dropdown title</span>
  <ul class="c-dropdown__content">
    <li class="c-dropdown__item">Item</li>
    ...
  </ul>
</div>
```

### Image slider

#### Usage:

```html
<div class="c-image-slider">
  <button
    class="c-image-slider__button c-image-slider__button--previous"
  ></button>
  <button class="c-image-slider__button c-image-slider__button--next"></button>
  <div class="c-image-slider__nav-dots"></div>
  <div class="c-image-slider__images">
    <img src="./example.jpg" alt="example" class="c-image-slider__image" />
    ...
  </div>
</div>
```
