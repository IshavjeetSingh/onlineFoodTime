// Get elements
const cartButton = document.getElementById('my-cart');
const cartButton1 = document.getElementById('span');
const addToCartDivs = document.querySelectorAll('.add-to-cart');
const cartModal = document.getElementById('cart-modal');
const closeModalDiv = document.getElementById('close-modal');
const cartDetailsDiv = document.getElementById('cart-details');
const cartTotalItemsSpan = document.getElementById('cart-total-items');
const cartTotalPriceSpan = document.getElementById('cart-total-price');

// Initialize cart array

let cart = [];

// Function to update the cart button text
function updateCartButton() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartButton1.innerText = `${totalItems} `;
}

// Function to display the cart details in the modal
function displayCartDetails() {
    // Clear the cart details div
    cartDetailsDiv.innerHTML = '';

    // Loop through each cart item and create a div with its details
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        // Create an img element for the product image
        const img = document.createElement('img');
        img.src = item.imgSrc;

        // Create a div element for the product details (title, price, quantity)
        const itemDetails = document.createElement('div');
        itemDetails.innerText = `${item.title} - ₹${item.price} x ${item.quantity}`;

        // Create a delete button (cross symbol) for removing items
        const removeButton = document.createElement('span');
        removeButton.classList.add('remove-item');
        removeButton.innerText = '✖';

        // Add event listener to handle removal of the item
        removeButton.addEventListener('click', function () {
            // Remove the item from the cart
            cart.splice(index, 1);
            // Update the cart button and display the updated cart details
            updateCartButton();
            displayCartDetails();
        });

        // Append img, details, and remove button to the cart item div
        cartItemDiv.appendChild(img);
        cartItemDiv.appendChild(itemDetails);
        cartItemDiv.appendChild(removeButton);

        // Append the cart item div to the cart details div
        cartDetailsDiv.appendChild(cartItemDiv);
    });

    // Update total items and total price
    cartTotalItemsSpan.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotalPriceSpan.innerText = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
}

// Add event listeners to all "Add to Cart" divs
addToCartDivs.forEach(div => {
    div.addEventListener('click', function () {
        // Get product title, price, and image source from the div data attributes
        const title = div.dataset.title;
        const price = parseFloat(div.dataset.price);
        const imgSrc = div.dataset.imgSrc;

        // Check if the product already exists in the cart
        const existingItem = cart.find(item => item.title === title);

        if (existingItem) {
            // If the product is already in the cart, increase the quantity
            existingItem.quantity += 1;
        } else {
            // If the product is not in the cart, add it to the cart
            cart.push({
                title,
                price,
                imgSrc,
                quantity: 1
            });
        }

        // Update cart button text
        updateCartButton();
    });
});

// Event listener for "My Cart" div click
cartButton.addEventListener('click', function () {
    // Toggle the display of the cart modal
    cartModal.style.display = (cartModal.style.display === 'none' || !cartModal.style.display) ? 'block' : 'none';
    // Display the cart details if the modal is visible
    if (cartModal.style.display === 'block') {
        displayCartDetails();
    }
});

// Event listener for closing the modal
closeModalDiv.addEventListener('click', function () {
    // Hide the cart modal
    cartModal.style.display = 'none';
});

////////////////////// Toggle of MyCart div /////////////////////

        // Function to toggle CSS class when the div is clicked
        function toggleCSS() {
            // Get the div element
            const div = document.getElementById('cart-modal');

            // Toggle the 'clicked' class on the div
            div.classList.toggle('clicked');
        }

        // Add a click event listener to the div
        const div = document.getElementById('cart-modal');
        div.addEventListener('click', toggleCSS);