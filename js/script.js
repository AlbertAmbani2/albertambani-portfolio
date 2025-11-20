// Toggle menubar
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const menuBar = document.querySelector('header');

  menuButton.addEventListener('click', function () {
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

//function to update age
// function updateAge() {
//   const ageEl = document.getElementById("age");
//   if (!ageEl) return; // element not present in DOM

//   const birthYear = 1999;
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - birthYear;

//   ageEl.innerHTML += age;
// }
// updateAge();

//function to send e-email
function sendMail() {
  // Read form fields; ensure the inputs have the expected ids in the HTML (name, email, phone, message)
  let parms = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  }
  emailjs.send("service_yldlz1s", "template_0sanifr", parms).then(alert("Message sent successfully!"))
}


