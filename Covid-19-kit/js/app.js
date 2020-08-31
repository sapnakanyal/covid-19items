// show cart

(function(){
    //target cart button
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })


})();

// add items to the cart

(function(){

const cartBtn = document.querySelectorAll('.store-item-icon');

cartBtn.forEach(function(btn){
    btn.addEventListener('click', function(event){
        //make sure event fires only if it has a parent of a certain class.
        if(event.target.parentElement.classList.contains('store-item-icon')){

            let fullPath = event.target.parentElement.previousElementSibling.src;

            let pos = fullPath.indexOf('img') + 3; //use the 3 to get rid of the 'img' string

            let partPath = fullPath.slice(pos);

            const item = {};

            item.img = `img-cart${partPath}`;

            let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

            item.name = name;

            let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

            let finalPrice = price.slice(1).trim();

            item.price = finalPrice;

            const cartItem = document.createElement('div');

            cartItem.classList.add('cart-item', 'd-flix', 'justify-content-between', 'text-capitalize', 'my-3');

            cartItem.innerHTML = `<div class="cart-item d-flex justify-content-between text-capitalize my-3"><img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
              <div class="item-text"><p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p><span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span></div><a href="#" id='cart-item-remove' class="cart-item-remove"><i class="fas fa-trash"></i></a></div>`;

        //select cart

        const cart = document.getElementById('cart');
        const total = document.querySelector('.cart-total-container');

        cart.insertBefore(cartItem, total);
        alert('item added to the cart');

        showTotals();

        }
    });
});

// show totals
function showTotals(){

    const total = [];
    const items = document.querySelectorAll('.cart-item-price');
    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    })
    
    const totalMoney = total.reduce(function(total, item){
        total += item;
        return total;
    },0);

    const finalMoney = totalMoney.toFixed(2);
    
    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;
}

})();
// contact form
function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }

//Things learned
//DOM traversal using previousElementSibling
//element.insertBefore
//reduct method