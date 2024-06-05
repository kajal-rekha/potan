"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tab button");
  const allTabs = document.querySelectorAll(".left > div, .right > div");
  const navbar = document.querySelector("nav");
  const navLinks = navbar.querySelectorAll("a");
  const blockLogo = document.querySelector(".logo .block");
  const hiddenLogo = document.querySelector(".logo .hidden");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const tab = this.getAttribute("data-tab");

      // Filter tabs
      allTabs.forEach((div) => {
        if (tab === "all" || div.classList.contains(tab)) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      });

      // Active button styles
      buttons.forEach((btn) => {
        btn.classList.remove("active", "text-white", "bg-[#ff7a2f]");
        btn.classList.add("text-black", "bg-white");
      });

      this.classList.add("active", "text-white", "bg-[#ff7a2f]");
      this.classList.remove("text-black", "bg-white");
    });
  });

  // Initial state
  document.querySelector('[data-tab="all"]').click();

  function updateStyles() {
    if (window.scrollY > 0) {
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

  // Listen for scroll events
  window.addEventListener("scroll", updateStyles);
});
