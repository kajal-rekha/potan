"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //================= Navbar functionality ======================//
  const navbar = document.querySelector("nav");
  const navLinks = navbar.querySelectorAll(".nav-links");
  const blockLogo = document.querySelector(".logo .block");
  const hiddenLogo = document.querySelector(".logo .hidden");

  function updateStyles() {
    if (window.scrollY > 0 || window.innerWidth <= 768) {
      navbar.classList.add("scrolled");
      navLinks.forEach((link) => {
        link.classList.add("scrolled-text");
      });
      blockLogo.style.display = "none";
      hiddenLogo.style.display = "block";
    } else {
      navbar.classList.remove("scrolled");
      navLinks.forEach((link) => {
        link.classList.remove("scrolled-text");
      });
      blockLogo.style.display = "block";
      hiddenLogo.style.display = "none";
    }
  }

  // ======================= Listen for scroll and resize events =====================//
  window.addEventListener("scroll", updateStyles);
  window.addEventListener("resize", updateStyles);

  // Mobile nav functionality
  const navToggle = document.querySelector(".nav-toggle");
  const navCross = document.querySelector(".nav-cross");
  const mobileNav = document.querySelector(".mobile-nav");
  const body = document.body;

  navToggle.addEventListener("click", function () {
    mobileNav.classList.remove("hidden");
    navToggle.classList.add("hidden");
    navCross.classList.remove("hidden");
    body.style.overflowY = "hidden"; // Prevent scrolling
  });

  navCross.addEventListener("click", function () {
    mobileNav.classList.add("hidden");
    navToggle.classList.remove("hidden");
    navCross.classList.add("hidden");
    body.style.overflowY = "auto"; // Allow scrolling
  });

  // ========================= Tab functionality =========================//
  const buttons = document.querySelectorAll(".tab button");
  const allTabs = document.querySelectorAll(".left > div, .right > div");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const tab = this.getAttribute("data-tab");

      allTabs.forEach((div) => {
        if (tab === "all" || div.classList.contains(tab)) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      });

      buttons.forEach((btn) => {
        btn.classList.remove("active", "text-white", "bg-[#ff7a2f]");
        btn.classList.add("text-black", "bg-white");
      });

      this.classList.add("active", "text-white", "bg-[#ff7a2f]");
      this.classList.remove("text-black", "bg-white");
    });
  });

  document.querySelector('[data-tab="all"]').click();
});
