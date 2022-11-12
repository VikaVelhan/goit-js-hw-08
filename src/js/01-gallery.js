import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryListEl = document.querySelector('.gallery');
const markup = galleryItems
  .map(img => {
    return `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`;
  })
  .join('');
galleryListEl.innerHTML = markup;
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
