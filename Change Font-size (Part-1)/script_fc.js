let buttons = document.querySelector('.buttons');
let btn     = buttons.querySelectorAll('.btn');
for (let i = 0; i < buttons.length; i++) {
   btn[i].addEventListener('click', function(){
      let current     = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace("active", "");
      this.className += " active";
   })
}
