import fetchCartItem from './fetchCartItem.js';
import feather from 'feather-icons';
import '../../style/modules/cartItem.scss';
import updateCart from './updateCart.js';

export default function printCart(items) {
	let totalPrice = 0;
	let itemCount = 0;

	let cartItemsList = document.createElement('ul');
	cartItemsList.classList.add('cartList__list');
	items.forEach(function (item, index) {
		console.log(item.id);
		let itemLi = document.createElement('li');
		itemLi.classList.add('listItem');
		fetchCartItem(item.id).then((product) => {
			itemLi.innerHTML = `
			<h3 class="listItem__header">${product.name}</h3>
			<p class="listItem__price">€${product.price}</p>
			<div className="listItem__amountBtns">
				<button class="listItem__amountBtn listItem__amountBtn--minus">${feather.icons.minus.toSvg()}</button>
				<input type="number" class="listItem__amount" id="amount" min="0" value="${
					item.amount
				}" />
				<button class="listItem__amountBtn listItem__amountBtn--plus">${feather.icons.plus.toSvg()}</button>
			</div>
			<p class="listItem__total">€${product.price * item.amount}</p>
		`;
			itemLi
				.querySelector('.listItem__amount')
				.addEventListener('change', function () {
					item.amount = parseInt(this.value)
					items[index] = item
					localStorage.setItem('cartItems', JSON.stringify(items))

					updateCart(product, item)

					// itemLi.querySelector('.listItem__total').innerHTML = `€${product.price * item.amount}`
				});

			itemCount += item.amount
			// totalPrice += item.amount * product.price

			document.querySelector('.listItem__totalAmount').innerHTML = itemCount
			document.querySelector('.listItem__totalPrice').innerHTML = totalPrice
		});


		cartItemsList.appendChild(itemLi);
	});
	let totalLi = document.createElement('li')
	totalLi.classList.add('listItem', 'listItem__totalLi')
	totalLi.innerHTML = `
		<p class="listItem__totalAmount">${itemCount}</p>
		<p class="listItem__totalPrice">${totalPrice}</p>
	`
	cartItemsList.appendChild(totalLi)
	return cartItemsList;
}
