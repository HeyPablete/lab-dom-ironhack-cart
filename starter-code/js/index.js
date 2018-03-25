function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

  
}

function getTotalPrice() {

  var productsLeng = document.getElementsByClassName('cost-unit').length;
  var currentPrice = 0;

  for(var i=0; i < productsLeng; i++) {

    // Retrieves the unit price of the product
    var costUnit = parseInt(document.getElementsByClassName('cost-unit')[i].textContent);

    // Retrieves the quantity of items desired
    var howManyUnits = parseInt(document.getElementById('how-many-units').value);

    // Calculates the total price based on this data
    var totalPrice = costUnit * howManyUnits;

    // Updates the total price in the DOM
    var totalPrice_Element = document.getElementsByClassName('total-price')[i];
    totalPrice_Element.innerHTML = totalPrice;
    // var totalPrice_TextContent = parseInt(document.getElementsByClassName('total-price')[0].textContent);
    // var totalPrice_AttValue = parseInt(document.getElementsByClassName('total-price')[0].attributes.value.textContent);

  }

  // voy a poner el total de todos los productos en el ultimo span
  var spanLeng = document.getElementsByTagName("span").length;
  var spanTotalPrice = document.getElementsByTagName("span")[spanLeng];

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

