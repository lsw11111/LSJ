$(document).ready(function() {
  // 스크롤시 다운로드창
  $(window).scroll(function() {
    if($(window).scrollTop() > 500) {
      $('header .download').addClass('active')
    } else {
      $('header .download').removeClass('active')
    }
  })
  // 사이트맵 어코디언
  $('.item-title').click(function() {
    // $('.item-content').slideUp()
    // $(this).next().slideDown()

    $(this).next().slideDown()
    $(this).parent().siblings().children('.item-content').slideUp()
    $(this).addClass('active')
    $(this).parent().siblings().children('.item-title').removeClass('active')

    // $(this).next().slideToggle()
  })









})