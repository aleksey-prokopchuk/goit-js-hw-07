import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')


//Рендер галереї по масиву данних за допомогою map
// const imageLi = galleryItems.map(item => `<div class="gallery__item">
//   <a class="gallery__link" href="${item.original}">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="${item.description}"
//     />
//   </a>
//   </div>`

// ).join('');

//Рендер галереї по масиву данних за допомогою reduce
const imageLi = galleryItems.reduce((acc, item) => acc + `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img
class="gallery__image"
src="${item.preview}"
data-source="${item.original}"
alt="${item.description}"
/>
</a>
</div>`, '');

//Добавляємо в список через innerHTML
// gallery.innerHTML = imageLi;

//Добавляємо  в список через insertAdjacentHTML
gallery.insertAdjacentHTML('beforeend', imageLi);

//   console.log(imageLi);


// Реалізація делегування на div.gallery

const handleClick = (event) => {
    event.preventDefault()
    if (!event.target.classList.contains('gallery__image')) {
        return
    }
    console.log(event.target.dataset.source);
    console.log('Бідбувся клік по зображенню' );
    
    //Отримання url великого зображення та відкриття повного зображення.
    const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}'>
`)
    instance.show()
}

gallery.addEventListener('click', handleClick);