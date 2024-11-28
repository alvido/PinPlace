// Burger Menu Open //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем бургер-кнопку и навигацию
  let burgerButton = document.getElementById("burgerButton");
  let navigation = document.querySelector(".navigation");
  let links = document.querySelectorAll(".navigation__link");

  // Если бургер-кнопка существует, добавляем обработчик события
  if (burgerButton) {
    burgerButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Остановка всплытия события
      burgerButton.classList.toggle("burger--active"); // Переключаем класс активности бургер-кнопки
      navigation.classList.toggle("navigation--active"); // Переключаем класс активности навигации
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      burgerButton.classList.remove("burger--active");
      navigation.classList.remove("navigation--active");
      console.log("link", link);
    });
  });
});
//

// Fixed header
$(document).ready(function () {
  var header = $(".header"),
    main = $(".main"),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
      header.addClass("fixed");
      main.css("padding-top", headerH); // Добавляем верхний отступ
    } else {
      header.removeClass("fixed");
      main.css("padding-top", 0); // Убираем верхний отступ
    }
  }

});

//

//search
function toggleSearch() {
  const searchOpen = document.querySelector('.search__open');
  const searchForm = document.querySelector('.aws-container');
  searchOpen.classList.toggle('search--close');
  searchForm.classList.toggle('search--active');
}

// Закрытие мини-корзины при клике вне области
document.addEventListener('click', function (event) {
  const searchForm = document.querySelector('.aws-container');
  const searchOpen = document.querySelector('.icon.search__open');
  if (!searchForm.contains(event.target) && !searchOpen.contains(event.target)) {
    searchForm.classList.remove('search--active');
    searchOpen.classList.remove('search--close');
  }
});
//search

//
document.addEventListener("DOMContentLoaded", function () {
  // Находим все элементы меню с подменю
  const menuItems = document.querySelectorAll(".menu-item-has-children");

  // Обрабатываем клик по каждому элементу меню
  menuItems.forEach(item => {
    item.addEventListener("click", function (e) {

      // Убираем класс 'active' у всех элементов
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        menuItems.forEach(el => {
          el.classList.remove("active");
          const openSubmenu = el.querySelector(".sub-menu");
          if (openSubmenu) {
          }
        });

        this.classList.add("active");
      }


      // Находим подменю внутри текущего элемента
      const submenu = this.querySelector(".sub-menu");

      // Если у элемента есть подменю, управляем его видимостью
      if (submenu) {
        // Если подменю открыто, скрываем его
        if (submenu.classList.contains("show")) {
          fadeOut(submenu);
        } else {
          // Скрываем все открытые подменю
          document.querySelectorAll(".sub-menu.show").forEach(openSubmenu => {
            fadeOut(openSubmenu);
          });
          // Показываем текущее подменю
          fadeIn(submenu);
        }

      } else {
        // Если у элемента нет подменю, просто скрываем все открытые подменю
        document.querySelectorAll(".sub-menu.show").forEach(openSubmenu => {
          fadeOut(openSubmenu);
        });
      }
    });
  });

  // Закрытие подменю при клике вне области навигации
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".menu-item-has-children")) {
      // Убираем класс 'active' у всех элементов меню
      menuItems.forEach(item => {
        item.classList.remove("active");
      });
      // Закрываем все подменю
      document.querySelectorAll(".sub-menu.show").forEach(submenu => {
        fadeOut(submenu);
      });
    }
  });

  // Функция для анимации fadeIn
  function fadeIn(element) {
    element.style.display = "flex"; // Или любой другой стиль отображения
    setTimeout(() => {
      element.classList.add("show");
    }, 10);
  }

  // Функция для анимации fadeOut
  function fadeOut(element) {
    element.classList.remove("show");
    setTimeout(() => {
      element.style.display = "none";
    }, 300); // Тайм-аут соответствует длительности анимации
  }
});

//

//swiper
document.addEventListener("DOMContentLoaded", function () {
  // Функция для инициализации слайдера
  function initSwiper(swiperElement) {
    new Swiper(swiperElement, {
      observer: true,
      observeParents: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true, // Сделает скроллбар перетаскиваемым
      },
      spaceBetween: 24,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
        },
        561: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }

  // Инициализация слайдера "customer"
  if (document.querySelector("#product")) {
    new Swiper("#product", {
      observer: true,
      observeParents: true,
      loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".product-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".product-button-next",
        prevEl: ".product-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1.4, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
          centeredSlides: true, // Центрирование текущего слайда
        },
        561: {
          slidesPerView: 2,
          spaceBetween: 10,
          centeredSlides: false, // Центрирование отключаем
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }

  // Инициализация слайдера "reported"
  if (document.querySelector("#reported")) {
    new Swiper("#reported", {
      observer: true,
      observeParents: true,
      loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".reported-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".reported-button-next",
        prevEl: ".reported-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
          centeredSlides: true, // Центрирование текущего слайда
        },
      },
    });
  }

  // Инициализация слайдера "reported"
  if (document.querySelector("#personalization")) {
    new Swiper("#personalization", {
      observer: true,
      observeParents: true,
      // loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".personalization-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".personalization-button-next",
        prevEl: ".personalization-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
        },
        561: {
          slidesPerView: 3, // Один полный слайд и куски по бокам
          spaceBetween: 10, // Расстояние между слайдами
        },
      },
    });
  }

  if (document.querySelector("#gallery_one")) {
    new Swiper("#gallery_one", {
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        reverseDirection: true, // Слайдер движется в обратную сторону
      },
      pagination: {
        el: ".reported-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".reported-button-next",
        prevEl: ".reported-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2, // Один полный слайд и куски по бокам
        },
        560: {
          slidesPerView: 3, // Один полный слайд и куски по бокам
        },
        768: {
          slidesPerView: 4, // Один полный слайд и куски по бокам
        },
        1024: {
          slidesPerView: 5, // Один полный слайд и куски по бокам
        },
        1281: {
          slidesPerView: 7, // Один полный слайд и куски по бокам
        },
      },
    });
  }

  // Нижний слайдер — движение влево
  if (document.querySelector("#gallery_two")) {
    new Swiper("#gallery_two", {
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".reported-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".reported-button-next",
        prevEl: ".reported-button-prev",
      },
      breakpoints: {

        320: {
          slidesPerView: 2, // Один полный слайд и куски по бокам
        },
        560: {
          slidesPerView: 3, // Один полный слайд и куски по бокам
        },
        768: {
          slidesPerView: 4, // Один полный слайд и куски по бокам
        },
        1024: {
          slidesPerView: 5, // Один полный слайд и куски по бокам
        },
        1281: {
          slidesPerView: 7, // Один полный слайд и куски по бокам
        },
      },
    });
  }


  // Инициализация слайдера "reported"
  if (document.querySelector("#explore")) {
    new Swiper("#explore", {
      observer: true,
      observeParents: true,
      loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".explore-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".explore-button-next",
        prevEl: ".explore-button-prev",
      },
      on: {
        slideChangeTransitionStart: function () {
          // Добавляем прозрачность для всех слайдов
          const slides = document.querySelectorAll('#explore .swiper-slide');
          slides.forEach((slide) => {
            // Проверяем активный, следующий и предыдущий слайды
            if (
              slide.classList.contains('swiper-slide-active') || // Активный
              slide.classList.contains('swiper-slide-prev') || // Предыдущий
              slide.classList.contains('swiper-slide-next') // Следующий
            ) {
              slide.style.opacity = 1; // Полностью видимые
            } else {
              slide.style.opacity = 0.5; // Затемненные
            }
          });
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 1.5, // Показываем 8 слайдов
          spaceBetween: 10, // Расстояние между слайдами
          centeredSlides: false, // Центрирование активного слайда
        },
        561: {
          slidesPerView: 2, // Показываем 8 слайдов
          spaceBetween: 10, // Расстояние между слайдами
          centeredSlides: true, // Центрирование активного слайда
        },
        768: {
          slidesPerView: 3, // Показываем 8 слайдов
          spaceBetween: 10, // Расстояние между слайдами
          centeredSlides: true, // Центрирование активного слайда
        },
        1024: {
          slidesPerView: 4, // Показываем 8 слайдов
          spaceBetween: 10, // Расстояние между слайдами
          centeredSlides: true, // Центрирование активного слайда
        },
        1281: {
          slidesPerView: 5, // Показываем 8 слайдов
          spaceBetween: 20, // Расстояние между слайдами
          centeredSlides: true, // Центрирование активного слайда
        },
        1601: {
          slidesPerView: 7, // Показываем 8 слайдов
          spaceBetween: 30, // Расстояние между слайдами
          centeredSlides: true, // Центрирование активного слайда
        },
      },
    });

    // Устанавливаем начальную прозрачность для слайдов при загрузке
    document.querySelectorAll('#explore .swiper-slide').forEach((slide) => {
      if (
        slide.classList.contains('swiper-slide-active') || // Активный
        slide.classList.contains('swiper-slide-prev') || // Предыдущий
        slide.classList.contains('swiper-slide-next') // Следующий
      ) {
        slide.style.opacity = 1; // Полностью видимые
      } else {
        slide.style.opacity = 0.5; // Затемненные
      }
    });
  }



  var swiper = new Swiper(".swiper-thumb", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {

      561: {
        slidesPerView: 5, // Показываем 8 слайдов
        spaceBetween: 14, // Расстояние между слайдами
      },
    },
  });
  var swiper2 = new Swiper(".swipper-gallery", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

});
// swiper

// mark
function updateStars() {
  const count = parseFloat(document.querySelector('.count').innerText); // Получаем значение count
  const stars = document.querySelectorAll('.mark .filled'); // Находим внутренние блоки для заполнения

  stars.forEach((star, index) => {
    if (index < Math.floor(count)) {
      // Полностью закрашенные звёзды
      star.style.width = "100%";
    } else if (index === Math.floor(count)) {
      // Частично закрашенная звезда
      const percentage = (count - Math.floor(count)) * 100;
      star.style.width = `${percentage}%`;
    } else {
      // Пустые звёзды
      star.style.width = "0%";
    }
  });
}

// Вызываем функцию для обновления звёзд
updateStars();
// mark

//faq
// Находим все элементы с классом .faq-question
const faqItems = document.querySelectorAll('.faq__item');

// Добавляем обработчик события на каждый элемент
faqItems.forEach(item => {
  const question = item.querySelector('.faq__question');
  question.addEventListener('click', () => {
    // Закрываем все ответы перед открытием нового
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
      }
    });

    // Переключаем состояние (открыть/закрыть)
    item.classList.toggle('active');
  });
});
//faq


//size selector
// Скрипт для добавления активного класса
const options = document.querySelectorAll('.size-option');
options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
  });
});
//size selector


//color selector
// Логика выбора цвета
const buttonPalette = document.getElementById('color-palette');
const colorPalette = document.querySelector('.color-options');
const colorOptions = document.querySelectorAll('.color-option');
const selectedColorName = document.getElementById('selected-color-name');
const selectedColorCircle = document.getElementById('selected-color-circle');

buttonPalette.addEventListener('click', function () {
  this.classList.toggle('active'); // Работает корректно, так как используется обычная функция
  colorPalette.classList.toggle('show');
});


colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Удаляем класс active со всех опций
    colorOptions.forEach(opt => opt.classList.remove('active'));

    // Добавляем active к выбранной
    option.classList.add('active');

    // Обновляем текст и круг выбранного цвета
    const colorName = option.getAttribute('data-color');
    selectedColorName.textContent = colorName;
    selectedColorCircle.style.backgroundColor = option.style.backgroundColor;
  });
});


//color selector

// personalization
const personalizationOpen = document.getElementById('personalizationButton');
const personalizationClose = document.getElementById('personalizationClose');
const personalizationSelector = document.querySelector('.personalization-selector');
const personalization = document.querySelectorAll('.personalization-option');


personalizationOpen.addEventListener('click', function () {
  personalizationSelector.classList.add('active');
});
personalizationClose.addEventListener('click', function () {
  personalizationSelector.classList.remove('active');
});

personalization.forEach(style => {
  style.addEventListener('click', () => {
    personalization.forEach(opt => opt.classList.remove('active'));
    style.classList.add('active');
  });
});

// personalization