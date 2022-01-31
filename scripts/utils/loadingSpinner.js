const body = document.querySelector("body");
const loadingSpinner = document.getElementById("loading_spinner");

if (loadingSpinner.classList.contains("loading-spinner__container--visible")) {
  body.style.overflow = "hidden";
}

const hideLoadingSpinner = () => {
  loadingSpinner.classList.remove("loading-spinner__container--visible");
  body.style.overflow = "auto";
};

hideLoadingSpinner();
// setTimeout(hideLoadingSpinner, 2500);
