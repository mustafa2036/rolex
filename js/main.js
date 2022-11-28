let navbar = document.querySelector(".navbar");
let close = document.querySelector('#close');
let bagDark = document.querySelectorAll('#bag-dark');

window.onscroll = () => {
  scrollY > 10
    ? navbar.style.backgroundColor = '#fff'
    : navbar.style.backgroundColor = 'transparent';
  // (scrollY > 100)?arrowUp.style.opacity = '1':arrowUp.style.opacity = '0';
};

let swiper = new Swiper(".mySwiper", {
  rewind: true,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $(".dark").click(()=> {
    $(".title-white").css('color', '#fff');
    window.onscroll = () => {
      scrollY > 100
        ? navbar.style.backgroundColor = '#1F1F1F'
        : navbar.style.backgroundColor = 'transparent';
    };
    $("section, footer, header, .cart").css('background-color', '#1F1F1F');
    $(".navbar-brand, .nav-link").css("color", '#fff');
    $(".nav-link.active").css("color", '#FFB566');
    $('.dark').css('display', 'none')
    $('.sun').css('display', 'inline-block');
    $(".watch-dark").css('display', 'none');
    $(".watch-sun").css('display', 'inline-block');
    $(".bag-dark").css('display', 'none');
    $(".bag-sun").css('display', 'inline-block');
    $(".boxs.active").css({
      backgroundColor: '#292929',
      color: '#fff',
      borderColor: "#292929",
    })
  });
  $(".sun").click(()=> {
    $(".title-white").css('color', '#1F1F1F');
    $("section, footer, header, .cart").css('background-color', '#fff');
    window.onscroll = () => {
      scrollY > 100
        ? navbar.style.backgroundColor = '#fff'
        : navbar.style.backgroundColor = 'transparent';
    };
    $(".nav-link.active").css("color", '#FFB566');
    $('.dark').css('display', 'inline-block')
    $('.sun').css('display', 'none')
    $(".watch-dark").css('display', 'inline-block');
    $(".watch-sun").css('display', 'none');
    $(".bag-dark").css('display', 'inline-block');
    $(".bag-sun").css('display', 'none');
    $(".boxs.active").css({
      backgroundColor: '#fff',
      color: '#000',
      borderColor: "#e1e1e1",
    })
  });
  $(bagDark).click(()=> {
    $('.cart').css("right",'2%')
  })
  $(close).click(() => {
    $('.cart').css("right",'-100%')
  });
  $(".sk-fading-circle").fadeOut(3500, () => {
    $("#spin").fadeOut(2800, ()=> {
      $("body").css("overflow", 'auto')
    })
  })
});
AOS.init();