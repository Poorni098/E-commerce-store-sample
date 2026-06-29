const products = [
{
    name: "Nike Air Max",
    price: "₹5,999",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
},
{
    name: "Smart Watch",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
},
{
    name: "Headphones",
    price: "₹2,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
},
{
    name: "Gaming Mouse",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800"
},
{
    name: "Laptop",
    price: "₹49,999",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"
},
{
    name: "Bluetooth Speaker",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800"
}
];

const productsContainer = document.getElementById("products");
const cartBtn = document.querySelector(".cart-btn");

let cartCount = 0;

products.forEach(product => {

    const productCard = document.createElement("div");

    productCard.classList.add("product");

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add To Cart</button>
    `;

    productsContainer.appendChild(productCard);

});

document.addEventListener("click", function(e){

    if(e.target.tagName === "BUTTON" &&
       e.target.innerText === "Add To Cart"){

        cartCount++;

        cartBtn.innerHTML = `🛒 Cart (${cartCount})`;

        e.target.innerHTML = "✓ Added";

        setTimeout(() => {
            e.target.innerHTML = "Add To Cart";
        },1000);
    }

});
const search = document.getElementById("search");

search.addEventListener("keyup", () => {

const value =
search.value.toLowerCase();

document
.querySelectorAll(".product")
.forEach(product => {

const text =
product.innerText.toLowerCase();

product.style.display =
text.includes(value)
? "block"
: "none";

});

});