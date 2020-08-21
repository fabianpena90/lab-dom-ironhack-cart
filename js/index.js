// click events
document.querySelector('#calculate').onclick = calculateAll;
document.querySelector('.btn-remove').onclick = deleteProduct;
document.getElementById(`create`).onclick = createProduct;


function calculateAll() {
  let products = document.querySelectorAll('.product');
  let total = 0;
  for(product of products) {
    let price = product.querySelector('.price span').innerHTML;
    let quantity = product.querySelector('.quantity input').value;
    let subTotal = price * quantity;
    total += subTotal
    product.querySelector('.subtotal span').innerHTML = subTotal
  }
  document.querySelector('#total-value span').innerHTML = total
}


function deleteProduct(event) {
  const deleteItem =  event.target;
  if(event.target.classList.value.includes('btn-remove')) {
    deleteItem.parentNode.parentNode.parentNode.removeChild(deleteItem.parentNode.parentNode)
    console.log(deleteItem)
    calculateAll()
  }
}

function createProduct() {
  const name = document.querySelector(`.create-product input`).value;
  const price = document.querySelector(`.create-product [type='number']`).value;
  const table = document.getElementsByTagName(`tbody`)[0];
  const row = table.insertRow();
  const rowContent = `
      <td class="name">
        <span>${name}</span>
      </td>
      <td class="price">$<span>${price}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>`;
  row.innerHTML = rowContent;
  row.setAttribute("class", "product");
  calculateAll()
}
