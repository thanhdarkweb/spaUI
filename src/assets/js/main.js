!(function (e) {
  "use strict";
  e(window).on("load", function () {
    e(".preloader").fadeOut();
  }),
    e(".preloader").length > 0 &&
      e(".preloaderCls").each(function () {
        e(this).on("click", function (t) {
          t.preventDefault(), e(".preloader").css("display", "none");
        });
      }),
    e(".mobile-menu-active").vsmobilemenu({
      menuContainer: ".vs-mobile-menu",
      expandScreenWidth: 992,
      menuToggleBtn: ".vs-menu-toggle",
    });
  var t,
    a,
    n,
    s,
    i,
    o,
    l = "";
  function r() {
    let t = e(".main-menu > .menu-item-has-children > ul"),
      a = e(".main-menu .menu-item-has-children > ul > ul");
    t.each(function () {
      e(window).width() > 991 &&
        (e(this).offset().left + e(this).width() > e(window).width()
          ? e(this).css({ left: "auto", right: "100%" })
          : e(this).css({ left: "0", right: "auto" }));
    }),
      a.each(function () {
        e(window).width() > 991 &&
          e(this).offset().left + e(this).width() > e(window).width() &&
          (e(this).css({ left: "auto", right: "100%" }),
          e(this).find(".sub-menu").css({ left: "auto", right: "100%" }));
      });
  }
  (e(window).on("scroll", function () {
    var t, a, n;
    (t = e(".sticky-header")),
      (a = "active"),
      (n = e(window).scrollTop()),
      e(window).scrollTop() > 600
        ? n > l
          ? t.removeClass(a)
          : t.addClass(a)
        : t.removeClass(a),
      (l = n),
      e(this).scrollTop() > 400
        ? e(".scrollToTop").addClass("show")
        : e(".scrollToTop").removeClass("show");
  }),
  e(".scrollToTop").on("click", function (t) {
    return (
      t.preventDefault(), e("html, body").animate({ scrollTop: 0 }, 3e3), !1
    );
  }),
  e(".background-image").length > 0 &&
    e(".background-image").each(function () {
      var t = e(this).attr("data-vs-img");
      e(this).css({ "background-image": "url(" + t + ")" });
    }),
  (t = ".sidemenu-wrapper"),
  (a = ".sideMenuCls"),
  (n = "show"),
  e(".sideMenuToggler").on("click", function (a) {
    a.preventDefault(), e(t).addClass(n), e("body").addClass("overflow-hidden");
  }),
  e(t).on("click", function (a) {
    a.stopPropagation(),
      e(t).removeClass(n),
      e("body").removeClass("overflow-hidden");
  }),
  e(t + " > div").on("click", function (a) {
    a.stopPropagation(),
      e(t).addClass(n),
      e("body").addClass("overflow-hidden");
  }),
  e(a).on("click", function (a) {
    a.preventDefault(),
      a.stopPropagation(),
      e(t).removeClass(n),
      e("body").removeClass("overflow-hidden");
  }),
  (function (t, a, n, s) {
    e(a).on("click", function (a) {
      a.preventDefault(), e(t).addClass(s);
    }),
      e(t).on("click", function (a) {
        a.stopPropagation(), e(t).removeClass(s);
      }),
      e(t)
        .find("form")
        .on("click", function (a) {
          a.stopPropagation(), e(t).addClass(s);
        }),
      e(n).on("click", function (a) {
        a.preventDefault(), a.stopPropagation(), e(t).removeClass(s);
      });
  })(".popup-search-box", ".searchBoxTggler", ".searchClose", "show"),
  e(".counter").counterUp({ delay: 10, time: 1e3 }),
  e(".vs-hero-carousel").each(function () {
    var t = e(this),
      a = t.data("container"),
      n = t.data("responsiveunder"),
      s = t.data("height"),
      i = t.data("loop"),
      o = t.data("navbuttons"),
      l = t.data("allowfullscreen"),
      r = t.data("startinviewport"),
      c = t.data("navstartstop"),
      d = t.data("hoverbottomnav"),
      p = t.data("hoverprevnext"),
      u = t.data("navprevnext"),
      h = t.data("pauseonhover"),
      v = t.data("autostart"),
      f = t.data("thumbnailnavigation"),
      m = t.data("slidertype"),
      g = t.data("maxratio"),
      w = t.data("showcircletimer");
    t.layerSlider({
      maxRatio: g || 1,
      type: m || "responsive",
      startInViewport: r || !1,
      allowFullscreen: l || !1,
      pauseOnHover: !!h,
      navPrevNext: !!u,
      hoverPrevNext: !!p,
      hoverBottomNav: !!d,
      navStartStop: !!c,
      navButtons: !!o,
      loop: !i,
      autostart: !!v,
      height: s || 980,
      responsiveUnder: n || 1920,
      layersContainer: a || 1920,
      showCircleTimer: !!w,
      skinsPath: "layerslider/skins/",
      thumbnailNavigation: !f,
    });
  }),
  e("select").length > 0 &&
    (e("select").niceSelect(),
    e("select").parent().addClass("select-box-area")),
  e(".dateTime-pick").datetimepicker({
    timepicker: !0,
    datepicker: !0,
    format: "y-m-d H:i",
    hours12: !1,
    step: 30,
  }),
  e(".date-pick").datetimepicker({
    timepicker: !1,
    datepicker: !0,
    format: "m-d-y",
    step: 10,
  }),
  e(".time-pick").datetimepicker({
    datepicker: !1,
    timepicker: !0,
    format: "H:i",
    hours12: !1,
    step: 10,
  }),
  e(".popup-image").magnificPopup({ type: "image", gallery: { enabled: !0 } }),
  e(".popup-video").magnificPopup({ type: "iframe" }),
  e(".bar-progress .progress-value").each(function () {
    var t = e(this).attr("data-value");
    e(this).css("width", t + "%");
  }),
  r(),
  e(window).on("resize", function () {
    r();
  }),
  e("#buyerShipAnother").on("click", function () {
    e(".vs-billing-differentAddress").toggle();
  }),
  e(".quantity-plus").each(function () {
    e(this).on("click", function () {
      var t = e(this).siblings(".qty-input"),
        a = parseInt(t.val());
      isNaN(a) || t.val(a + 1);
    });
  }),
  e(".quantity-minus").each(function () {
    e(this).on("click", function () {
      var t = e(this).siblings(".qty-input"),
        a = parseInt(t.val());
      !isNaN(a) && a > 1 && t.val(a - 1);
    });
  }),
  e(".vs-rating-input").length > 0 &&
    e(".vs-rating-input").each(function () {
      e(this)
        .find("span")
        .on("click", function () {
          e(".vs-rating-input span").addClass("active"),
            e(this).nextAll("span").removeClass("active");
        });
    }),
  e((s = ".onepage-nav, .main-menu, .vs-mobile-menu")).length > 0 &&
    e(s).each(function () {
      e(this)
        .find("a")
        .each(function () {
          e(this).on("click", function () {
            var t = e(this.getAttribute("href"));
            t.length &&
              (event.preventDefault(),
              e("html, body")
                .stop()
                .animate({ scrollTop: t.offset().top - 10 }, 1e3));
          });
        });
    }),
  e(".vs-btn").length > 0 &&
    e(".vs-btn").each(function () {
      e(this)
        .contents()
        .filter(function () {
          return 1 !== this.nodeType;
        })
        .wrap('<span className="vs-btn-text"></span>'),
        e(this).find("i").wrap('<span className="vs-btn-icon" />');
      var t = e(this).html();
      e(this).html(""),
        e(this).prepend(
          '<span className="vs-btn-shape"></span><span className="vs-btn-shape"></span><span className="vs-btn-shape"></span> <span className="vs-btn-shape"></span>' +
            t
        );
    }),
  e(".vs-progress .progress-value").each(function () {
    var t = e(this).attr("data-valuenow");
    e(this).css("width", t + "%");
  }),
  e("#slider-range").slider({
    range: !0,
    min: 40,
    max: 600,
    values: [60, 570],
    slide: function (t, a) {
      e("#amount").val("$" + a.values[0] + " - $" + a.values[1]);
    },
  }),
  e("#amount").val(
    "$" +
      e("#slider-range").slider("values", 0) +
      " - $" +
      e("#slider-range").slider("values", 1)
  ),
  new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: !0,
    live: !0,
    resetAnimation: !1,
  }).init(),
  e(".vs-setting-plate").length) &&
    (e(".vs-setting-plate .color-btn").each(function () {
      (o = e(this).attr("data-color")),
        e(this).css({ "background-color": o }),
        e(this).on("click", function () {
          (i = e(this).data("url")), e("#themeColor").attr("href", i);
        });
    }),
    e(".plateToggle").on("click", function (t) {
      return t.preventDefault(), e(".vs-setting-plate").toggleClass("open"), !1;
    }));
})(jQuery);
