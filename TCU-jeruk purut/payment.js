// Function to display order items
function displayOrderItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItemsContainer = document.getElementById('order-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    orderItemsContainer.innerHTML = '';
    let subtotal = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'order-item';
        itemElement.innerHTML = `
            <div class="order-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="order-item-details">
                <h4>${item.name}</h4>
                <p>Tipe: ${item.type}</p>
                <p>Jumlah: ${item.quantity}</p>
                <p>Harga: Rp${(item.price * item.quantity).toLocaleString('id-ID')}</p>
            </div>
        `;
        orderItemsContainer.appendChild(itemElement);
        subtotal += item.price * item.quantity;
    });

    const shipping = 20000;
    const total = subtotal + shipping;

    subtotalElement.textContent = `Rp${subtotal.toLocaleString('id-ID')}`;
    totalElement.textContent = `Rp${total.toLocaleString('id-ID')}`;
}

// Function to select payment method
function selectPayment(method) {
    const bankDetails = document.getElementById('bank-details');
    const ewalletDetails = document.getElementById('ewallet-details');
    
    if (method === 'bank') {
        bankDetails.style.display = 'block';
        ewalletDetails.style.display = 'none';
    } else {
        bankDetails.style.display = 'none';
        ewalletDetails.style.display = 'block';
    }
}

// Function to confirm payment
function confirmPayment() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    const errorMessage = document.getElementById('payment-error');

    if (!name || !phone || !address || !paymentMethod) {
        errorMessage.textContent = 'Silakan lengkapi semua informasi yang diperlukan';
        errorMessage.style.display = 'block';
        return;
    }

    // Get cart items and calculate total
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    const total = subtotal + 20000; // Add shipping cost
    
    // Generate a simple order ID
    const orderId = 'ORD' + Date.now().toString().slice(-6);
    
    // Store order items and total in localStorage for thank-you page
    localStorage.setItem('orderItems', JSON.stringify(cartItems));
    localStorage.setItem('orderTotal', total.toString());
    
    // Clear the cart after storing order details
    localStorage.removeItem('cart');
    
    // Redirect to thank-you page with order details
    window.location.href = `thank-you.html?orderId=${orderId}&total=${total}`;
}

// Display order items when page loads
document.addEventListener('DOMContentLoaded', displayOrderItems); 