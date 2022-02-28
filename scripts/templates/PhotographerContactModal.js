class PhotographerContactModal {
  constructor(name) {
    this.name = name;
  }

  createPhotographerContactModal() {
    const contactModal = document.createElement("dialog");
    contactModal.setAttribute("id", "contact_modal");
    contactModal.setAttribute("class", "photographer-contact-modal");

    const modalContent = `
      <div class="photographer-contact-modal__container">
        <header>
          <h2><span>Contactez-moi</span><span>${this.name}</span></h2>
          <img src="assets/icons/close.svg" onclick="closeModal()" />
        </header>
        <form>
          <label for="first-name">Prénom</label>
          <input class="photographer-contact-modal__input" type="text" id="first-name" name="first-name">
          <label for="last-name">Nom</label>
          <input class="photographer-contact-modal__input" type="text" id="last-name" name="last-name">
          <label for="email">Email</label>
          <input class="photographer-contact-modal__input" type="email" id="email" name="email">
          <label for="message">Votre message</label>
          <textarea class="photographer-contact-modal__input" type="message" id="message" name="message" cols="60" rows="9"></textarea>
          <button class="button button--submit" id="submit_button">Envoyer</button>
        </form>
      </div>
    `;

    contactModal.innerHTML = modalContent;
    return contactModal;
  }
}
