
document.addEventListener('DOMContentLoaded', function() {
//**selectors
 const giftList = document.querySelector(".gift-list")
 ///console.log(giftList)
 const search = document.querySelector("#filter-input")

 let editForm = document.querySelector("#new-gift-form")
 let giftNameInput = document.querySelector("#gift-name-input")
 let giftImageInput = document.querySelector("#gift-image-input")


//calling helper functions
   renderAll(gifts);

//**listeners
    //delete
   giftList.addEventListener("click", function(event){
     //console.log(event);
      if(event.target.dataset.value=== "delete"){
      	//console.log(event)
        event.target.parentNode.remove()
      }
   });
    //search
   search.addEventListener("change", function(event) {
   	//console.log(event.target.value)
      let filteredGift = gifts.filter (function(gift) {
         return gift.name.includes(event.target.value)
      })
      while (giftList.firstChild){
      	giftList.removeChild(giftList.firstChild)
      }
      renderAll(filteredGift)
    });

    //Edit
    //several steps if you click on edit button for each item
    //it prepopulates the form and it grabs the id?ift
    //Then if you click on the form, another event listener pops
    //up and it will grab the info and change that id?
    //
    giftList.addEventListener("click", function(event){
       if(event.target.tagName === "BUTTON") {
         //Step Two
         //Another way to do this is to find the item in the array right away
         //Easier solution because don't have to prepoluate from the event.target
         //can just go the data array

         //a. set a variable equal to the button id
         let editId = parseInt(event.target.id)

         //b use find HOF because filter will return an array
         //then you have to get it outside the function so make an empty object
         let editedGift = {}
         gifts.find(function (gift) {
         	if (gift.id === editId) {
         	  editedGift = gift
          }
         });
         console.log(editForm)
         //debugger won't load global variables, use console.log
          debugger;
          //step 3 set those values equal to the ones in the edit form
                  giftNameInput.value = editedGift.name
                   giftImageInput.value = editedGift.image
          return editedGift;

         //its an html collection at the parentNode level so you have to
         //turn into array with Array.from
         // var elements = Array.from(event.target.parentNode.childNodes)
         //           giftNameInput.value = elements[0].data
         //           giftImageInput.value = elements[1].src
       }
    });

     editForm.addEventListener("submit", function(event){
     	event.preventDefault();
       //debugger;

     	 	gifts.forEach(function(gift){
          if (gift.id === parseInt(event.target.dataset.id)){
            gift.name = event.target.name.value
            gift.image = event.target.image.value
          }
       //above, we find them in the array and change them
        });
        //remove children
       //div.innerHTML = ""
       //or this way below
        while (giftList.firstChild){
      	giftList.removeChild(giftList.firstChild)
      }
       renderAll(gifts);

     });


// renderGift(
//    {
//     id: 1,
//     name: '8 pairs of socks',
//     image: 'https://cdn.shopify.com/s/files/1/1631/8771/products/wnc871-ggr_gumby_gumby_green_1_large.jpg?v=1494450059'
//     }
// 	)



  //**helper functions

  function renderGift(gift){
  	const li = document.createElement("li")
  	li.innerHTML = gift.name
    const div = document.createElement("div")
    //div.dataset.id = gift.id
    const image = document.createElement("img")
    image.src = gift.image
    image.style.width = "50px";
    image.style.height = "50px";



    editButton = document.createElement("button")
    editButton.id = gift.id
    editButton.innerHTML = "edit this gift"

    deleteButton = document.createElement("button")
    deleteButton.innerHTML = "x"
    deleteButton.dataset.value = "delete"

    li.append(image, editButton, deleteButton)
    div.append(li)
  	giftList.append(div)
  }

  function removeGift(gift){
  	li.innerHTML = ""
  	giftList.append(div)
  }

  function renderAll(gifts){
  	return gifts.forEach(function (gift){
  		 renderGift(gift);
    });
  }


 });//end of DOM listener

