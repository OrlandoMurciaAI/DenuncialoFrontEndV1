// script.ts
document.addEventListener("DOMContentLoaded", () => {
    const modalToggleButtons = document.querySelectorAll<HTMLElement>("[data-modal-toggle]");
    const modalHideButtons = document.querySelectorAll<HTMLElement>("[data-modal-hide]");
  
    modalToggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-modal-target");
        const modal = document.getElementById(target!);
        if (modal) {
          modal.classList.remove("hidden");
          modal.setAttribute("aria-hidden", "false");
        }
      });
    });
  
    modalHideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-modal-hide");
        const modal = document.getElementById(target!);
        if (modal) {
          modal.classList.add("hidden");
          modal.setAttribute("aria-hidden", "true");
        }
      });
    });
  });
  