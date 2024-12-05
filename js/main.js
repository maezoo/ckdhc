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
  const contents = document.querySelectorAll('.cont');
  const nextBtn = document.querySelector('.tabSlide-btn-next');
  const prevBtn = document.querySelector('.tabSlide-btn-prev');
  const tabInner = document.querySelector('.tab-inner');

  tabLis.forEach(tab => {
    tab.addEventListener('click', function () {
      // 모든 탭의 활성화 클래스 제거
      tabLis.forEach(t => t.classList.remove('active'));
      this.classList.add('active'); // 현재 클릭한 탭에 활성화 클래스 추가

      // 모든 콘텐츠 숨기기
      contents.forEach(content => content.style.display = 'none');
      tabInner.style.display = 'none'; // tab-inner 숨기기

      // 클릭한 탭과 연결된 콘텐츠 보여주기
      const tabId = this.getAttribute('data-tab');
      const activeTab = document.getElementById(tabId);
      activeTab.style.display = 'flex';

      // tab-1일 때만 tab-inner, 버튼 보이기
      if (tabId === 'tab-1') {
        tabInner.style.display = 'block'; // tab-1일 때만 tab-inner 보이기
        nextBtn.style.display = 'block'; // tab-1에서 버튼 보이기
        prevBtn.style.display = 'block';
      } else {
        nextBtn.style.display = 'none'; // 다른 탭에서는 버튼 숨기기
        prevBtn.style.display = 'none';
      }
    });
  });

  tabLis[0].classList.add('active'); // 첫 번째 탭 활성화
  contents.forEach(content => content.style.display = 'none'); // 모든 콘텐츠 숨기기
  document.getElementById('tab-1').style.display = 'flex'; // 첫 번째 콘텐츠 보이기
  tabInner.style.display = 'block'; // 첫 번째 탭에서 tab-inner 보이기
  nextBtn.style.display = 'block'; // 첫 번째 탭에서 버튼 보이기
  prevBtn.style.display = 'block';

  // =========================
  // 푸터 =====================
  $('.footer .con3 .sitebox a').hover(function () {
    $('.footer .con3 .sitebox #select-site ul').show()

    // $('.footer .con3 .sitebox a').mouseleave(function () {
    // $('.footer .con3 .sitebox #select-site ul').mouseleave('oon')

    //     ({ display: none, })
  })
})


