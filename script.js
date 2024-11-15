  // Set the end date and time for the countdown
  const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

  // Update the countdown every second
  const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the respective elements
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
      document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

      // If the countdown is over, display a message
      if (distance < 0) {
          clearInterval(interval);
          document.querySelector(".countdown-container").innerHTML = "<h3>Deal Expired</h3>";
      }
  }, 1000);



  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".feature");

    // Intersection Observer to detect when counters are in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute("data-target");

                // Function to animate the count
                const animateCounter = () => {
                    const current = +counter.innerText.replace(/\D/g, ""); // Remove any non-numeric characters
                    const increment = target / 200; // Adjust the increment value to control speed

                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment).toLocaleString();
                        setTimeout(animateCounter, 10); // Repeat every 10ms
                    } else {
                        counter.innerText = target.toLocaleString(); // Set to final value with formatting
                    }
                };

                animateCounter();
                observer.unobserve(counter); // Stop observing once animation starts
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold to start animation when 50% of the element is visible

    counters.forEach(counter => observer.observe(counter));
});



  // Toggle Password Visibility
  function togglePasswordVisibility(inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(iconId);

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.classList.remove("bi-eye-slash");
      toggleIcon.classList.add("bi-eye");
    } else {
      passwordInput.type = "password";
      toggleIcon.classList.remove("bi-eye");
      toggleIcon.classList.add("bi-eye-slash");
    }
  }


  // JavaScript to update the country code when the dropdown selection changes
  document.getElementById('countrySelect').addEventListener('change', function() {
    document.getElementById('countryCode').textContent = this.value;
  });

  // Example validation (basic)
  document.getElementById('phoneNumber').addEventListener('input', function() {
    const phoneNumber = this.value;
    // Simple check to allow only digits
    if (!/^\d*$/.test(phoneNumber)) {
      alert("Please enter only numbers for the phone number.");
      this.value = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters
    }
  });