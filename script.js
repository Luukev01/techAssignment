// Need to check if the document is still loading or its done before the body is loaded
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
// we put the buttons in the ready function to force the page to allow the buttons to work if it doesnt load before the body
function ready () {
// Add user input buttons/quantities in this section to allow it to load ASAP
// Make the remove button work
let removeItems = document.getElementsByClassName("btn-outline-danger")
for (let i=0; i<removeItems.length; i++) {
  let button = removeItems[i]
  button.addEventListener('click', removeItem)
  }
// Create a quanity input 
let quantityItem = document.getElementsByClassName("quantityItem")
for (let i=0; i<quantityItem.length; i++){
  let userInputForQuantity = quantityItem[i]
  userInputForQuantity.addEventListener('change', quantityChanged)
  }

// For the each item you wanted to add
let addToCart = document.getElementsByClassName("btn-outline-secondary")
for (let i=0; i<addToCart.length; i++) {
  let addToCartButton = addToCart[i]
  addToCartButton.addEventListener('click', addToCartClick)
  }
// We want to receive
}


// all our functions *********************************** all our functions //

// remove button function -> which is called in the removeItems function button
function removeItem (event) {
  // event.target is the user input response
  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  // Needs to update the cart that the item has been removed - call the updateCart Function
  updateCart()
  }

// Quantity collection function ==> 
function quantityChanged (event) {
  let input = event.target
  // check if the quantity is a number (not a number NAN)
  if (isNaN(input.value) || input.value <=0) {
    input.value = 1
  }
  updateCart();
}

// Add to cart function ==> 
function addToCartClick (event) {
  let clickedButton = event.target
  let itemContainer = clickedButton.parentElement.parentElement
  let itemName = itemContainer.getElementsByClassName('item-name')[0].innerText
  let itemPrice = itemContainer.getElementsByClassName('item-price')[0].innerText
<<<<<<< HEAD
  let itemBrand = itemContainer.getElementsByClassName('item-brand')[0].innerText
  addItemToCart(itemName, itemPrice,itemBrand)
=======
  addItemToCart(itemName, itemPrice)
>>>>>>> 1c2d9b35e3043b8d31ac5633040fd8874bd5316d
  updateCart()
}

// adding the clicked items to the cart 
<<<<<<< HEAD
function addItemToCart (itemName, itemPrice, itemBrand) {
=======
function addItemToCart (itemName, itemPrice) {
>>>>>>> 1c2d9b35e3043b8d31ac5633040fd8874bd5316d
  let cartRow = document.createElement('tr')
  cartRow.classList.add('cartRow')
  let cartItems = document.getElementsByClassName('totalCart')[0]
  // If the item has been added, it can not be added again
  let cartItemsName = cartItems.getElementsByClassName('item-name')
  for (let i=0; i<cartItemsName.length; i++) {
    if (cartItemsName[i].innerText == itemName) {
      alert(`This item is already added`)
      return
    }
  }
  // Template for the added item
  let wholeCartContents = `
                              <tr class="cartRow">
                              <th class = "item-name" scope="row">${itemName}</th>
<<<<<<< HEAD
                              <td class = "item-brand"> ${itemBrand}</td>
=======
>>>>>>> 1c2d9b35e3043b8d31ac5633040fd8874bd5316d
                              <td><input type="number" class="quantityItem" name="quantity" min="0" max="5" step="1" value="2"></td>
                              <td class="cartPrice" >${itemPrice}</td>
                              <td><button type="button" class="btn btn-outline-danger btn-sm">Remove</button></td>
                              </tr> `
  cartRow.innerHTML = wholeCartContents
  cartItems.append(cartRow)
  // To make the buttons and quantity to work for added items 
  cartRow.getElementsByClassName("btn-outline-danger")[0].addEventListener('click', removeItem)
  cartRow.getElementsByClassName("quantityItem")[0].addEventListener('change', quantityChanged)
}

// Updating the total of our cart total

function updateCart(){
  let total = 0
  //Go through every single row in our cart (find the total = (price  * Quantity) --> For each Row  )
  // Get the whole cart
  // The reason why we index[0] is so that we start at the beginning of the cart/row/item
  let cartItemContainer = document.getElementsByClassName('totalCart')[0]
  // Within the whole cart, get the cart row
  let cartRow = cartItemContainer.getElementsByClassName('cartRow')
  // Iterate through the row, getting the item price and item quantity
  for (let i=0; i<cartRow.length; i++) {
    let rowInCart = cartRow[i]
    let priceOfItem = rowInCart.getElementsByClassName('cartPrice')[0]
    let quantityOfItem = rowInCart.getElementsByClassName('quantityItem')[0]
    // get the inner.text (pulls the text within the element)
    // .replace() will replace the $ sign with the second arguement --> which is nothing
    // parseFloat will turn any string into a float 
    let price = parseFloat(priceOfItem.innerText.replace('$', ''))
    // get the quantity of the item
    let quanity = quantityOfItem.value
    total = total +  price*quanity
  }
  // total variable is 2 decimal points
  //total = Math.round(total * 100)/100
  //Replace the number with the total in the loop
  document.getElementsByClassName('total-cart-price')[0].innerText = `$${total}.00`
}
