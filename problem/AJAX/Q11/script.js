const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// Register form handling
registerForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    dob: document.getElementById("dob").value,
    city: document.getElementById("city").value,
    address: document.getElementById("address").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };

  // AJAX simulation using fetch (POST method)
  fetch("fake-server/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully!");
    registerForm.reset();
  });
});

// Login form handling
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const found = users.find(u => u.username === username && u.password === password);

  if (found) {
    alert("Login successful!");
    window.location.href = "users.html";
  } else {
    alert("Invalid credentials!");
  }
});
