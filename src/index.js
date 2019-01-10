document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  let giftList = document.querySelector(".gift-list");
  let searchInput = document.querySelector("#filter-input");
  let giftForm = document.querySelector("#new-gift-form");

  showGifts(gifts);
  searchInput.addEventListener("input", searchHandler);
  giftList.addEventListener("click", removeGiftHandler);
  giftForm.addEventListener("submit", e => e.preventDefault());
});


function showGifts(gifts) {
  let giftList = document.querySelector(".gift-list");
  giftList.innerHTML = "";

  gifts.forEach(function (gift) {
    let li = document.createElement("li");
    li.classList.add("gift-item");
    li.innerHTML = `<img src="${gift.image}"/><h2>${gift.name}</h2>`
    giftList.append(li);
  });
}

function filterGifts(searchTerm, gifts) {
  return gifts.filter(gift => (searchTerm === gift.name))
}
