var swiper = new Swiper(".mySwiper", {
  // direction: screen.width > 640 ? "horizontal" : "vertical",
  slidesPerView: "auto",
  // mouseWeheel: screen.width > 640 ? false : true,
  spaceBetween: 30,
  centeredSlides: false,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

