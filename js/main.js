// ==============================
// hamburgerPop =================

$(document).ready(function () {
  $('.hamburger').click(function () {
    $('.lifestyle .btn').addClass('on')
    $('.lifestyle .btnbox').addClass('on')
    $('.hamburger').animate({
      opacity: 0,
    }, 1000)
  })

  $(window).scroll(function () {
    $('.lifestyle .btn').removeClass('on')
    $('.lifestyle .btnbox').removeClass('on')

    //조건(pagestart의 떨어진 거리보다 윈도우 스크롤한 양이 같거나 크면)
    if ($(this).scrollTop() > 700) {
      $('.lifestyle .hamburger').fadeIn()
    } else {
      $('.lifestyle .hamburger').fadeOut()
    }
  })



  $('.btn .xxx').click(function (e) {
    e.preventDefault()
    $('.lifestyle .btn').removeClass('on')
    $('.lifestyle .btnbox').removeClass('on')
    $('.hamburger').animate({
      opacity: 1,
    }, 1000)
  })

  // ==============================
  // ==============================

  $(".blue-imgs").bxSlider({
    mode: "horizontal",
    pager: false,
    controls: false,
    auto: true,
    speeSe: 500,
    // speed: 500,
    // slideWidth: 701,
    // slideWidth: 715,
    // slideMargin: 0,
    // maxSlides: 1,
    // minSlides: 1,
    // moveSlides: 1,
    infinitelLoop: true,
  })


  $(".slider").bxSlider({
    mode: "horizontal",
    pager: false, //'true'가 보이는 기본값 
    controls: true,
    slideWidth: 337,
    slideMargin: 30,
    maxSlides: 3,
    minSlides: 1,
    moveSlides: 1,
  })

  // ===============================
  // banner===============================

  var banSwiper = new Swiper(".banSwiper", {
    loop: true,
    centeredSlides: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    slidesPerView: 7
  });

  // ===============================
  // ===============================
  var tabSwiper = new Swiper(".tabSwiper", {
    navigation: {
      nextEl: ".tabSlide-btn-next",
      prevEl: ".tabSlide-btn-prev",
    },
    loop: true, // 슬라이드 반복
    slidesPerView: 'auto', // 슬라이드 너비를 자동으로 설정
    spaceBetween: 30, // 슬라이드 간 간격
    keyboard: true, // 키보드 네비게이션 활성화
    direction: "horizontal", // 슬라이드 방향 설정 (가로)
  });

  // ===============================
  // product slide =================

  // 모든 탭 버튼과 콘텐츠를 선택
  const tabLis = document.querySelectorAll('.tab-btn li');
  const contents = document.querySelectorAll('.cont');

  tabLis.forEach(tab => {
    tab.addEventListener('click', function () {
      tabLis.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      contents.forEach(content => content.style.display = 'none');

      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).style.display = 'flex';
    });
  });

  tabLis[0].classList.add('active');
  contents.forEach(content => content.style.display = 'none');
  document.getElementById('tab-1').style.display = 'flex';

  // =========================
  // 푸터 =====================
  $('.footer .con3 .sitebox a').hover(function () {
    $('.footer .con3 .sitebox #select-site ul').show()

    // $('.footer .con3 .sitebox a').mouseleave(function () {
    // $('.footer .con3 .sitebox #select-site ul').mouseleave('oon')

    //     ({ display: none, })
  })
})


