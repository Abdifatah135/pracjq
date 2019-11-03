$(document).ready(function() {
  $('.para001').hide();
    $('.para002').hide();
    $('.para003').hide();

  $(".image001").click(function() {
    $(".image001").hide(1200);
    $(".para001").toggle(1200);
    $(".para001").show(1200);
  });
  $(".para001").click(function() {
    $(".para001").hide(1200);
    $(".image001").toggle(1200);
    $(".image001").show(1200);
  });

  $(".image002").click(function() {
    $(".image002").hide(1200);
    $(".para002").toggle(1200);
    $(".para002").show(1200);
  });
  $(".para002").click(function() {
    $(".para002").hide(1200);
    $(".image002").toggle(1200);
    $(".image002").show(1200);
  });
  $(".image003").click(function() {
    $(".image003").hide(1200);
    $(".para003").toggle(1200);
    $(".para003").show(1200);
  });
  $(".para003").click(function() {
    $(".para003").hide(1200);
    $(".image003").toggle(1200);
    $(".image003").show(1200);
  });
});


              