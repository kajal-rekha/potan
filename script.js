"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // ===================== Navbar functionality ====================== //
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

  window.addEventListener("scroll", updateStyles);
  window.addEventListener("resize", updateStyles);

  // ===================== Mobile nav functionality ===================== //
  const navToggle = document.querySelector(".nav-toggle");
  const navCross = document.querySelector(".nav-cross");
  const mobileNav = document.querySelector(".mobile-nav");
  const body = document.body;

  navToggle.addEventListener("click", function () {
    mobileNav.classList.remove("hidden");
    navToggle.classList.add("hidden");
    navCross.classList.remove("hidden");
    body.style.overflowY = "hidden";
  });

  navCross.addEventListener("click", function () {
    mobileNav.classList.add("hidden");
    navToggle.classList.remove("hidden");
    navCross.classList.add("hidden");
    body.style.overflowY = "auto";
  });

  // ===================== Toggle sub-menu ===================== //
  document.querySelectorAll(".mobile-home > a").forEach(function (menu) {
    menu.addEventListener("click", function (e) {
      e.preventDefault();
      const subMenu = this.parentElement.querySelector(".mobile-sub-menu");
      if (subMenu.style.visibility === "visible") {
        subMenu.style.visibility = "hidden";
      } else {
        // Hide any other open sub-menus
        document.querySelectorAll(".mobile-sub-menu").forEach(function (menu) {
          menu.style.visibility = "hidden";
        });
        subMenu.style.visibility = "visible";
      }
    });
  });

  // ===================== Tab functionality ===================== //
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

  // ===================== Animation for counters ===================== //
  function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = range / (duration / 10);
    let timer = setInterval(function () {
      current += increment;
      if (
        (increment > 0 && current >= end) ||
        (increment < 0 && current <= end)
      ) {
        clearInterval(timer);
        current = end;
      }
      obj.textContent = Math.round(current) + "+";
    }, 10);
  }

  let totalDuration = 2000;
  animateValue("projectCount", 0, 12, totalDuration);
  animateValue("memberCount", 0, 22, totalDuration);
  animateValue("happyClients", 0, 145, totalDuration);
  animateValue("projectsContact", 0, 258, totalDuration);
  animateValue("businessPlan", 0, 365, totalDuration);
  animateValue("awardWinner", 0, 890, totalDuration);

  // ===================== scrollToTop ===================== //
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToTop() {
    const scrollDuration = 1000;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  var mybutton = document.getElementById("scrollToTopBtn");

  mybutton.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToTop();
  });
});
