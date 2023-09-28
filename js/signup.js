const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");

const registerButton = document.getElementById("register-btn");
const loginButton = document.getElementById("login-btn");

registerButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || name === "") {
    alert("Please enter a name.");
    return;
  }

  if (!email || email === "") {
    alert("Please enter an email address.");
    return;
  }

  if (!password || password === "") {
    alert("Please enter a password.");
    return;
  }

  try {
    const response = await fetch(
      "https://task31backend.onrender.com/api/auth/user/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      window.location.href("index.js");
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert(error.message);
  }
});
