// Toggle menubar
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menuBar = document.querySelector('header');
  
    menuButton.addEventListener('click', function() {
      menuBar.classList.toggle('header-visible');
    }) 

    // Add an event listener to the document body 
document.body.addEventListener('click', function (event) {

  // Check if the click target is not within the navbar or toggle button
  if (!event.target.closest('header') && !event.target.closest('.menu-button')) {
    
      // Close the menu by removing the "active" class
      menuBar.classList.remove('header-visible');
  }
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

//function to send e-email
function sendEmail() {
  sendEmail.send({
    Host : "smtp.gmail.com",
    Username : "albertambani1@gmail.com",
    Password : "@@lbZ@t1",
    To : 'albertambani1@gmail.com' ,
    From : document.getElementById("email").value,
    Subject : "New contact form inquiry" ,
    Body : "Name: " + document.getElementById("name").value
           + "<br> Email: " + document.getElementById("email").value
           + "<br> Phone no: " + document.getElementById("phone").value
           + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("Message sent successfully!")
  ); 
}