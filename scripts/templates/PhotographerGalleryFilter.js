class PhotographerGalleryFilter {
  constructor(Medias, totalLikes) {
    this.Medias = Medias;
    this.totalLikes = totalLikes;

    this.mainSection = document.querySelector("#main");
    this.galleryWrapper = document.createElement("section");
    this.filterFormWrapper = document.createElement("section");
  }

  async filterMedias(selectedFilter) {
    this.clearGalleryWrapper();

    if (selectedFilter === "date") {
      this.Medias.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    } else if (selectedFilter === "title") {
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

  onChangeFilter() {
    this.filterFormWrapper
      .querySelector("#filter")
      .addEventListener("change", (event) => {
        const selectedFilter = event.target.value;
        this.filterMedias(selectedFilter);
      });
  }

  clearGalleryWrapper() {
    this.galleryWrapper.innerHTML = "";
  }

  customizeSelect() {
    // Solution inspired from w3schools https://www.w3schools.com/howto/howto_custom_select.asp
    var selectWrapper = document.querySelector(
      ".photographer-gallery-filter__select"
    );
    var select = selectWrapper.getElementsByTagName("select")[0];
    var selectLength = select.length;
    /* Create a new DIV that will act as the selected item: */
    var selectDiv = document.createElement("DIV");
    selectDiv.setAttribute(
      "class",
      "photographer-gallery-filter__select--selected"
    );
    selectDiv.innerHTML = select.options[select.selectedIndex].innerHTML;
    selectWrapper.appendChild(selectDiv);

    /* For each element, create a new DIV that will contain the option list: */
    var optionsDiv = document.createElement("DIV");
    optionsDiv.setAttribute(
      "class",
      "photographer-gallery-filter__select-items photographer-gallery-filter__select--hide"
    );

    for (var j = 0; j < selectLength; j++) {
      /* For each option in the original select element, create a new DIV that will act as an option item: */
      var optionDiv = document.createElement("DIV");
      optionDiv.innerHTML = select.options[j].innerHTML;

      if (optionDiv.innerHTML === selectDiv.innerHTML) {
        optionDiv.classList.add(
          "photographer-gallery-filter--same-as-selected"
        );
      }

      optionDiv.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box, and the selected item: */
        var parentSelect = this.parentNode.parentNode.querySelector("select");
        var selected = this.parentNode.previousSibling;

        for (var i = 0; i < parentSelect.length; i++) {
          if (parentSelect.options[i].innerHTML == this.innerHTML) {
            parentSelect.selectedIndex = i;
            selected.innerHTML = this.innerHTML;

            var sameAsSelected = this.parentNode.querySelector(
              ".photographer-gallery-filter--same-as-selected"
            );
            sameAsSelected.removeAttribute("class");
            this.setAttribute(
              "class",
              "photographer-gallery-filter--same-as-selected"
            );
            break;
          }
        }
        selected.click();
      });
      optionsDiv.appendChild(optionDiv);
    }
    selectWrapper.appendChild(optionsDiv);
    selectDiv.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes, and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle(
        "photographer-gallery-filter__select--hide"
      );
      this.classList.toggle(
        "photographer-gallery-filter__select-arrow--active"
      );
    });

    function closeAllSelect(elmnt) {
      /* A function that will close all select boxes in the document, except the current select box: */
      var arrNo = [];
      var selectItems = document.getElementsByClassName(
        "photographer-gallery-filter__select-items"
      );
      var selected = document.getElementsByClassName(
        "photographer-gallery-filter__select--selected"
      );
      var selectItemsLength = selectItems.length;
      var selectedLength = selected.length;

      for (var i = 0; i < selectedLength; i++) {
        if (elmnt == selected[i]) {
          arrNo.push(i);
        } else {
          selected[i].classList.remove(
            "photographer-gallery-filter__select-arrow--active"
          );
        }
      }
      for (i = 0; i < selectItemsLength; i++) {
        if (arrNo.indexOf(i)) {
          selectItems[i].classList.add(
            "photographer-gallery-filter__select--hide"
          );
        }
      }
    }

    /* If the user clicks anywhere outside the select box, then close all select boxes: */
    document.addEventListener("click", closeAllSelect);
  }

  createPhotographerGalleryFilter() {
    const galleryWrapper = document.createElement("section");
    galleryWrapper.classList.add("gallery-wrapper");

    const itemContent = `
      <form class="photographer-gallery-filter">
        <label for="filter">Trier par</label>
        <div class="photographer-gallery-filter__select"  style="width:200px;">
          <select name="filter" id="filter">
            <option value="popularity">Popularité</option>
            <option value="date">Date</option>
            <option value="title">Titre</option>
          </select>
        </div>
      </form>
    `;

    this.filterFormWrapper.innerHTML = itemContent;
    this.onChangeFilter();

    return this.filterFormWrapper;
  }
}
