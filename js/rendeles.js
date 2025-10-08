function sendOrderData(){
  const name = document.querySelector('#name').value;
  const extra = parseInt(document.querySelector('[name=Extra]:checked').value);
  const quantity = parseInt(document.querySelector('#quantity').value);
  const sauce = parseInt(document.querySelector('#sauce').value);
  const message = document.querySelector('#message');
  
  const price = (2990 + extra + sauce) * quantity;
  message.innerHTML = price;
  
}