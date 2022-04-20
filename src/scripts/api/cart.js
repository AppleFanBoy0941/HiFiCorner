let ls = localStorage.getItem('cartItem')
console.log("cartItem");
if (ls) {
    let cartItems = JSON.parse(ls)
} else {
    let cartItems = []
}

var amount = document.querySelector('.productDecription__amount').value
var productId = document.querySelector('.productDecription__id').value
var color = document.querySelector('.productDecription__color').value

let item = {
    'amount' : amount,
    'id' : productId,
    'color' : color
}

cartItems.push(item)

localStorage.setItem('cartItems')