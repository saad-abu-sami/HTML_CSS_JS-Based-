const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

i = 0;

function ActiveSlide(n){
   for(slide of slides){
      slide.classList.remove('active');
      slides[n].classList.add('active');
   }
}
//function for prev button
prev.addEventListener('click', function(){
   if(i == slides.length - 1){
      i = 0;
      ActiveSlide(n);
   }
   else{
      i++;
      ActiveSlide(i);
   }
})