// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menuBar = document.querySelector('header');

    const touchStartX = 0;
    const touchEndX = 0;
  
    menuButton.addEventListener('click', function() {
      menuBar.classList.toggle('header-visible');

      //event listener for touchstart
      menuButton.addEventListener('touchstart', function(event) {
        touchStartX = event.touches[0].clientX;
      });

      //Event listener for touchmove
      menuButton.addEventListener('touchmove', function (event) {
        touchEndX = event.touches[0].clientX
      });

       //Event listener for touchend
       menuButton.addEventListener('touchend', function () {
        //calculate distance  swiped
        const swipeDistance = touchEndX - touchStartX;
        //adjust threshhold for smoother swipe exp
        const swipeThreshold = 50;

        if (swipeDistance > swipeThreshold){
          //swipe right
          menuBar.classList.add('header-visible')
        } else if (swipeDistance < -swipeThreshold) {

          //swipe left
          menuBar.classList.remove('header-visible')

        }
       });

 //close menubar when clicking outside
 document.body.addEventListener('click', function(event) {
  if  (!event.target.closest('header') && !event.target.closest('#menu-button')) {
    menuBar.classList.remove('header-visible');
  }
}) ;
    });
  });

 

  
  
  
