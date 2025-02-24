// Toggle class active untuk navbar
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Animasi layanan saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  let services = document.querySelectorAll(".layanan-item");

  services.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add("show");
    }, index * 300); // Delay munculnya layanan
  });
});

// Animasi layanan saat scroll
document.addEventListener("DOMContentLoaded", function () {
  let services = document.querySelectorAll(".layanan-item");

  function checkVisibility() {
    services.forEach((box, index) => {
      let boxPosition = box.getBoundingClientRect().top;
      let screenPosition = window.innerHeight - 100; // Agar animasi mulai lebih cepat

      if (boxPosition < screenPosition) {
        setTimeout(() => {
          box.classList.add("show");
        }, index * 200); // Muncul bertahap lebih cepat
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Jalankan sekali saat halaman dimuat
});
