"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tab button");
  const allTabs = document.querySelectorAll(".left > div, .right > div");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const tab = this.getAttribute("data-tab");

      // Filter tabs
      allTabs.forEach((div) => {
        if (tab === "all") {
          div.style.display = "block";
        } else {
          if (div.classList.contains(tab)) {
            div.style.display = "block";
          } else {
            div.style.display = "none";
          }
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
});

