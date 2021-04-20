'use strict';

let index = 0;
picture();

function picture() {
    var img = document.getElementsByClassName("pic");
  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";  
  }
  index++;
  if (index > img.length) {
    index = 1
  }
  img[index-1].style.display = "block";  
  setTimeout(picture, 6000); // Change image every 6 seconds
}