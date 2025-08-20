// scripts.js

// Simulated cart logic
function addToCart(productId) {
  alert("Product " + productId + " added to cart!");
}

// Simulated login
function handleLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    alert("Login successful!");
    // Redirect or store session here
  } else {
    alert("Please enter valid credentials.");
  }
}
