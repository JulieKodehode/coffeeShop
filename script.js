function addPopularItem(name, price, imgUrl) {
	// HENT ELLER LAG
	const itemCard = document.createElement("div");
	// MODIFISER
	itemCard.innerHTML = `
      <div class="item-box">
         <figure>
            <img style="max-width: 300px; max-height: 300px;" src="${imgUrl}" alt="coffee" />
            <figcaption>
               <h3>${name}</h3>
               <h3>${price}</h3>
            </figcaption>
            <div>
               <div>
                  <p>Hot</p>
                  <p>Cool</p>
               </div>
               <div>
                  <a href="#"></a>
               </div>
            </div>
         </figure>
      </div>
   `;
	// SEND TIL DOM
	const itemContainer = document.querySelector(".itemContainer");
	itemContainer.appendChild(itemCard);
}
addPopularItem("Julies Cold Brew", "100 K", "./coffee.png");
addPopularItem("Totally normal coffee", "1 K", "./coffee.png");
addPopularItem("Yesterdays coffee", "2 K", "./coffee.png");

//
// NEXT
//

function addServiceItem(imageUrl, title, description) {
	// Create a new div element with the class "s-item"
	const serviceItemDiv = document.createElement("div");
	serviceItemDiv.className = "s-item";

	// Use template literals to create the service item structure
	serviceItemDiv.innerHTML = `
        <div>
            <img style="max-width: 300px; max-height: 300px;" src="${imageUrl}" alt="${title}" />
        </div>
        <h4>${title}</h4>
        <p>${description}</p>
    `;

	// Get the element with the class "services-items"
	const servicesItemsContainer = document.querySelector(".itemContainer");

	// Append the created service item to the "services-items" container
	servicesItemsContainer.appendChild(serviceItemDiv);
}

// Example usage
addServiceItem("./coffeeCup.png", "Choose A Drink", "There are a few or more options ;)");

//
// NEXT
//

function addReviewItem(imageUrl, reviewerName, reviewMessage) {
	// Create a new div element with the class "rivew"
	const reviewItemDiv = document.createElement("div");
	reviewItemDiv.className = "rivew";

	// Use template literals to create the review item structure
	reviewItemDiv.innerHTML = `
        <img style="max-width: 300px; max-height: 300px;" src="${imageUrl}" alt="" />
        <div class="rev-msg">
            <h4>${reviewerName}</h4>
            <p>${reviewMessage}</p>
        </div>
    `;

	// Get the element with the class "rev-item"
	const reviewItemsContainer = document.querySelector(".itemContainer");

	// Append the created review item to the "rev-item" container
	reviewItemsContainer.appendChild(reviewItemDiv);
}

// Example usage
addReviewItem(
	"./reviewGuy.jpg",
	"Julie",
	"I really love the cappuccino, the coffee was very smooth.. Tasted nothing like death...... At all :-)"
);
