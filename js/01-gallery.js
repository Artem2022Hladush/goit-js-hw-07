import { galleryItems } from './gallery-items.js';
// Change code below this line

const divRef = document.querySelector('.gallery');

function createGalleryMrkup (items)  {
	return items
		.map((item) => 
		`
		<div class="gallery__item">
			<a class="gallery__link" href="${item.original}">
				<img
					class="gallery__image"
					src="${item.preview}"
					data-source="${item.original}"
					alt="${item.description}"
					/>
			</a>
		</div>
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

	const instance = basicLightbox.create(`
		<img src="${e.target.dataset.source}" width="800" height="600">
`);
instance.show();

divRef.addEventListener('keydown', (e) => {
	if(e.code === 'Escape') {
		instance.close();
	};
})
}



console.log(addGalleryMarkup);
console.log(galleryItems);
