const body = document.querySelector('body');


//burger menu
const header__burger = document.querySelector('.header__burger')
const header__burgerPolosa1 = document.querySelector('.header__burger-polosa1');
const header__burgerPolosa = document.querySelector('.header__burger-polosa');
const header__burgerPolosa3 = document.querySelector('.header__burger-polosa3');
const header__menu = document.querySelector('.header__menu-opend');


header__burger.addEventListener('click', burger);
function burger() {
  header__menu.classList.toggle('open');
  header__burgerPolosa1.classList.toggle('open');
  header__burgerPolosa.classList.toggle('open');
  header__burgerPolosa3.classList.toggle('open');
  body.classList.toggle('open');
}


const swiper = new Swiper('.apelsin__swiper-container', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.apelsin__button-right',
    prevEl: '.apelsin__button-left',
  },

});



const hunter__swiper = new Swiper('.hunter__swiper-container', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 3000,
  },

  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.apelsin__button-right',
    prevEl: '.apelsin__button-left',
  },

});

const hunter__swiper__News = document.querySelector('.hunter__swiper-news');


const hunter__swiperNews = new Swiper('.hunter__swiper-news', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 3000,
  },

  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,


  // Navigation arrows
  navigation: {
    nextEl: '.apelsin__button-right',
    prevEl: '.apelsin__button-left',
  },

});




if (body.clientWidth < 450 && hunter__swiper__News) {
  hunter__swiper.autoplay.start()
  hunter__swiperNews.autoplay.start()
  console.log('true');
} else if (body.clientWidth >= 450 && hunter__swiper__News) {
  hunter__swiper.autoplay.stop()
  hunter__swiperNews.autoplay.stop()
} else {
  console.log('false');
}











if (body.clientWidth <= 1260) {
  const team__swiper = new Swiper('.team__swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    breakpoints: {
      // when window width is >= 320px        
      320: {
        slidesPerView: 1.4,
      },
      498: {
        slidesPerView: 2,
      },

      740: {
        slidesPerView: 3,
      },

    }
  });
}


const instagram__swiperSlide = document.querySelectorAll('.instagram__swiper-slide');




const instagram__swiper = new Swiper('.instagram__swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 80,
  centeredSlides: true,

  breakpoints: {
    // when window width is >= 320px        
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    800: {
      slidesPerView: 4,
    },
  }

});


const nature__swiper = new Swiper('.nature__swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 80,

  breakpoints: {
    // when window width is >= 320px        
    320: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },

    498: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 3,
    },

    1000: {
      slidesPerView: 4,
    },


  }

});











//map click

const projects__radius = document.querySelectorAll('.projects__radius');
const projects__floridaBlog = document.querySelector('.projects__florida-blog');
const projects__florida = document.querySelector('.projects__florida');

let flag = true;



if (projects__floridaBlog) {
  projects__floridaBlog.classList.add('open');
  projects__floridaBlog.classList.add('active');
}


for (let i = 0; i < projects__radius.length; i++) {
  const element = projects__radius[i];

  if (element) {
    element.addEventListener('click', () => {
      projects__floridaBlog.classList.remove('active');
      projects__florida.querySelector('.open').classList.remove('open');
      projects__florida.querySelectorAll('.projects__florida-blog')[i].classList.add('open');

      console.log(projects__florida);
    })
  }

}



/*Маска для инпута*/
var telInp = $('input[type="tel"]');

telInp.each(function () {
  $(this).mask("+7 (999) 999-99-99");
});


//якорь
const anchors = document.querySelectorAll('.header__btn');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();

    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};


//анимация заголовка
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});


const map = document.querySelector('#map');

if (map) {
  ymaps.ready(init);
  console.log('true');
} else {
  console.log('false');
}



function init() {
  var myMap = new ymaps.Map("map", {
    // Центр карты, указываем коордианты
    center: [$('#map').data('cor1'), $('#map').data('cor2')],
    // Масштаб, тут все просто
    zoom: 17,
  });

  


  // Наша метка, указываем коордианты
  const myPlacemark = new ymaps.Placemark(
    [$('#map').data('cor1'), $('#map').data('cor2')], 

    {},

    {
      iconLayout: 'default#image',
      // Путь до нашей картинки
      iconImageHref: '../images/marker.svg',
      // Размер по ширине и высоте
      iconImageSize: [56, 68],
      // Смещение левого верхнего угла иконки относительно
      // её «ножки» (точки привязки).
      iconImageOffset: [-35, -35]
    });



    if(body.clientWidth <= 450) {
      myMap.behaviors.disable('drag');
    }


    myMap.behaviors.disable('scrollZoom');

  //Добавление метки на карту
  myMap.geoObjects.add(myPlacemark)


}

