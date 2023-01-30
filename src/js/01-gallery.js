// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const galleryImages = galleryItems.map(item => {
  const imgLink = document.createElement('a');
  const img = document.createElement('img');

  imgLink.classList.add('gallery__item');
  img.classList.add('gallery__image');

  img.src = item.preview;
  img.alt = item.description;
  imgLink.href = item.original;
  imgLink.appendChild(img);

  return imgLink;
});

galleryRef.append(...galleryImages);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
