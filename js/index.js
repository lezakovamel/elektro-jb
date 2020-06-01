$(".carousel").carousel({
  interval: 2000,
});

$(".gallery").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: {
    enabled: true,
  },
});

$(document).ready(function () {
  var nav = $("#nav");
  var logoColors = $("#colors-logo");
  var logoWhite = $("#white-logo");
  $(window).scroll(function () {
    var ScrollTop = parseInt($(window).scrollTop());
    console.log(ScrollTop);

    if (ScrollTop > 200) {
      console.log("tu jsem");
      nav.removeClass("__none").addClass("__white").fadeIn;
      logoColors
        .removeClass("__not-displayed-logo")
        .addClass("__displayed-logo");
      logoWhite
        .removeClass("__displayed-logo")
        .addClass("__not-displayed-logo");
    } else if (ScrollTop < 200) {
      nav.removeClass("__white").addClass("__none").fadeIn;
      logoWhite
        .removeClass("__not-displayed-logo")
        .addClass("__displayed-logo");
      logoColors

        .removeClass("__displayed-logo")
        .addClass("__not-displayed-logo");
    }
  });
});
