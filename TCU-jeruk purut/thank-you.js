// Function to display order items and total
function displayOrderDetails() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItemsContainer = document.getElementById('thank-you-items');
    const totalElement = document.getElementById('thank-you-total');
    
    orderItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'thank-you-item';
        itemElement.innerHTML = `
            <div class="thank-you-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="thank-you-item-details">
                <h4>${item.name}</h4>
                <p>Tipe: ${item.type}</p>
                <p>Jumlah: ${item.quantity}</p>
                <p>Harga: Rp${item.price.toLocaleString()}</p>
            </div>
        `;
        orderItemsContainer.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    // Add shipping cost
    total += 20000;
    totalElement.textContent = `Rp${total.toLocaleString()}`;
}

// Display order details when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get order details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('orderId');
    const total = urlParams.get('total');
    
    // Update order ID display
    const orderIdElement = document.getElementById('order-id');
    if (orderIdElement && orderId) {
        orderIdElement.textContent = orderId;
    }
    
    // Get order items from localStorage
    const orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
    const itemsContainer = document.getElementById('thank-you-items');
    const subtotalElement = document.getElementById('thank-you-subtotal');
    const totalElement = document.getElementById('thank-you-total');
    
    if (itemsContainer && orderItems.length > 0) {
        // Clear any existing content
        itemsContainer.innerHTML = '';
        
        // Add each item to the container
        orderItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'thank-you-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="thank-you-item-details">
                    <h3>${item.name}</h3>
                    <p>Tipe: ${item.type}</p>
                    <p>Jumlah: ${item.quantity}</p>
                    <p>Harga: Rp${(item.price * item.quantity).toLocaleString('id-ID')}</p>
                </div>
            `;
            itemsContainer.appendChild(itemElement);
        });
    }
    
    // Calculate and display subtotal
    if (subtotalElement && orderItems.length > 0) {
        let subtotal = 0;
        orderItems.forEach(item => {
            subtotal += item.price * item.quantity;
        });
        subtotalElement.textContent = `Rp${subtotal.toLocaleString('id-ID')}`;
    }
    
    // Display total amount
    if (totalElement && total) {
        totalElement.textContent = `Rp${parseInt(total).toLocaleString('id-ID')}`;
    }
    
    // Clear the order items from localStorage
    localStorage.removeItem('orderItems');
    localStorage.removeItem('orderTotal');
}); 