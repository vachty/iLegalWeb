function gallery(imgs) {

    var expandImg = document.getElementById("expandedImg");

    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }