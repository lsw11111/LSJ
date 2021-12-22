$(document).ready(function(){

$('.show').click(function(){
  $('.box').slideDown()
})
$('.hide').click(function(){
  $('.box').slideUp()
})
$('.toggle').click(function(){
  $('.box').slideToggle()
})
$('.fadein').click(function(){
  $('.box2').fadeIn('fast')
})
$('.fadeout').click(function(){
  $('.box2').fadeOut('slow')
})
$('.fadetoggle').click(function(){
  $('.box2').fadeToggle(2000)
})




})