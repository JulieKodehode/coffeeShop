class CardComponent {
	constructor(name, price, imageUrl, containerSelector) {
		this.name = name;
		this.price = price;
		this.imageUrl = imageUrl;
		this.container = document.querySelector(containerSelector);
		this.render();
	}

	render() {
		const cardDiv = document.createElement("div");
		cardDiv.className = "item-box";
		cardDiv.innerHTML = `
            <figure>
                <img style="max-width: 300px; max-height: 300px;" src="${this.imageUrl}" alt="${this.name}" />
                <figcaption>
                    <h3>${this.name}</h3>
                    <h3>${this.price}</h3>
                </figcaption>
                <div class="hcc">
                    <div class="ch">
                        <a href="#">Hot</a>
                        <a href="#">Cool</a>
                    </div>
                    <div class="c">
                        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                </div>
            </figure>
        `;
		this.container.appendChild(cardDiv);
	}
}

new CardComponent("Vanilla Latte", "21K", "../coffee.png", ".popular-items");

//
// NEXT
//

class ServiceItemComponent {
	constructor(imageUrl, title, description, containerSelector) {
		this.imageUrl = imageUrl;
		this.title = title;
		this.description = description;
		this.container = document.querySelector(containerSelector);
		this.render();
	}

	render() {
		const serviceItemDiv = document.createElement("div");
		serviceItemDiv.className = "s-item";
		serviceItemDiv.innerHTML = `
            <div>
                <img style="max-width: 300px; max-height: 300px;" src="${this.imageUrl}" alt="${this.title}" />
            </div>
            <h4>${this.title}</h4>
            <p>${this.description}</p>
        `;
		this.container.appendChild(serviceItemDiv);
	}
}

new ServiceItemComponent(
	"../coffeeCup.png",
	"Choose Your Coffee",
	"There are 20+ coffees for you",
	".services-items"
);

//
// NEXT
//

class ReviewItemComponent {
	constructor(imageUrl, reviewerName, reviewMessage, containerSelector) {
		this.imageUrl = imageUrl;
		this.reviewerName = reviewerName;
		this.reviewMessage = reviewMessage;
		this.container = document.querySelector(containerSelector);
		this.render();
	}

	render() {
		const reviewItemDiv = document.createElement("div");
		reviewItemDiv.className = "rivew";
		reviewItemDiv.innerHTML = `
            <img style="max-width: 300px; max-height: 300px;" src="${this.imageUrl}" alt="" />
            <div class="rev-msg">
                <h4>${this.reviewerName}</h4>
                <p>${this.reviewMessage}</p>
            </div>
        `;
		this.container.appendChild(reviewItemDiv);
	}
}

new ReviewItemComponent(
	"../reviewGuy.jpg",
	"Naura",
	"I really love the cappuccino, the coffee was very smooth",
	".review-items"
);
