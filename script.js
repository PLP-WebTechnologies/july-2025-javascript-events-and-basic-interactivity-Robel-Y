// 🎉 PART 1: EVENT HANDLING
// Click event to toggle light/dark mode
document.getElementById('toggleThemeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Click event for counting
let count = 0;
document.getElementById('clickMeBtn').addEventListener('click', () => {
  count++;
  document.getElementById('clickCount').textContent = count;
});

// 🎮 PART 2: INTERACTIVE ELEMENTS
// These are already built above: toggleTheme and clickCounter
// You can add more like dropdowns, tabs, etc.

// 📋 PART 3: FORM VALIDATION
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  // Clear previous messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('formSuccess').textContent = '';

  // Get values
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const password = document.getElementById('passwordInput').value;

  let isValid = true;

  // Name validation
  if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Name must be at least 2 characters.';
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email address.';
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
    this.reset(); // Clear form fields
  }
});
