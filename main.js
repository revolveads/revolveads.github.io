import "./assets/css/tailus.css";
import "./assets/css/ui.css";

const mainHeader = document.querySelector("#header");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  mainHeader.dataset.state = mainHeader.dataset.state === "active" ? "closed" : "active";
});

document.addEventListener('DOMContentLoaded', () => {
  const dialogTriggers = document.querySelectorAll('[data-dialog-trigger]');

  dialogTriggers.forEach((dialogTrigger) => {
      const dialogId = dialogTrigger.getAttribute('data-dialog-trigger');

      if (!dialogId) {
          console.error('Dialog trigger is missing a valid "data-dialog-trigger" attribute.');
          return; 
      }

      const dialog = document.getElementById(dialogId);

      if (!dialog) {
          console.error(`Dialog with ID "${dialogId}" not found.`);
          return; 
      }

      const dialogClose = dialog.querySelector('[data-dialog-close]');

      if (!dialogClose) {
          console.error(`Close button not found in dialog with ID "${dialogId}".`);
          return; 
      }

      dialogTrigger.addEventListener('click', () => dialog.showModal());
      dialogClose.addEventListener('click', () => dialog.close());
  });
});
