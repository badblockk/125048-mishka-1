var modalOverlay = document.querySelector(".overlay");
var modalCart = document.querySelector(".modal-cart");
var modalNoScroll = document.querySelector("body");

var orderLinkItem = document.querySelector(".featured-item__to-order");
var orderLinkVideo = document.querySelector(".video__to-order");
var orderCart = document.querySelectorAll(".catalog_item__add-to-cart");

function showModal(node) {
  node.addEventListener("click", function(e) {
    e.preventDefault();
    modalNoScroll.classList.add("no-scroll");
    modalOverlay.classList.add("overlay--show");
  });
}

if (orderCart) {
  Array.prototype.forEach.call(orderCart, function(elem) {
    showModal(elem);
  });
}

if (orderLinkItem) {
  showModal(orderLinkItem);
}

if (orderLinkVideo) {
  showModal(orderLinkVideo);
}

if(modalOverlay && modalCart) {
  modalCart.addEventListener("click", function(e) {
      e.stopPropagation();
  })
  modalOverlay.addEventListener("click", function(e) {
    e.preventDefault();
    modalNoScroll.classList.remove("no-scroll");
    modalOverlay.classList.remove("overlay--show");
  });
}

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 27) {
    if (modalOverlay.classList.contains("overlay--show") || modalNoScroll.classList.contains("no-scroll")) {
      modalNoScroll.classList.remove("no-scroll");
      modalOverlay.classList.remove("overlay--show");
    }
  }
});
