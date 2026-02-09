let count = 0;

function addToCart(name, price) {
    count++;
    document.getElementById('cart-count').innerText = count;
    alert("✅ " + name + " added to your cart!");
}