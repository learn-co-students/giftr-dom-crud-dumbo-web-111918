// - A user should be able to see all of the gift data on initial page load
//   - A user should be able to search for and filter particular gifts with names that _include_ a particular search query.
//   - A user should be able to delete a particular gift
//   - A user (any user, don't worry about authorization) should be able to edit a gift's details




document.addEventListener('DOMContentLoaded', () => {
	//pause, run DOM content, load it, then run the functions
  console.log('DOM has been fully loaded')
  console.table(gifts);
  getGifts(gifts);
  addListener();

})



  function getGifts(gifts){
  	let ul = document.querySelector(".gift-list");
     //why wasn't ul available in the global scope?
    for (let i = 0; i < gifts.length; i++){
    	 let gift = gifts[i];
       let giftLi = document.createElement("li");
       giftLi.innerText = gift.name;
       ul.append(giftLi);

       let img = document.createElement('img');
       img.src = gift.image;
       img.style.width = "100px";
       img.style.height = "100px";
       giftLi.append(img);

       let delButton = document.createElement("BUTTON");
       delButton.innerHTML = "x";
       delButton.id = "delete";
       giftLi.append(delButton);
    }

 };

    function deleteItem(event) {
      //click on button and get this event
      //console.log(event);
      //if they hit the button
      console.log(event);
       if (event.target.id === "delete") {
           event.target.parentNode.remove();
       }

    }

   function addListener(){
   	 let ulParent = document.querySelector(".gift-list");
     ulParent.addEventListener("click", deleteItem);
  }
 // //let search = document.getElementById("search");
 //let formInput = document.getElementById("gift-name-input").value;


  //button.addEventListener("click", someFunc);
  //
  // function deleteGift() {

  // }

