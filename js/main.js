// hamburgerPop==========================
// ======================================

$(document).ready(function () {
  // scroll: sqa 버튼 보이기/숨기기, 팝업 닫기 =============
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.sqa-wrapper').fadeIn();
    } else {
      $('.sqa-wrapper').fadeOut();
    }

    // 팝업 close: scroll ================
    if ($('.hamburgerPop').hasClass('show')) {
      $('.hamburgerPop').removeClass('show');
      $('.sqa-wrapper').animate({
        opacity: 1,
      }, 500);
    }
  });

  // 팝업 close: click X  ================
  $('.close-x').click(function (e) {
    e.preventDefault();
    $('.hamburgerPop').removeClass('show');
    $('.sqa-wrapper').animate({
      opacity: 1,
    }, 500);
  });

  // 팝업 open ==========================
  $('.sqa-btn').click(function () {
    $('.hamburgerPop').addClass('show');
    $('.sqa-wrapper').animate({
      opacity: 0,
    }, 500);
  });
});

// ==============================
// visual swiper =================
var visualSwiper = new Swiper(".visualSwiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  loop: true,
});

// ==============================
// bxslider =====================

$(".slider").bxSlider({
  mode: "horizontal",
  pager: false,
  controls: true,
  slideWidth: 337,
  slideMargin: 30,
  maxSlides: 3,
  minSlides: 1,
  moveSlides: 1,
})

// ===============================
// banner ========================
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
// product tab-1 swiper ============
var tabSwiper = new Swiper(".tabSwiper", {
  navigation: {
    nextEl: ".tabSlide-btn-next",
    prevEl: ".tabSlide-btn-prev",
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  keyboard: true,
  direction: "horizontal",
});

// ===============================
// product slide =================
const tabLis = document.querySelectorAll('.tab-btn li');
const tabArrows = document.querySelectorAll('.tab-btn img');
const contents = document.querySelectorAll('.cont');
const nextBtn = document.querySelector('.tabSlide-btn-next');
const prevBtn = document.querySelector('.tabSlide-btn-prev');
const tabInner = document.querySelector('.tab-inner');

tabLis.forEach((tab, index) => {
  tab.addEventListener('click', function () {
    tabLis.forEach(t => t.classList.remove('active'));
    tabArrows.forEach(arrow => arrow.classList.remove('show'));

    this.classList.add('active');
    tabArrows[index].classList.add('show');

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

tabLis[0].classList.add('active');
tabArrows[0].classList.add('show');
contents.forEach(content => content.style.display = 'none');
document.getElementById('tab-1').style.display = 'flex';
tabInner.style.display = 'block';
nextBtn.style.display = 'block';
prevBtn.style.display = 'block';

// ====================================
// 푸터 family site =====================
const siteCase = document.querySelector('.sitecase');
const selectSite = document.querySelector('.select-site');

siteCase.addEventListener('mouseenter', () => {
  selectSite.classList.add('visible');
});

siteCase.addEventListener('mouseleave', () => {
  selectSite.classList.remove('visible');
});
