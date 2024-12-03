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


  $('.product .con2 ul li').click(function (e) {
    e.preventDefault()
    $('.product .con2 ul li a').removeClass('on')
    $(this).find('a').addClass('on')

    let idx = $(this).index()
    $('.tabcontent > *').hide()
    $('.tabcontent > *').eq(idx).show()
  })
  $('.product .con2 ul li').eq(0).trigger('click')





  $('.footer .con3 .sitebox a').hover(function () {
    $('.footer .con3 .sitebox #select-site ul').show()

    // $('.footer .con3 .sitebox a').mouseleave(function () {
    // $('.footer .con3 .sitebox #select-site ul').mouseleave('oon')

    //     ({ display: none, })
  })
})


