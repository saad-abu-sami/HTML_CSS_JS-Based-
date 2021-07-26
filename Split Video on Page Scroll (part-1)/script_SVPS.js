let side1 = document.getElemenetById('side1');
let side2 = document.getElemenetById('side2');

window.addEventListener('scroll',function(){
   side1.style.left = -window.pageYOffset+ 'px';
   side2.style.left =  window.pageYOffset+ 'px';
})
