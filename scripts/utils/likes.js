function likesIncrementation() {
  const likeButtons = document.getElementsByClassName(
    "photographer-gallery__item-content-likes-button"
  );
  let totalCounter = document.getElementById("total_likes_number");

  Array.from(likeButtons).forEach((likeButton) => {
    likeButton.addEventListener("click", function (event) {
      let likesNumber = parseInt(this.previousElementSibling.innerHTML);
      let totalNuberOfLikes = parseInt(totalCounter.innerHTML);

      this.previousElementSibling.innerHTML = likesNumber += 1;
      totalCounter.innerHTML = totalNuberOfLikes += 1;
    });
  });
}

setTimeout(likesIncrementation, 800);
