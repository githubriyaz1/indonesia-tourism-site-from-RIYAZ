// Smooth scroll effect for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      // If it's an anchor link with #
      if (link.hash && document.querySelector(link.hash)) {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        target.scrollIntoView({ behavior: "smooth" });
      }

      // Active nav highlight
      links.forEach(nav => nav.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Fade-in animation for sections
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".card").forEach(el => {
    observer.observe(el);
  });
});
