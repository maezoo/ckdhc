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
  const tabLis = document.querySelectorAll('.tab-btn li');
  const tabArrows = document.querySelectorAll('.tab-btn img'); // 이미지 요소 선택
  const contents = document.querySelectorAll('.cont');
  const nextBtn = document.querySelector('.tabSlide-btn-next');
  const prevBtn = document.querySelector('.tabSlide-btn-prev');
  const tabInner = document.querySelector('.tab-inner');

  tabLis.forEach((tab, index) => {
    tab.addEventListener('click', function () {
      // 모든 탭의 활성화 클래스 제거
      tabLis.forEach(t => t.classList.remove('active'));
      tabArrows.forEach(arrow => arrow.classList.remove('show')); // 'show' 클래스 제거

      this.classList.add('active'); // 현재 클릭한 탭에 활성화 클래스 추가
      tabArrows[index].classList.add('show'); // 해당 탭의 이미지에 'show' 클래스 추가

      // 모든 콘텐츠 숨기기
      contents.forEach(content => content.style.display = 'none');
      tabInner.style.display = 'none';

      const tabId = this.getAttribute('data-tab');
      const activeTab = document.getElementById(tabId);
      activeTab.style.display = 'flex';

      if (tabId === 'tab-1') {
        tabInner.style.display = 'block';
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';
      } else {
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'none';
      }
    });
  });

  // 초기 상태 설정
  tabLis[0].classList.add('active');
  tabArrows[0].classList.add('show'); // 첫 번째 이미지에 'show' 클래스 추가
  contents.forEach(content => content.style.display = 'none');
  document.getElementById('tab-1').style.display = 'flex';
  tabInner.style.display = 'block';
  nextBtn.style.display = 'block';
  prevBtn.style.display = 'block';

  // const tabLis = document.querySelectorAll('.tab-btn li');
  // const contents = document.querySelectorAll('.cont');
  // const nextBtn = document.querySelector('.tabSlide-btn-next');
  // const prevBtn = document.querySelector('.tabSlide-btn-prev');
  // const tabInner = document.querySelector('.tab-inner');

  // tabLis.forEach(tab => {
  //   tab.addEventListener('click', function () {
  //     tabLis.forEach(t => t.classList.remove('active'));
  //     this.classList.add('active');


  //     contents.forEach(content => content.style.display = 'none');
  //     tabInner.style.display = 'none';

  //     const tabId = this.getAttribute('data-tab');
  //     const activeTab = document.getElementById(tabId);
  //     activeTab.style.display = 'flex';

  //     if (tabId === 'tab-1') {
  //       tabInner.style.display = 'block';
  //       nextBtn.style.display = 'block';
  //       prevBtn.style.display = 'block';
  //     } else {
  //       nextBtn.style.display = 'none';
  //       prevBtn.style.display = 'none';
  //     }
  //   });
  // });

  // tabLis[0].classList.add('active');
  // contents.forEach(content => content.style.display = 'none');
  // document.getElementById('tab-1').style.display = 'flex';
  // tabInner.style.display = 'block';
  // nextBtn.style.display = 'block';
  // prevBtn.style.display = 'block';

  // =========================
  // 푸터 =====================
  $('.footer .con3 .sitebox a').hover(function () {
    $('.footer .con3 .sitebox #select-site ul').show()

    // $('.footer .con3 .sitebox a').mouseleave(function () {
    // $('.footer .con3 .sitebox #select-site ul').mouseleave('oon')

    //     ({ display: none, })
  })
})


