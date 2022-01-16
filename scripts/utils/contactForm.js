function displayModal() {
  const body = document.querySelector("body");
  const modal = document.getElementById("contact_modal");
  const submitButton = document.getElementById("submit_button");

  modal.style.display = "block";
  body.style.overflow = "hidden";

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
}

function closeModal() {
  const body = document.querySelector("body");
  const modal = document.getElementById("contact_modal");

  modal.style.display = "none";
  body.style.overflow = "auto";
}
