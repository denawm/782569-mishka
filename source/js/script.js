var main_nav = document.querySelector(".main-nav");
var main_toggle = document.querySelector(".main-nav__toggle");
var overlay = document.querySelector(".modal-overlay");
var order_btn = document.querySelector(".js_order");
var popup_basket = document.querySelector(".modal-basket");

main_nav.classList.remove("main-nav--nojs");

main_toggle.addEventListener("click", function() {
  if (main_nav.classList.contains("main-nav--closed")) {
    main_nav.classList.remove("main-nav--closed");
    main_nav.classList.add("main-nav--opened");
  } else {
    main_nav.classList.add("main-nav--closed");
    main_nav.classList.remove("main-nav--opened");
  }
});

order_btn.addEventListener("click", function(evt){
  evt.preventDefault();
  popup_basket.classList.add("modal-show");
  overlay.classList.add("overlay-show");
});

overlay.addEventListener("click", function(){
  overlay.classList.remove("overlay-show");
  popup_basket.classList.remove("modal-show");
});
