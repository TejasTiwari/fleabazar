jQuery(document).ready(function ($) {

$(function(){
  setInterval(function () {
      moveRight();
  }, 3000);
});

  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;

  $('#slider').css({ width: slideWidth, height: slideHeight });

  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

  $('#slider ul li:last-child').prependTo('#slider ul');

  function moveLeft() {
      $('#slider ul').animate({
          left: + slideWidth
      }, 200, function () {
          $('#slider ul li:last-child').prependTo('#slider ul');
          $('#slider ul').css('left', '');
      });
      console.log('Vorheriges Bild wird angezeigt');
  };

  function moveRight() {
      $('#slider ul').animate({
          left: - slideWidth
      }, 200, function () {
          $('#slider ul li:first-child').appendTo('#slider ul');
          $('#slider ul').css('left', '');
      });
      console.log('Nächstes Bild wird angezeigt');
  };

  $('a.control_prev').click(function () {
      moveLeft();
  });

  $('a.control_next').click(function () {
      moveRight();
  });

});

// var xhttp= new XMLHttpRequest();

// xhttp.open('GET', 'url', true);
// xhttp.setRequestHeader("Content-type","application/json");

// xhttp.onreadystatehange= function(){
//     if(this.readu=yState==4 && this.status==200){
//         var json= JSON.parse(this).;
//     }
// }