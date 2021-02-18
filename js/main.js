const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu--active");
  body.classList.toggle("lock-scroll");
});

const slider = new Swiper('.slider', {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  loopedSlides: 2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
  breakpoints: {
    640: {
      spaceBetween: 24,
    }
  }
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 45.0297008, lng: 39.0145609 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.querySelector(".footer__map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
