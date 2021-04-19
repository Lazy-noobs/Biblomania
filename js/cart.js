'use strict';
console.log('shaima');
//remove button
let removeCardItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCardItemButtons);

// add event listener, to do something when we click on it, to do this I will loop throw these different object
for (let i = 0; i < removeCardItemButtons.length; i++) {
    let button = removeCardItemButtons[i];
    // add event listener when we click on the button it will make something
    button.addEventListener('click', removeFun);

}


// when the user change the quantity //and remove the number that less than zero
let quantityInput = document.getElementsByClassName('cart-quantity-input');
//make loop
for (let i = 0; i < quantityInput.length; i++) {
    //git the element from array, so this going to be each one of quantity input 
    let input = quantityInput[i]; //this.quantityInput = quantityInput[i];
    // take the input and add event listener 'change' to listen to any time input change and call function quantityChange
    input.addEventListener('change', quantityChange);
}

//purchase button
document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

// this function for the purchase button, named of the fun purchaseClicked
function purchaseClicked(event) {
    //alert the user that have purchased item
    alert('Thank you for purchasing from our online book shop, visit us again :)');

    //to add more than one item
    // var cartItems = document.getElementsByClassName('cart-items')[0]
    // while (cartItems.hasChildNodes()) {
    //     cartItems.removeChild(cartItems.firstChild)
    // }
    // updateCartTotal();
}



//this function will remove the cart item from our cart
//we need to talk our function event listener always return an event obj inside the function that calls and this obj has property on it called target
function removeFun(event) {
    console.log('clicking...');
    //target: is whatever the button clicked on
    let buttonClicked = event.target;
    //we want to get the cart row that button inside
    buttonClicked.parentElement.parentElement.remove();

    //call updateCartTotal
    updateCartTotal();
}
// removeFun();

// create quantityChange fun
function quantityChange(event) {
    //the thing that we want to do when the quantity has changed:
    //first get quantity element
    let inputChange = event.target;
    //then check to see if the value that inside this input is valid value "because maybe the user delete the number that inside the input quantity or the value <=0 "
    if (isNaN || inputChange.value <= 0) {
        //set inputChange to be 1
        inputChange.value = 1;

    }
    //update the cart total
    updateCartTotal();
}


//code to update the total of cart every time we remove an item from it, in order to update the total of  our cart
function updateCartTotal() { //call this function inside the button event listener
    //inside updateCartTotal function we want to go through every single row in our cart, we want to find the price, and we want to multiply that by the quantity, and then add that together for every single one of our rows and display it down here and our total
    //get all of our cart rows
    //getElementsByClassName return array of elements, we only need just one so I'll select the very first element inside that array as cartItemContaier
    let cartItemContaier = document.getElementsByClassName('cart-items')[0];

    //inside cartItemContaier I'll use getElementsByClassName to put the class-row  that are inside cart-Item
    let cartRows = cartItemContaier.getElementsByClassName('cart-row');

    let total = 0; //this.total=0;

    //make loop to over all these different cart-row
    for (let i = 0; i < cartRows.length; i++) {
        //the item that we are inside of this array
        let cartRow = cartRows[i];  //this.cartRows=cartRows[i];

        //get price for the row of this cart
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];

        //get quantity for the row of this cart, (quantity is input tag)
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        console.log(priceElement, quantityElement);

        //get the actual information from priceElement (get the info)
        //innerText: get the text that inside the element
        //the price has $, to replace it to be a number without $... I'll replace $ with nothing 
        let price = parseFloat(priceElement.innerText.replace('$', ''));

        //get the actual information from quantityElement (get the info)
        let quantity = quantityElement.value //get the value of quantity
        // console.log(price * quantity);

        //in the loop I'll total all thig together
        total = total + (price * quantity);
    }
    // round : is the near number
    total = Math.round(total);
    //after loop, I'll get element with cart total price (total all price)
    // [0] : want the very first one
    // innerText : set the innerText of element
    document.getElementsByClassName('cart-total-price')[0].innerText = `$ ${total}`;
    console.log('this is the total', total);

}

// localStorage
console.log(localStorage.setItem('here the total', 'total'));
function updateStorage() {
    //store the price, quantity, total, and the book name
    localStorage.setItem('total',updateCartTotal.total);
    localStorage.setItem('total',updateCartTotal.total);
}