$(document).ready(function() {
  
  $('.login button').click(function() {
    var num = $('#id').val()

    if(num === '') {
      alert('나이를 입력하세요')
    } else if(num < 20) {
      alert('미성년입니다')
    } else if(num >= 20) {
      alert('성인입니다')
    } else {
      alert('숫자로 입력하세요')
    }

  })








})