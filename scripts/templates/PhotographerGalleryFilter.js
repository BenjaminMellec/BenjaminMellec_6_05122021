class PhotographerGalleryFilter {
  constructor(Medias, totalLikes) {
    this.Medias = Medias;
    this.totalLikes = totalLikes;

    this.mainSection = document.querySelector("#main");
    this.galleryWrapper = document.createElement("section");
    this.filterFormWrapper = document.createElement("section");
  }

  async filterMedias(selectedFilter) {
    this.galleryWrapper.innerHTML = "";

    if (selectedFilter === "date") {
      this.Medias.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    } else if (selectedFilter === "titre") {
      this.Medias.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    } else {
      this.Medias.sort((a, b) => {
        return b.likes - a.likes;
      });
    }

    const galleryTemplate = new PhotographerGallery(this.Medias);
    this.galleryWrapper.appendChild(
      galleryTemplate.createPhotographerGallery()
    );
    this.mainSection.appendChild(this.galleryWrapper);
    likesIncrementation(this.totalLikes);
  }

  customizeSelect() {
    // Solution inspired from w3schools https://www.w3schools.com/howto/howto_custom_select.asp
    let FilterObject = this;
    let selectWrapper = document.querySelector(
      ".photographer-gallery-filter__select"
    );
    let select = selectWrapper.getElementsByTagName("select")[0];
    let selectLength = select.length;
    /* Create a new DIV that will act as the selected item: */
    let selectButton = document.createElement("button");
    selectButton.setAttribute(
      "class",
      "photographer-gallery-filter__select--selected"
    );
    selectButton.setAttribute("role", "button");
    selectButton.setAttribute("aria-haspopup", "listbox");
    selectButton.setAttribute("aria-expanded", "false");
    selectButton.innerHTML = select.options[select.selectedIndex].innerHTML;
    selectWrapper.appendChild(selectButton);

    /* For each element, create a new DIV that will contain the option list: */
    let optionsDiv = document.createElement("ul");
    optionsDiv.setAttribute(
      "class",
      "photographer-gallery-filter__select-items photographer-gallery-filter__select--hide"
    );
    optionsDiv.setAttribute("role", "listbox");

    this.filterMedias(this.selectedFilter);

    for (let j = 0; j < selectLength; j++) {
      /* For each option in the original select element, create a new DIV that will act as an option item: */
      let optionDiv = document.createElement("li");
      optionDiv.setAttribute("role", "option");
      optionDiv.setAttribute(
        "data-value",
        select.options[j].innerHTML.toLowerCase()
      );
      optionDiv.setAttribute("id", select.options[j].innerHTML.toLowerCase());
      optionDiv.setAttribute("tabindex", "0");
      optionDiv.innerHTML = select.options[j].innerHTML;

      if (optionDiv.innerHTML === selectButton.innerHTML) {
        optionDiv.classList.add(
          "photographer-gallery-filter--same-as-selected"
        );
      }

      function updateItemsList() {
        /* When an item is clicked, update the original select box, and the selected item: */
        let parentSelect = this.parentNode.parentNode.querySelector("select");
        let selected = this.parentNode.previousSibling;

        for (let i = 0; i < parentSelect.length; i++) {
          if (parentSelect.options[i].innerHTML == this.innerHTML) {
            parentSelect.selectedIndex = i;
            selected.innerHTML = this.innerHTML;
            selected.setAttribute(
              "data-value",
              this.getAttribute("data-value")
            );

            let sameAsSelected = this.parentNode.querySelector(
              ".photographer-gallery-filter--same-as-selected"
            );
            sameAsSelected.removeAttribute("class");
            this.setAttribute(
              "class",
              "photographer-gallery-filter--same-as-selected"
            );

            FilterObject.filterMedias(selected.getAttribute("data-value"));

            break;
          }
        }
      }

      optionDiv.addEventListener("click", updateItemsList);
      optionsDiv.appendChild(optionDiv);
    }

    selectWrapper.appendChild(optionsDiv);
    selectButton.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes, and open/close the current select box: */
      e.preventDefault();
      e.stopPropagation();
      closeAllSelect(this);

      this.nextSibling.classList.toggle(
        "photographer-gallery-filter__select--hide"
      );
      this.classList.toggle(
        "photographer-gallery-filter__select-arrow--active"
      );

      // Toggle the aria-expanded attribute
      if (
        this.classList.contains(
          "photographer-gallery-filter__select-arrow--active"
        )
      ) {
        this.setAttribute("aria-expanded", "true");
      } else {
        this.setAttribute("aria-expanded", "false");
      }
    });

    const closeAllSelect = (elmnt) => {
      /* A function that will close all select boxes in the document, except the current select box: */
      let arrNo = [];
      let selectItems = document.getElementsByClassName(
        "photographer-gallery-filter__select-items"
      );
      let selected = document.getElementsByClassName(
        "photographer-gallery-filter__select--selected"
      );
      let selectItemsLength = selectItems.length;
      let selectedLength = selected.length;

      selected[0].setAttribute("aria-expanded", "false");

      for (let i = 0; i < selectedLength; i++) {
        if (elmnt == selected[i]) {
          arrNo.push(i);
        } else {
          selected[i].classList.remove(
            "photographer-gallery-filter__select-arrow--active"
          );
        }
      }
      for (let i = 0; i < selectItemsLength; i++) {
        if (arrNo.indexOf(i)) {
          selectItems[i].classList.add(
            "photographer-gallery-filter__select--hide"
          );
        }
      }
    };

    /* If the user clicks anywhere outside the select box, then close all select boxes: */
    document.addEventListener("click", closeAllSelect);
  }

  createPhotographerGalleryFilter() {
    const galleryWrapper = document.createElement("section");
    galleryWrapper.classList.add("gallery-wrapper");
    // Create the default select that will be replaced
    const itemContent = `
      <form class="photographer-gallery-filter">
        <label for="filter">Trier par</label>
        <div class="photographer-gallery-filter__select"  style="width:170px;">
          <select name="filter" id="filter">
            <option value="popularity">Popularité</option>
            <option value="date">Date</option>
            <option value="title">Titre</option>
          </select>
        </div>
      </form>
    `;

    this.filterFormWrapper.innerHTML = itemContent;

    return this.filterFormWrapper;
  }
}
