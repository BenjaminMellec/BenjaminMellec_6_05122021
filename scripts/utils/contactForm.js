// Display the form modal by clicking on the button
const displayModal = () => {
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const modal = document.getElementById("contact_modal");
  const submitButton = document.getElementById("submit_button");

  body.style.overflow = "hidden";
  main.setAttribute("aria-hidden", "true");
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");

  // Close the modal by hitting Escape button
  if ((modal.style.display = "block")) {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeModal();
      }
    });
  }

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll(
      ".photographer-contact-modal__input"
    );

    inputs.forEach((input) => {
      if (input.value) {
        console.log("Le champ " + input.name + " a la valeur : " + input.value);
      } else {
        console.log("Le champ " + input.name + " est vide");
      }
    });
  });
};

// Hide the form modal by clicking on the cross
const closeModal = () => {
  const body = document.querySelector("body");
  const modal = document.getElementById("contact_modal");
  const main = document.querySelector("main");

  modal.setAttribute("aria-hidden", "true");
  modal.style.display = "none";
  main.setAttribute("aria-hidden", "false");
  body.style.overflow = "auto";
};
