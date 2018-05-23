var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-popup-map");
if ( mapLink && mapPopup ) {
var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-popup-map-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-popup-map-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-popup-map-show")) {
        mapPopup.classList.remove("modal-popup-map-show");
      }
    }
  });
}

var contactsLink = document.querySelector(".btn-contacts");
var contactsPopup = document.querySelector(".modal-write-us");
if ( contactsLink && contactsPopup ) {
var contactsClose = contactsPopup.querySelector(".modal-close");
var contactsName = contactsPopup.querySelector("[name=name]");
var contactEmail = contactsPopup.querySelector("[name=email]");
var contactReview = contactsPopup.querySelector("[name=review]");
var contactForm = contactsPopup.querySelector(".write-us");

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-write-us-show");

});

contactsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-write-us-show");
  contactsPopup.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactsName.value || !contactEmail.value || !contactReview.value) {
    evt.preventDefault();
    contactsPopup.classList.remove("modal-write-us-error");
    contactsPopup.offsetWidth = contactsPopup.offsetWidth;
    contactsPopup.classList.add("modal-write-us-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactsPopup.classList.contains("modal-write-us-show")) {
      contactsPopup.classList.remove("modal-write-us-show");
      contactsPopup.classList.remove("modal-error");
    }
  }
});

}


var basketLink = document.querySelectorAll(".catalog .buy");
var basketPopup = document.querySelector(".inner-page .modal-popup-basket");
if ( basketLink && basketPopup ) {
  var basketClose = basketPopup.querySelector(".modal-close");
  var basketOutput= document.querySelector(".btn-basket-white");

  for (var i = 0; i < basketLink.length; i++) {
    basketLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      basketPopup.classList.add("modal-popup-basket-show");
    });
  }

  basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-popup-basket-show");
  });


  basketOutput.addEventListener ("click", function(evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-popup-basket-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (basketPopup.classList.contains("modal-popup-map-show")) {
        basketPopup.remove("modal-popup-map-show");
      }
    }
  });
}


