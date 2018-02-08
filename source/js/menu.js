var mainNav = document.querySelector(".main-nav");
var userNav = document.querySelector(".user-nav");
var navBtn = document.querySelector(".page-header__nav-btn");

mainNav.classList.remove("main-nav--nojs");
userNav.classList.remove("user-nav--nojs");
navBtn.classList.remove("page-header__nav-btn--nojs");

// Возможно, это не лучшее решение... Но в 2:57 ночи придумать что-то лучше было сложно :)
mainNav.classList.add("main-nav--closed");
userNav.classList.add("user-nav--closed");
navBtn.classList.add("page-header__nav-btn--closed");

if(navBtn) {
  navBtn.addEventListener("click", function() {
    if(mainNav.classList.contains("main-nav--closed") ||
    userNav.classList.contains("user-nav--closed") ||
    navBtn.classList.remove("page-header__nav-btn--closed")) {
      mainNav.classList.remove("main-nav--closed");
      userNav.classList.remove("user-nav--closed");
      navBtn.classList.remove("page-header__nav-btn--closed");
    }
    else {
      mainNav.classList.add("main-nav--closed");
      userNav.classList.add("user-nav--closed");
      navBtn.classList.add("page-header__nav-btn--closed");
    }
  });
}
