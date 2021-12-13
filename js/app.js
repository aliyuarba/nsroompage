$(".btnmenu").click(function(){
  $(this).toggleClass("active");
  $(".menu, .logo, nav").toggleClass("active");
});

let index = $(".image-slide").length;
let n = 1;
function prev() {
  n--;
  if (n < 1) {
    n = index;
  }
  $(`.image-slide:nth-child(${n}), .slide:nth-child(${n})`).toggleClass("active");
  $(`.image-slide:nth-child(${n}), .slide:nth-child(${n})`).siblings().removeClass("active");
}
function next() {
  n++;
  if (n > index) {
    n = 1;
  }
  $(`.image-slide:nth-child(${n}), .slide:nth-child(${n})`).toggleClass("active");
  $(`.image-slide:nth-child(${n}), .slide:nth-child(${n})`).siblings().removeClass("active");
}
