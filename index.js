document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  // Dummy check
  if (username === "Adi" && password === "abcd123") {
    errorMsg.style.color = "lightgreen";
    errorMsg.innerText = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "page_1.html"; // redirect after success
    }, 1500);
  } else {
    errorMsg.style.color = "#ff4d4d";
    errorMsg.innerText = "Invalid username or password.";
  }
});
