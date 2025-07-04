function handleSignup(event) {
  event.preventDefault();
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (localStorage.getItem(username)) {
    alert("User already exists");
  } else {
    const hashedPassword = btoa(password); // Basic encryption
    localStorage.setItem(username, hashedPassword);
    alert("Signup successful. Please login.");
    window.location.href = "index.html";
  }
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedPassword = localStorage.getItem(username);
  if (storedPassword && atob(storedPassword) === password) {
    alert("Login successful!");
    // Redirect to dashboard page if needed
  } else {
    alert("Invalid credentials");
  }
}