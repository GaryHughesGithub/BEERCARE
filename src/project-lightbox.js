const lightboxBg = document.createElement('div');
lightboxBg.id = 'lightboxBg';
document.body.appendChild(lightboxBg);

const images = document.querySelectorAll('.zoom-image');
images.forEach(image => {
  image.addEventListener('click', evt => {
    lightboxBg.classList.add('active');
    const lightBoxImg  =document.createElement('img');
    lightBoxImg.src = image
    lightBoxImg.id = 'lightboxImg';
    lightboxBg.appendChild(lightBoxImg);
  })
})