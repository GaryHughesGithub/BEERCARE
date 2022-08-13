document.addEventListener('DOMContentLoaded', () => {
  
   const slideTime = 500;
   const backButton = document.querySelector('.hero-slider-back-btn');
   const forwardButton = document.querySelector('.hero-slider-next-btn');
   const allSlides = [...document.querySelectorAll('.hero-slide')];

   let clickable = true;
   let active = null;
   let newActive = null;

   function initSlider() {
      allSlides.forEach(slide => {
         slide.setAttribute(
            'style',
            `transition: transform ${slideTime}ms ease;
                         animation-duration: ${slideTime}ms
            `,
         );
      })
   }

   function changeSlide(forward) {
      if (clickable) {
         clickable = false;
         active = document.querySelector('.active');
         const activeSlideIndex = allSlides.indexOf(active);

         if(forward) {
            newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
            active.classList.add('slideOutLeft','active');
            newActive.classList.add('slideInRight','active');

         }else {
            newActive = allSlides[(activeSlideIndex - 1 + allSlides.length) % allSlides.length]; 
            active.classList.add('slideOutRight');
            newActive.classList.add('slideInLeft','active');

         }
      }
   }

   allSlides.forEach(slide => {
      slide.addEventListener('transitionend', () => {
         if(slide === active && !clickable) {
            clickable = true;
            active.className = 'hero-slide';
         }
      })
   })  

   //Event Listeners
   forwardButton.addEventListener('click', () => {
      changeSlide(true);
   })

   backButton.addEventListener('click', () => {
      changeSlide(false);
   })

   //Init the Slider - calls the initSlider function above
   initSlider();
});