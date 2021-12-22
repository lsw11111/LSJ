$(document).ready(function() {
  $('.btn span').click(function() {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
// siblings = 형제요소 탐색해서 클래스 없애줌
  })
})