document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form submission handling
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Show a success message
          alert("Message sent successfully!");
          form.reset();
        } else {
          // Show an error message
          alert("Oops! There was a problem sending your message.");
        }
      })
      .catch((error) => {
        // Show an error message
        alert("Oops! There was a problem sending your message.");
        console.error("Error:", error);
      });
  });
  //   const form = document.getElementById("contact-form");
  //   form.addEventListener("submit", function (e) {
  //     e.preventDefault();

  //     // Get form values
  //     const name = document.getElementById("name").value;
  //     const email = document.getElementById("email").value;
  //     const message = document.getElementById("message").value;

  //     // Here you would typically send this data to a server
  //     // For this example, we'll just log it to the console
  //     console.log("Form submitted:", { name, email, message });

  //     // Clear the form
  //     form.reset();

  //     // Show a success message (you can replace this with a more user-friendly notification)
  //     alert("Message sent successfully!");
  //   });

  // Animate sections on scroll
  const sections = document.querySelectorAll("section");
  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Animate skill bars
  const skillBars = document.querySelectorAll(".skill-progress");
  const skillObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        const bar = entry.target;
        const width = bar.getAttribute("data-width"); // Get the width from a data attribute
        bar.style.width = width;
        observer.unobserve(bar);
      });
    },
    { threshold: 0.5 }
  );

  skillBars.forEach((bar) => {
    const parentItem = bar.closest(".skill-item");
    const skillName = parentItem.getAttribute("data-skill");
    const width = parentItem.getAttribute("data-progress");
    bar.setAttribute("data-width", width);
    skillObserver.observe(bar);
  });
  //   const skillBars = document.querySelectorAll(".skill-progress");
  //   skillBars.forEach((bar) => {
  //     bar.style.width = "0%";
  //   });

  //   const skillObserver = new IntersectionObserver(function (entries, observer) {
  //     entries.forEach((entry) => {
  //       if (!entry.isIntersecting) {
  //         return;
  //       }
  //       const bar = entry.target;
  //       const width = bar.style.width;
  //       bar.style.width = "0%";
  //       setTimeout(() => {
  //         bar.style.width = width;
  //       }, 100);
  //       observer.unobserve(bar);
  //     });
  //   }, options);

  //   skillBars.forEach((bar) => {
  //     skillObserver.observe(bar);
  //   });

  // Parallax effect for header background
  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;
    document.querySelector(".parallax").style.backgroundPositionY =
      scrollPosition * 0.7 + "px";
  });

  // Dynamic header color change on scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.style.backgroundColor = "rgba(52, 152, 219, 0.9)";
    } else {
      header.style.backgroundColor = "rgba(52, 152, 219, 0.8)";
    }
  });

  // Project card hover effect
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Typewriter effect for subtitle
  const subtitle = document.querySelector(".subtitle");
  const text = subtitle.textContent;
  subtitle.textContent = "";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();
});
