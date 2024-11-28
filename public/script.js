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
                        ${item.name} x${item.quantity} - PHP ${
                            item.price * item.quantity
                        }
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

    // Submit order form
    document.getElementById("orderForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("customerName").value;
        const email = document.getElementById("customerEmail").value;
        const item = document.getElementById("orderItem").value;
        const quantity = parseInt(document.getElementById("quantity").value, 10);

        alert(`Thank you ${name}! Your order for ${quantity} ${item}(s) has been received.`);
        console.log({ name, email, item, quantity });
        event.target.reset();
    });

    //captures for input of CustomerForm
    //Sends Data to the Backend API
    document.getElementById('customerForm').addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const customerData = {
          name: document.getElementById('name').value,
          contactInfo: {
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
          },
          loyaltyPoints: 0, // Default value
          purchaseHistory: [] // Empty array initially
        };
  
        try {
          const response = await fetch('http://localhost:3000/add-customer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerData),
          });
  
          const result = await response.text();
          alert(result);
        } catch (error) {
          console.error('Error:', error);
        }
      });
      const { v4: uuidv4 } = require('uuid');

// Install the library first: npm install uuid
const customerID = uuidv4(); // Generates a unique ID like 'c65bdf0a-89c3-4934-a123-b23ed5462a4a'

});
