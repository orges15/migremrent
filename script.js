document.getElementById("reservation-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('orges', 'migremyacht', this)
    .then(function() {
      document.getElementById("form-status").innerText = "Reservation sent successfully!";
    }, function(error) {
      document.getElementById("form-status").innerText = "Error sending reservation.";
      console.log(error);
    });

  this.reset();
});
// Menu toggle for mobile
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

// Contact form via EmailJS
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function () {
        document.getElementById("contact-status").innerText = "Message sent successfully!";
      }, function (error) {
        document.getElementById("contact-status").innerText = "Failed to send message.";
        console.error(error);
      });

    this.reset();
  });

}
document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');
  const selectedDateInput = document.getElementById('selected-date');
  const yachtSelect = document.getElementById('yacht-select');

  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    selectable: true,
    events: [], // Do e mbushim sipas jahtit

    dateClick: function(info) {
      selectedDateInput.value = info.dateStr;
    }
  });

  calendar.render();

  // Simulimi i rezervimeve ekzistuese
  const yachtBookings = {
    'adriatic-pearl': [
      { title: 'Reserved', start: '2025-08-05', end: '2025-08-08' },
      { title: 'Reserved', start: '2025-08-12' }
    ],
    'blue-horizon': [
      { title: 'Reserved', start: '2025-08-03', end: '2025-08-04' }
    ]
  };

  // Ndrysho eventet kur zgjedh jahtin
  yachtSelect.addEventListener('change', function() {
    const yacht = this.value;
    calendar.removeAllEvents();
    calendar.addEventSource(yachtBookings[yacht] || []);
  });
});

// EmailJS për dërgimin e rezervimit
emailjs.init("YOUR_PUBLIC_KEY"); // zëvendëso

document.getElementById('calendar-booking-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      document.getElementById("calendar-status").innerText = "Reservation sent successfully!";
    }, (err) => {
      document.getElementById("calendar-status").innerText = "Sending failed.";
      console.error(err);
    });

  this.reset();
});


