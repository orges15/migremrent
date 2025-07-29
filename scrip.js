// Toggle menu for mobile
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("nav-links").classList.toggle("active");
});

// Booking form submit with EmailJS
document.getElementById("booking-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const status = document.getElementById("booking-status");
  status.textContent = "Sending...";

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
      status.textContent = "Reservation sent successfully!";
      document.getElementById("booking-form").reset();
    }, function(error) {
      status.textContent = "Failed to send reservation.";
      console.error("EmailJS error:", error);
    });
});
