// You can add your event handlers here!
function searchHandler(e) {
  let filteredGifts = filterGifts(e.target.value, gifts);
  let giftForm = document.querySelector("#new-gift-form");
  if (filteredGifts.length === 0) {
    clearEditForm()
    showGifts(gifts);
    giftForm.removeEventListener("submit", function () {
      filteredGifts[0].name = document.querySelector("#gift-name-input").value;
      filteredGifts[0].image = document.querySelector("#gift-image-input").value;
    });
  } else {
    showGifts(filteredGifts);
    fillEditForm(filteredGifts[0]);
    giftForm.addEventListener("submit", function () {
      filteredGifts[0].name = document.querySelector("#gift-name-input").value;
      filteredGifts[0].image = document.querySelector("#gift-image-input").value;
      console.log(filteredGifts[0]);
      showGifts(filteredGifts);
    });
  }
}

function clearEditForm() {
  let giftNameInput = document.querySelector("#gift-name-input");
  let giftImageInput = document.querySelector("#gift-image-input");
  giftNameInput.value = "";
  giftImageInput.value = "";
}
function fillEditForm(gift) {
  let giftNameInput = document.querySelector("#gift-name-input");
  let giftImageInput = document.querySelector("#gift-image-input");
  giftNameInput.value = gift.name;
  giftImageInput.value = gift.image;
}


function removeGiftHandler(e) {
  if (e.target.classList.contains("gift-item")) {
    e.target.remove();
  } else if (e.target.parentNode.classList.contains("gift-item")) {
    e.target.parentNode.remove();
  }
}
