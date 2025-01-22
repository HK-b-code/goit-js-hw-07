const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.target.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

  console.log({ email: email.value.trim(), password: password.value.trim() });
  form.reset();
});


// Text "Login" to "Log in" in button
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('button[type="submit"]');
  if (button) {
    button.textContent = "Log in";
  }
});