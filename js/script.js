// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menuBar = document.querySelector('header');
  
    menuButton.addEventListener('click', function() {
      menuBar.classList.toggle('header-visible');

 //close menubar when clicking outside
 document.body.addEventListener('click', function(event) {
  if  (!event.target.closest('header') && !event.target.closest('#menu-button')) {
    menuBar.classList.remove('header-visible');
  }
}) ;

    });
    
  });

 

  
  
  
