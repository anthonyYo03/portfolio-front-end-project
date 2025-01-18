document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
  
    // Helper function to display feedback
    function setFeedback(element, message, isValid) {
      let feedback = element.nextElementSibling;
      if (!feedback || feedback.className !== "feedback") {
        feedback = document.createElement("div");
        feedback.className = "feedback";
        element.parentNode.insertBefore(feedback, element.nextSibling);
      }
      feedback.textContent = message;
      feedback.style.color = isValid ? "green" : "red";
    }
  
    // Email validation
    emailInput.addEventListener("input", () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(emailInput.value)) {
        setFeedback(emailInput, "Valid email format", true);
      } else {
        setFeedback(emailInput, "Invalid email format", false);
      }
    });
  
    // Phone number validation
    phoneInput.addEventListener("input", () => {
      const phoneRegex = /^[0-9]{10}$/; // Example: 10 digits only
      if (phoneRegex.test(phoneInput.value)) {
        setFeedback(phoneInput, "Valid phone number", true);
      } else {
        setFeedback(phoneInput, "Invalid phone number. Must be 10 digits.", false);
      }
    });
  
    // Password strength validation
    passwordInput.addEventListener("input", () => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (passwordRegex.test(passwordInput.value)) {
        setFeedback(passwordInput, "Strong password", true);
      } else {
        setFeedback(
          passwordInput,
          "Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character.",
          false
        );
      }
    });
  
    // Confirm password validation
    confirmPasswordInput.addEventListener("input", () => {
      if (confirmPasswordInput.value === passwordInput.value) {
        setFeedback(confirmPasswordInput, "Passwords match", true);
      } else {
        setFeedback(confirmPasswordInput, "Passwords do not match", false);
      }
    });
  
    // Form submission validation
    form.addEventListener("submit", (event) => {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
      const phoneValid = /^[0-9]{10}$/.test(phoneInput.value);
      const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordInput.value);
      const passwordsMatch = confirmPasswordInput.value === passwordInput.value;
  
      if (!emailValid || !phoneValid || !passwordValid || !passwordsMatch) {
        event.preventDefault(); // Prevent form submission
        alert("Please fix the errors in the form before submitting.");
      }
    });
  });

  


//contact-validation.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const messageInput = document.getElementById("message");
  
    // Helper function to show feedback
    function setFeedback(element, message, isValid) {
      let feedback = element.nextElementSibling;
      if (!feedback || feedback.className !== "feedback") {
        feedback = document.createElement("div");
        feedback.className = "feedback";
        element.parentNode.insertBefore(feedback, element.nextSibling);
      }
      feedback.textContent = message;
      feedback.style.color = isValid ? "green" : "red";
    }
  
    // Real-time message validation
    messageInput.addEventListener("input", () => {
      if (messageInput.value.trim() === "") {
        setFeedback(messageInput, "Message cannot be empty.", false);
      } else {
        setFeedback(messageInput, "Message looks good!", true);
      }
    });
  
    // Form submission validation
    form.addEventListener("submit", (event) => {
      if (messageInput.value.trim() === "") {
        event.preventDefault(); // Prevent form submission
        alert("Please enter a message before submitting.");
      }
    });
  });
  







  

document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const ratingResult = document.getElementById("rating-result");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      // Turn all stars up to the clicked one gold
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.add("gold");
        } else {
          s.classList.remove("gold");
        }
      });

      // Update the rating result
      const rating = index + 1;
      ratingResult.querySelector("span").textContent = rating;

      // Display a thank-you message
      const thankYouMessage = document.createElement("p");
      thankYouMessage.textContent = "Thank You For Rating!";
      thankYouMessage.classList.add("thank-you");

      // Prevent duplicate messages
      const existingMessage = document.querySelector(".thank-you");
      if (!existingMessage) {
        ratingResult.insertAdjacentElement("afterend", thankYouMessage);
      }
    });
  });
});





// Function to toggle content visibility
function toggleContent(contentId) {
  const content = document.getElementById(contentId);
  if (content.style.display === 'none') {
      content.style.display = 'block';
  } else {
      content.style.display = 'none';
  }
}


// JS ReadMore in blog section
function toggleReadMore(button) {
  const content = button.previousElementSibling;
  content.classList.toggle("expanded");
  button.textContent = content.classList.contains("expanded") ? "Read Less" : "Read More";
}








