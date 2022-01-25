async function likesIncrementation(totalLikes) {
  const likeButtons = document.getElementsByClassName(
    "photographer-gallery__item-content-likes-button"
  );
  let totalCounter = document.querySelector("#total_likes_number");
  totalCounter.innerHTML = totalLikes;

  Array.from(likeButtons).forEach((likeButton) => {
    likeButton.addEventListener("click", function (event) {
      let likesNumber = parseInt(this.previousElementSibling.innerHTML);

      this.previousElementSibling.innerHTML = likesNumber += 1;
      totalCounter.innerHTML = totalLikes += 1;
    });
  });
}
