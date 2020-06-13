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
    if (ScrollTop > 200) {
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
    var winTop = $(window).scrollTop();
    var winBottom = winTop + $(window).height();
    var elTop = $el.offsetTop + $offsetPlus;
    var elBottom = elTop + $el.scrollHeight / 4;
    return elBottom <= winBottom /*&& elTop * 1.1 >= winTop*/;
  }

  function slideItems($item) {
    var counter = 0;
    $($item).each(function (index) {
      if (isVisible($item[index], counter)) {
        $item[index].classList.add("__on-place");
        $item[index].classList.remove("__from-bottom");
      } else {
        $item[index].classList.add("__from-bottom");
        $item[index].classList.remove("__on-place");
      }
      counter += 100;
    });
  }

  $(document).scroll(function () {
    slideItems($(".services-item"), ".services-item");
    var y = $(this).scrollTop();

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
