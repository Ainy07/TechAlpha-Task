// script.js
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const addImageButton = document.getElementById('add-image-button');
    const modal = document.getElementById('add-image-modal');
    const closeModal = document.querySelector('.close');
    const addImageForm = document.getElementById('add-image-form');
    const imageFileInput = document.getElementById('image-file');
    const imageTitleInput = document.getElementById('image-title');

    const images = [];

    function renderGallery() {
        gallery.innerHTML = '';
        images.forEach((image) => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <img src="${image.url}" alt="${image.title}">
                <div class="info">
                    <h3>${image.title}</h3>
                </div>
            `;
            gallery.appendChild(galleryItem);
        });
    }

    addImageButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    addImageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const file = imageFileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const newImageUrl = e.target.result;
            const newImageTitle = imageTitleInput.value;
            images.push({ url: newImageUrl, title: newImageTitle });
            renderGallery();
            modal.style.display = 'none';
            imageFileInput.value = '';
            imageTitleInput.value = '';
        }

        reader.readAsDataURL(file);
    });

    renderGallery();
});
