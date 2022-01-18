document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    console.log("Not Complete");
    // document.querySelector("body").style.visibility = "hidden";
    // document.querySelector("#loader").style.visibility = "visible";
  } else {
    console.log("Complete");
    // document.querySelector("#loader").style.display = "none";
    // document.querySelector("body").style.visibility = "visible";
  }
};
