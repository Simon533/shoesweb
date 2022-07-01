(function(){
	const cartInfo = document.getElementById("cart-info");
	const cart = document.getElementById("cart");

   cartInfo.addEventListener("click", function(){
		cart.classList.toggle("show-cart");
	});
})();
// add itesm to cart in this code

(function(){
	const cartBtn=document.querySelectorAll('.store-item-icon');
 	cartBtn.forEach(function(btn){
		btn.addEventListener("click", function(event){
			if (event.target.parentElement.classList.contains("store-item-icon"))
			{
				let fullPath= event.target.parentElement.previousElementSibling.src;
				// console.log(event.target.parentElement.previousElementSibling.src);
				let pos= fullPath.indexOf("img") +3;
				let partPath=fullPath.slice(pos);
				// console.log(partPath);
				const item={}; // object goes here
				item.img='img-cart${partPath}';
				let name =event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
				item.name=name;
	let price =event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
				
 let finalPrice=price.slice(1).trim();
  item.price=finalPrice;
				 //console.log(price);
				//console.log(name);
				//console.log(item);
				// console.log(event.target);
	const cartItem=document.createElement('div');
 cartItem.classList.add("cart-item","d-flex","justify-content-between","text-capitalize","my-3");
 cartItem.innerHTML='';
 
const cart=document.getElementById('cart');
const total=document.querySelector('.cart-total-container');
cart.insertBefore(cartItem,total);
alert('item added to the cart');


			}
			
		});
	});
	//totalsumat the cart
	function showTotals(){
	const total=[];
	cont items=document.querySelectorAll(".cart-item-price");
	items.forEach(function(item){
		total.push(parseFloat(item.textContent));
	});
	 const totalCost=total.reduce(function(total,item){
	 	total+=item;
	 	total total;
	 },0);
	 const finalTotalsum=totalCost.toFized(2);

	 document.getElementById('cart-total').textContent=finalTotalsum;
	 document.querySelector('.item-total').textContent=finalTotalsum;
	 document.getElementById('cart-item').textContent=total.length;
	}
 })();




