document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)

  let giftArea = document.querySelector(".gift-list")
  console.log(giftArea)

  let searchBar = document.querySelector("#filter-input")
  searchBar.addEventListener('input', searchBarHandler)

  showGifts()
})

const showGifts = function(){
  gifts

  let giftArea = document.querySelector(".gift-list")
  gifts.forEach(g => {
    let giftDiv = document.createElement('div')

    let gift = document.createElement('img')
    let giftName = document.createElement('h2')

    gift.setAttribute('src', g.image)
    gift.setAttribute('class', 'ui fluid image')
    giftDiv.append(gift)

    gift.setAttribute('class', 'gift-location')
    gift.className = g.name

    giftName.innerText = g.name
    giftDiv.append(giftName)


    giftArea.append(giftDiv)
  })
}

const searchBarHandler = function (search){
  let term = search.target.value
  let giftArea = document.querySelector(".gift-list")
  giftArea.removeChild
}
