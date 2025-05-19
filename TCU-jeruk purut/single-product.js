function addToCart() {
    const productType = document.getElementById('product-type').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    
    if (productType === 'Pilih Tipe') {
        errorMessage.textContent = 'Silakan pilih tipe produk terlebih dahulu';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return;
    }

    errorMessage.style.display = 'none';

    const product = {
        name: 'AMD Ryzen 9 9900X3D',
        type: productType,
        price: 12999000,
        quantity: quantity,
        image: 'ryzen-9-9900x3d.png'
    };

    // Get existing cart items
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add new item to cart
    cartItems.push(product);
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Show success message
    successMessage.textContent = 'Produk berhasil ditambahkan ke keranjang!';
    successMessage.style.display = 'block';

    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
} 