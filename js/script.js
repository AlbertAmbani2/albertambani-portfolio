// Toggle menubar
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

 // Add a click event listener to the navigation links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', smoothScroll);
});

document.querySelectorAll('.home a').forEach(link => {
  link.addEventListener('click', smoothScroll);
});


// Function to implement smooth scrolling
function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href').substring(1); 
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
      targetElement.scrollIntoView({
          behavior: 'smooth', // Use smooth scrolling
          block: 'start', // Scroll to the top of the target element
      });
  }
}
  
  
  
