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

// remove button function -> which is called in the removeItems function button
function removeItem () {
  // event.target is the user input response
  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  // Needs to update the cart that the item has been removed - call the updateCart Function
  updateCart()
  }
}

// Updating the total of our cart total

function updateCart(){
  let total = 0
  //Go through every single row in our cart (find the total = (price  * Quantity) * Row  )
  // Get the whole cart
  // The reason why we index[0] is so that we start at the beginning of the cart/row/item
  let cartItemContainer = document.getElementsByClassName('totalCart')[0]
  // Within the whole cart, get the cart row
  let cartRow = cartItemContainer.getElementsByClassName('cartRow')
  // Iterate through the row, getting the item price and item quantity
  for (let i=0; i<cartRow.length; i++) {
    let rowInCart = cartRow[i]
    let priceOfItem = document.getElementsByClassName('cartPrice')[0]
    let quantityOfItem = document.getElementsByClassName('quantityItem')[0]
    // get the inner.text (pulls the text within the element)
    // .replace() will replace the $ sign with the second arguement --> which is nothing
    // parseFloat will turn any string into a float 
    let price = parseFloat(priceOfItem.innerText.replace('$', ''))
    // get the quantity of the item
    let quanity = quantityOfItem.value
    total += price*quanity
  }
  //Replace the number with the total in the loop
  document.getElementsByClassName('total-cart-price')[0].innerText = `$${total}`
}
