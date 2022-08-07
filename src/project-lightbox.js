const lightboxBg = document.createElement('div');
lightboxBg.id = 'lightboxBg';
document.body.appendChild(lightboxBg);

const images = document.querySelectorAll('.zoom-image');
images.forEach(image => {
  image.addEventListener('click', () => {
    lightboxBg.classList.add('active');
    const lightboxImg  = document.createElement('img');
    lightboxImg.src = image.src
    lightboxImg.id = 'lightboxImg';
    while (lightboxBg.firstChild) {
      lightboxBg.removeChild(lightboxBg.firstChild);
    }
    lightboxBg.appendChild(lightboxImg);
  })
})

lightboxBg.addEventListener('click', () => {
  lightboxBg.classList.remove('active');
})