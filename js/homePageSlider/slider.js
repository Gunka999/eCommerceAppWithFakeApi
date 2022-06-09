images = ["img/sl1.jpg", "img/sl2.jpg", "img/sl3.jpg", "img/sl4.jpg"];

// slider_top - slider
// slider_top_container - sliders

const slider_top = document.querySelector(".slider_top");
const slider_top_container = document.querySelector(".slider_top_container");

let sliderWidth = 1200;
let sliderHeight = 550;

slider_top.style.width = `${sliderWidth}px`;
slider_top.style.height = `${sliderHeight}px`;
let slideElementWidth = sliderWidth;
let slideElementCount = images.length;

slider_top_container.style.width = `${slideElementWidth * slideElementCount}px`;

for (let img of images) {
  let slide = `
   <div class="slide" style="width:${slideElementWidth}px">
      <img src="${img}" alt="">
   </div>`;
  slider_top_container.innerHTML += slide;
}

let moveX = 0;

function goRight() {
  if (moveX <= -(slideElementCount - 1) * slideElementWidth) {
    moveX = 0;
    slider_top_container.style.transform = `translateX(${moveX}px)`;
  } else {
    moveX -= slideElementWidth;
    slider_top_container.style.transform = `translateX(${moveX}px)`;
  }
}

function goLeft() {
  if (moveX >= 0) {
    moveX = -(slideElementCount - 1) * slideElementWidth;
    slider_top_container.style.transform = `translateX(${moveX}px)`;
  } else {
    moveX += slideElementWidth;
    slider_top_container.style.transform = `translateX(${moveX}px)`;
  }
}
