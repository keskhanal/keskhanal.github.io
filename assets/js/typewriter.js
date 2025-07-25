document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    "Software Engineer",
    "Problem Solver",
    "Traveler",
    "Lifelong Learner",
    "ML Engineer"
  ];

  const typewriterEl = document.querySelector('.typewriter-text');
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];

    // Handle the substring for typing/deleting
    if (!isDeleting) {
      typewriterEl.textContent = currentRole.substring(0, charIndex++);
    } else {
      typewriterEl.textContent = currentRole.substring(0, charIndex--);
    }

    let delay = isDeleting ? 50 : 100;

    // Typing completed
    if (!isDeleting && charIndex > currentRole.length) {
      isDeleting = true;
      delay = 1500;
    }

    // Deletion completed
    if (isDeleting && charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 1000; // ⏳ pause after clearing text before next type
      typewriterEl.textContent = ''; // Ensure empty before pause
      charIndex = 0;
    }

    setTimeout(type, delay);
  }

  type();
});
