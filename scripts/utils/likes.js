async function likesIncrementation(totalLikes) {
  const likeButtons = document.getElementsByClassName(
    "photographer-gallery__item-content-likes-button"
  );
  let totalCounter = document.querySelector("#total_likes_number");
  totalCounter.innerHTML = totalLikes;

  Array.from(likeButtons).forEach((likeButton) => {
    function incrementation(previousElement, likesNumber) {
      previousElement.innerHTML = likesNumber += 1;
      totalCounter.innerHTML = totalLikes += 1;
    }

    likeButton.addEventListener("click", function (event) {
      let likesNumber = parseInt(this.previousElementSibling.innerHTML);
      incrementation(this.previousElementSibling, likesNumber);
    });
    likeButton.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        let likesNumber = parseInt(this.previousElementSibling.innerHTML);
        incrementation(this.previousElementSibling, likesNumber);
      }
    });
  });
}
