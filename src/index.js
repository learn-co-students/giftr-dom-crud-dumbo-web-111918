

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')
  console.table(gifts)


  let giftArea = document.querySelector(".gift-list")
  console.log(giftArea)

  let searchBar = document.querySelector("#filter-input")
  searchBar.addEventListener('input', searchBarHandler)

  let noGift = document.querySelector('#no-gifts')
  noGift.style.display = 'none'

  let giftForm = document.querySelector('#new-gift-form')
  giftForm.addEventListener('submit', newFormHandler)


  gifts.forEach(g => {
    let giftDiv = document.createElement('div')
    giftDiv.setAttribute('id', g.name)
    giftDiv.setAttribute('class', 'ui fluid image')

    let giftName = document.createElement('h2')
    giftName.innerText = g.name
    giftName.setAttribute('class', 'ui top center aligned attached header')


    let gift = document.createElement('img')
    gift.setAttribute('src', g.image)
    gift.setAttribute('class', 'gift-location attached segment')

    giftDiv.append(giftName)
    giftDiv.append(gift)
    giftArea.append(giftDiv)
  })
})

const newFormHandler = function (e) {
  e.preventDefault()
  console.log(e)

  gName = e.target[0].value
  gImg= e.target[1].value

  let giftArea = document.querySelector(".gift-list")

  let giftDiv = document.createElement('div')
  giftDiv.setAttribute('id', gName)
  giftDiv.setAttribute('class', 'ui fluid image')

  let giftName = document.createElement('h2')
  giftName.innerText = gName
  giftName.setAttribute('class', 'ui top center aligned attached header')

  let gift = document.createElement('img')
  gift.setAttribute('src', gImg)
  gift.setAttribute('class', 'gift-location attached segment')

  giftDiv.append(giftName)
  giftDiv.append(gift)
  giftArea.append(giftDiv)
}



const showGifts = function (search = undefined) {
  if (search) {
    empty = 0
    for (let value of gifts) {
      if (!value.name.includes(search)) {
        let giftDiv = document.getElementById(value.name)
        giftDiv.style.display = "none"
        empty++
      }
    }
    if (empty > 3) {
      let noGift = document.querySelector('#no-gifts')
      noGift.style.display = 'block'
    }

  } else {
    let noGift = document.querySelector('#no-gifts')
    noGift.style.display = 'none'
    for (let value of gifts) {
      let giftDiv = document.getElementById(value.name)
      giftDiv.style.display = "block"
    }
  }
}

const searchBarHandler = function (e) {
  let term = e.target.value
  showGifts(term)
}
