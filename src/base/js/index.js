import { isWebp } from './helpers/is.js';

isWebp((support) => {
  if (support === true) {
    document.body.classList.add('webp');
  } else {
    document.body.classList.add('no-webp');
  }
});

const headerHeight = document.querySelector('.page__header').offsetHeight;
document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

import '../../components/components.js';
