const body = document.querySelector("body");
const loadingSpinner = document.getElementById("loading_spinner");

if (loadingSpinner.classList.contains("loading-spinner__container--visible")) {
  body.style.overflow = "hidden";
}

// Function to hide the loading spinner after 2 seconds of delay
const hideLoadingSpinner = () => {
  if ((loadingSpinner.style.opacity = 1)) {
    loadingSpinner.style.opacity = 0;
    body.style.overflow = "auto";
    setTimeout(() => {
      loadingSpinner.style.visibility = "hidden";
    }, 500);
  }
};

hideLoadingSpinner();
// setTimeout(hideLoadingSpinner, 2000);
