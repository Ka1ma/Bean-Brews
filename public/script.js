document.addEventListener("DOMContentLoaded", () => {
    const orderNowBtn = document.getElementById("orderNowBtn");
    const cart = [];
    const cartItemsContainer = document.getElementById("cartItems");

    // Smooth scroll to order section
    orderNowBtn.addEventListener("click", () => {
        document.getElementById("order").scrollIntoView({ behavior: "smooth" });
    });

    // Update cart display
    const updateCart = () => {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        cartItemsContainer.innerHTML = `
            <ul>
                ${cart
                    .map(
                        (item, index) => `
                    <li>
                        ${item.name} x${item.quantity} - PHP $${item.price * item.quantity}
                        <button class="remove-item" data-index="${index}">Remove</button>
                    </li>`
                    )
                    .join("")}
            </ul>
        `;

        // Add remove functionality
        document.querySelectorAll(".remove-item").forEach((btn) => {
            btn.addEventListener("click", () => {
                const index = btn.getAttribute("data-index");
                cart.splice(index, 1);
                updateCart();
            });
        });
    };

    // Add items to the cart
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", () => {
            const itemName = button.getAttribute("data-item");
            const itemPrice = parseFloat(button.getAttribute("data-price"));
            const existingItem = cart.find((item) => item.name === itemName);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name: itemName, price: itemPrice, quantity: 1 });
            }

            updateCart();
            alert(`${itemName} added to your cart!`);
        });
    });

    // Handle customer form submission
    document.getElementById('customerForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const customerData = {
            customerName: document.getElementById('customerName').value,
            customerEmail: document.getElementById('customerEmail').value,
            customerPhone: document.getElementById('customerPhone').value,
            customerAddress: document.getElementById('customerAddress').value,
            loyaltyPoints: 0, // Default value
            purchaseHistory: cart, // Add the cart items to the purchase history
        };

        try {
            const response = await fetch('http://localhost:3019/addCustomer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customerData),
            });

            if (response.ok) {
                alert('Order placed successfully!');
            } else {
                alert('There was an error placing your order.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
