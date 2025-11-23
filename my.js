// const slider = document.getElementById("slider");
// const prev = document.getElementById("prev");
// const next = document.getElementById("next");

// prev.addEventListener("click", () => {
//   slider.scrollBy({ left: -300, behavior: "smooth" });
// });

// next.addEventListener("click", () => {
//   slider.scrollBy({ left: 300, behavior: "smooth" });
// });

// Login btn
const button = document.querySelector("#login");
console.log(button);
button.addEventListener("click", () => {
  window.location.href = "login.html";
});

const slider = document.getElementById("slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
// <!-- JS for mobile toggle -->
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Buttons functionality
nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
});

// Automatic smooth scroll
let autoScroll = setInterval(() => {
  // Scroll right by 1px every 10ms
  slider.scrollBy({ left: 1, behavior: "smooth" });

  // Optional: loop back to start if reach end
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollLeft = 0; // reset to start
  }
}, 70);

// Pause auto-scroll on hover
slider.addEventListener("mouseenter", () => clearInterval(autoScroll));
slider.addEventListener("mouseleave", () => {
  autoScroll = setInterval(() => {
    slider.scrollBy({ left: 1, behavior: "smooth" });
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
      slider.scrollLeft = 0;
    }
  }, 60);
});
