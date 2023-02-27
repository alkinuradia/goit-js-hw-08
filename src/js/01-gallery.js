import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGallaryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join("");
}

const Markup = createGallaryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", Markup);
gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  const closeModal = (event) => {
    const Escape = "Escape";

    if (event.code === Escape) {
      instance.close();
    }
  };

  let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {

});
}

console.log(galleryItems);