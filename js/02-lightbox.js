import { galleryItems } from './gallery-items.js';
// Change code below this line



const divRef = document.querySelector('.gallery');

function createGalleryMrkup (items)  {
	return items
		.map((item) => 
		`
		<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
		`
		).join("")
};

const addGalleryMarkup = createGalleryMrkup(galleryItems);

divRef.insertAdjacentHTML('beforeend', addGalleryMarkup);

divRef.addEventListener('click', onClickImage);

function onClickImage(e) {
	e.preventDefault();

	if(e.target.nodeName !== "IMG") {
		return;
	}


}
let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250,});
console.log(galleryItems);
