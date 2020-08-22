// Click Events
document.querySelector('#calculate').addEventListener('click', calculateValue);
document.querySelector('.btn-remove').addEventListener('click', removeProduct);
document.querySelector('#create').addEventListener('click', addProduct);


//Calculate Value
function calculateValue() {
  let products = document.querySelectorAll('.product');
  let total = 0;
  for (let product of products) {
    let price = product.querySelector('.price span').innerHTML;
    let quantity = product.querySelector('.quantity input').value;
    let subTotal = price * quantity;
    total += subTotal;
    product.querySelector('.subtotal span').innerHTML = subTotal

  }
  document.querySelector('#total-value span').innerHTML = total
}

//Remove Items
function removeProduct(e) {
  let deleteItem = document.querySelectorAll('.btn-remove')
  if(deleteItem )
  for (item of deleteItem) {
    item.onclick = function (e) {
      e.target.parentNode.parentNode.remove();
      calculateValue();
    }
  }
}

// Add New Product
function addProduct() {
  const productName = document.querySelector('#product-name').value;
  const productPrice = document.querySelector('#item-price').value;
  if(productName === '' || productPrice === ''){
    alert('Please enter a product name & price!')
  }
  // console.log(productPrice)
  let row = `
    <td class="name">
    <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
    <button class="btn btn-remove">Remove</button>
    </td>
  `
  let newRow = document.createElement('tr')
  newRow.classList.add('.product');
  newRow.innerHTML = row;
  document.querySelector("tbody").appendChild(newRow);
  document.querySelector('#product-name').value = '';
  document.querySelector('#item-price').value = '';
  removeProduct();
}