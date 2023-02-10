let container = document.getElementsByClassName("products");
let cardContainer = document.getElementsByClassName("cart-items");
let number = document.getElementsByClassName("number");

container[0].innerHTML += products
	.map(
		(product) =>
			`
        <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" alt="t-shirt 1">
                    </div>
                    <div class="desc">
                        <h2>"${product.name}"</h2>
                        <h2><small>$</small>"${product.price}"</h2>
                        <p>"${product.description}"</p>
                    </div>
                    <div class="add-to-wishlist">
                        <img src="./icons/heart.png" alt="add to wish list">
                    </div>
                    <div class="add-to-cart" onClick="addToCart(${product.id})">
                        <img src="./icons/bag-plus.png" alt="add to cart">
                    </div>
                </div>
            </div>`
	)
	.join("");

let cart = [];
function addToCart(n) {
	if (cart.some((x) => x.id == n)) alert("Item already added");
	else {
		let item = products.find((x) => x.id == n);
		item.numberOfUnits = 1;
		cart.push(item);
		cardContainer[0].innerHTML += `<div class="cart-item">
    <div class="item-info">
        <img src="${item.imgSrc}" alt="${item.name}">
            <h4>${item.name}</h4>
    </div>
    <div class="unit-price">
        <small>$</small>${item.price}
    </div>
    <div class="units">
        <div class="btn minus" onclick="changeNumberOfUnits('minus',${item.id})">-</div>
        <div class="number">${item.numberOfUnits}</div>
        <div class="btn plus" onclick="changeNumberOfUnits('plus',${item.id})">+</div>
    </div>
</div>`;
	}
}
function changeNumberOfUnits(x, y) {
	if (x == "plus") {
		let ob = cart.find((item) => item.id == y);

		ob.numberOfUnits++;

		console.log(cart);
	} else {
		let ob = cart.find((x) => x.id == y);
		if (ob.numberOfUnits > 1) {
			ob.numberOfUnits--;
		}
	}
	updateValue();
}
function updateValue() {
	for (let i = 0; i < number.length; i++) {
		number[i].innerHTML = cart[i].numberOfUnits;
	}
}
