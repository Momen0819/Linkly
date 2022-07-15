// Language Change Step 1
let selectedLang = sessionStorage.getItem("lang") || "en";
// Language Change Step 2
document.querySelector("html").dir = selectedLang === "en" ? "ltr" : "rtl";

$(function () {
  "use strict";

  // Language Change Step 3
  $(".change-lang").each(function () {
    selectedLang === "en" ? $(this).text("العربية") : $(this).text("English");
    $(this).on("click", function (e) {
      e.preventDefault();
      if (selectedLang === "en") {
        sessionStorage.setItem("lang", "ar");
        location.reload();
      } else {
        sessionStorage.setItem("lang", "en");
        location.reload();
      }
    });
  });

  // Fixed Header on Scroll
  const Header = $("#fixedHeader");

  if (Header.length) {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > Header.innerHeight()) {
        if (!Header.hasClass("fixed")) {
          Header.addClass("fixed");
        }
      } else {
        if (Header.hasClass("fixed")) {
          Header.removeClass("fixed");
        }
      }
    });
  }

  // Clear Search Button
  const searchField = $("#navSearch"),
    clearSearchBtn = $("#clearSearch");
  // Show / Hide Clear Button
  searchField.on("keyup", function () {
    if ($(this).val()) {
      !clearSearchBtn.hasClass("show") && clearSearchBtn.addClass("show");
    } else {
      clearSearchBtn.hasClass("show") && clearSearchBtn.removeClass("show");
    }
  });
  // Click on Clear Button
  clearSearchBtn.on("click", function (e) {
    e.preventDefault();
    searchField.val("");
  });
  // Show Mobile Search
  $(".mobile-search, .search-return").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".search-form").toggleClass("show");
  });

  // Go To Top Action
  const scrollToTopButton = $("#goTop");

  scrollToTopButton.on("click", function (e) {
    e.preventDefault();

    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  // Toggle Go To Top Button on Window Scroll
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > $(this).height()) {
      !scrollToTopButton.hasClass("show") & scrollToTopButton.addClass("show");
    } else {
      scrollToTopButton.hasClass("show") &&
        scrollToTopButton.removeClass("show");
    }
  });

  const commonCarouselOptions = {
    rtl: document.querySelector("html").dir === "rtl",
    lazyLoad: true,
    lazyLoadEager: 1,
    navText: [
      `<i class='arrow_left flip icon icon-md'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 447.243 447.243" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M420.361,192.229c-1.83-0.297-3.682-0.434-5.535-0.41H99.305l6.88-3.2c6.725-3.183,12.843-7.515,18.08-12.8l88.48-88.48    c11.653-11.124,13.611-29.019,4.64-42.4c-10.441-14.259-30.464-17.355-44.724-6.914c-1.152,0.844-2.247,1.764-3.276,2.754    l-160,160C-3.119,213.269-3.13,233.53,9.36,246.034c0.008,0.008,0.017,0.017,0.025,0.025l160,160    c12.514,12.479,32.775,12.451,45.255-0.063c0.982-0.985,1.899-2.033,2.745-3.137c8.971-13.381,7.013-31.276-4.64-42.4    l-88.32-88.64c-4.695-4.7-10.093-8.641-16-11.68l-9.6-4.32h314.24c16.347,0.607,30.689-10.812,33.76-26.88    C449.654,211.494,437.806,195.059,420.361,192.229z" fill="currentColor" data-original="#000000"/></g></g><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/></g></svg></i>`,
      `<i class='arrow_right flip icon icon-md'><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136    c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002    v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864    c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872    l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z" fill="currentColor" data-original="#000000"/></g></g><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/><g xmlns="http://www.w3.org/2000/svg"/></g></svg></i>`,
    ],
  };

  // Banner Carousel
  $("[data-owl='banner']").owlCarousel({
    ...commonCarouselOptions,
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      992: {
        nav: true,
      },
    },
  });

  // Best Seller Carousel
  $("[data-owl='best-seller'], [data-owl='offers']").owlCarousel({
    ...commonCarouselOptions,
    items: 1,
    nav: true,
    dots: false,
    stagePadding: 50,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    margin: 20,
    responsive: {
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });

  // Add To Cart Button
  $(".add-to-cart").on("click", function (e) {
    e.preventDefault();

    $(this).parents(".product-actions").toggleClass("added");
    $("#proceedToCheckoutTrigger").click();
  });

  // Remove From Cart Button
  $(".remove-from-cart").on("click", function (e) {
    e.preventDefault();

    $(this).parents(".product-actions").toggleClass("added");
    $("#removeFromCartTrigger").click();
  });

  // Lazy Load Images
  $(".lazy").lazy();
});
