async function likesIncrementation(totalLikes) {
  const likeButtons = document.getElementsByClassName(
    "photographer-gallery__item-content-likes-button"
  );
  let totalCounter = document.querySelector("#total_likes_number");
  totalCounter.innerHTML = totalLikes;

  function incrementation(previousElement, likesNumber) {
    previousElement.innerHTML = likesNumber += 1;
    totalCounter.innerHTML = totalLikes += 1;
  }

  Array.from(likeButtons).forEach((likeButton) => {
    likeButton.addEventListener("click", function (event) {
      let likesNumber = parseInt(this.previousElementSibling.innerHTML);
      incrementation(this.previousElementSibling, likesNumber);
      this.setAttribute("disabled", "true");
    });
    likeButton.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        let likesNumber = parseInt(this.previousElementSibling.innerHTML);
        incrementation(this.previousElementSibling, likesNumber);
        this.setAttribute("disabled", "true");
      }
    });
  });
}
