function sendOrderData(){
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const address = document.querySelector('#address').value;
  // alert(name+"\n"+email+"\n"+address);

  const burger = 2990;
  const extra = parseInt(document.querySelector('[name=Extra]:checked').value);
  const quantity = parseInt(document.querySelector('#quantity').value);
  const sauce = parseInt(document.querySelector('#sauce').value);
  const message = document.querySelector('#message');
  
  
  

  if(!quantity || quantity<1 || quantity>10){
    alert("Csak 1 és 10 közötti databot rendelhetsz!");
  }
  else{
    Burger.innerText = burger*quantity+" Ft";
  Szosz.innerText = sauce+" Ft";
  azExtra.innerText = extra+" Ft";
  const price = (burger + extra + sauce) * quantity;
  message.innerText = price + " Ft";
  const afa = ((price/100)*27).toFixed(2);
  Afa.innerText = afa+" Ft";
  }

}