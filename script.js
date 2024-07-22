document.addEventListener('DOMContentLoaded', function() {
    // Slideshow sulla homepage
   <script type="text/javascript">
function changeOrder(dot, number) {
	var slides = document.querySelectorAll(".slide");
	var dots = document.querySelectorAll(".dotnav-item");
	for (var i = 0; i < slides.length; i++) {
		slides[i].classList.remove('active');
		dots[i].classList.remove('active');
    }
	var elemName = "slide-" + number;
	var elem = document.getElementById(elemName);
	elem.classList.add('active');
	dot.classList.add('active');
}
</script>
    
    // Gestione carrello
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSection = document.getElementById('cart');
    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        if (cartSection) {
            renderCart();
        }
    };

    const addToCart = (product) => {
        const existingProduct = cart.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({...product, quantity: 1});
        }
        updateCart();
    };

    const removeFromCart = (productId) => {
        cart = cart.filter(p => p.id !== productId);
        updateCart();
    };

    const changeQuantity = (productId, quantity) => {
        const product = cart.find(p => p.id === productId);
        if (product) {
            product.quantity = quantity;
            if (product.quantity <= 0) {
                removeFromCart(productId);
            } else {
                updateCart();
            }
        }
    };

    const renderCart = () => {
        cartSection.innerHTML = '<h2>Il tuo carrello</h2>';
        if (cart.length === 0) {
            cartSection.innerHTML += '<p>Il carrello è vuoto.</p>';
            return;
        }
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="item-details">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <label for="quantity-${product.id}">Quantità:</label>
                    <input type="number" id="quantity-${product.id}" name="quantity" value="${product.quantity}">
                    <p>Prezzo: €${product.price}</p>
                    <button class="remove" data-id="${product.id}">Rimuovi</button>
                </div>
            `;
            cartSection.appendChild(cartItem);

            cartItem.querySelector('input').addEventListener('change', function() {
                changeQuantity(product.id, parseInt(this.value));
            });

            cartItem.querySelector('.remove').addEventListener('click', function() {
                removeFromCart(product.id);
            });
        });
        cartSection.innerHTML += '<button id="update-cart">Aggiorna Carrello</button>';
        cartSection.innerHTML += '<button id="checkout">Procedi al Checkout</button>';
    };

    if (cartSection) {
        renderCart();
    }

    // Aggiunta al carrello
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = {
                id: this.dataset.id,
                name: this.dataset.name,
                description: this.dataset.description,
                price: this.dataset.price,
                image: this.dataset.image
            };
            addToCart(product);
        });
    });
});
