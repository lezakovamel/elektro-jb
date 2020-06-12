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
  function isVisible($el, $offsetPlus) {
    console.log("element" + $el.offset().top);
    var winTop = $(window).scrollTop();
    var winBottom = winTop + $(window).height();
    var elTop = $el.offset().top + $offsetPlus;
    var elBottom = elTop + $el.height() / 4;
    return elBottom <= winBottom && elTop * 1.1 >= winTop;
  }

  function slideItems($item, $class) {
    var counter = 0;
    $($item).each(function (index) {
      console.log("services index" + $item + index);

      /*if (isVisible($($class + ":nth-child(" + index + ")"), counter)) {
        console.log("counter: " + counter);
        $($class + ":nth-child(" + index + 1 + ")")
          .addClass("__on-place")
          .removeClass("__from-bottom");
      } else {
        $($class + ":nth-child(" + index + ")")
          .addClass("__from-bottom")
          .removeClass("__on-place");
      }*/
      counter += 100;
      console.log("counter: " + counter);
    });
  }

  $(document).scroll(function () {
    /*slideItems($(".services-item"), ".services-item");*/
    var y = $(this).scrollTop();
    /*if (y > 2500) {
      $(".services-item").addClass("__on-place").removeClass("__from-bottom");
    } else {
      $(".services-item").addClass("__from-bottom").removeClass("__on-place");
    }*/
    console.log("is visible" + $(".services-wrapper").offset().top);
    if (isVisible($(".services-item:first-child"), 0)) {
      $(".services-item:first-child")
        .addClass("__on-place")
        .removeClass("__from-bottom");
    } else {
      $(".services-item:nth-child(1)")
        .addClass("__from-bottom")
        .removeClass("__on-place");
    }
    if (isVisible($(".services-item:nth-child(2)"), 200)) {
      $(".services-item:nth-child(2)")
        .addClass("__on-place")
        .removeClass("__from-bottom");
    } else {
      $(".services-item:nth-child(2)")
        .addClass("__from-bottom")
        .removeClass("__on-place");
    }
    if (isVisible($(".services-item:nth-child(3)"), 300)) {
      $(".services-item:nth-child(3)")
        .addClass("__on-place")
        .removeClass("__from-bottom");
    } else {
      $(".services-item:nth-child(3)")
        .addClass("__from-bottom")
        .removeClass("__on-place");
    }
    /*
    - - 
    */
    if (y > 750) {
      $(".text").addClass("__on-place").removeClass("__from-left");
    } else {
      $(".text").addClass("__from-left").removeClass("__on-place");
    }
    if (y > 500) {
      $(".about-pic").addClass("__on-place").removeClass("__from-right");
    } else {
      $(".about-pic").addClass("__from-right").removeClass("__on-place");
    }
    if (y > 1400) {
      $(".text").addClass("__from-left").removeClass("__on-place");

      $(".about-pic").addClass("__from-right").removeClass("__on-place");
    }

    /*if (y > 700) {
      $(".about-pic").fadeIn();
    } else {
      $(".about-pic").fadeOut();
    }*/
  });

  /*var bulp = $(".cls-1");*/
});
