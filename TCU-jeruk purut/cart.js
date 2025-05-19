// Function to display cart items
function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Tipe: ${item.type}</p>
                <p>Jumlah: ${item.quantity}</p>
                <p>Harga: Rp${item.price.toLocaleString()}</p>
            </div>
            <div class="cart-item-actions">
                <button onclick="removeFromCart(${index})" class="remove-btn">Hapus</button>
            </div>
        `;
        cartContainer.appendChild(itemElement);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Rp${totalPrice.toLocaleString()}`;
}

// Function to remove item from cart
function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCartItems();
}

// Display cart items when page loads
document.addEventListener('DOMContentLoaded', displayCartItems); 