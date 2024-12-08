document
  .querySelector("#login .login__col:nth-child(1)")
  .addEventListener("mouseover", function () {
    this.style.color = "var(--neo-green)";
    this.querySelector(".login__info h1").style.color = "var(--neo-green)";
    this.querySelector(".login__info h5").style.color = "var(--neo-green)";
    this.querySelector(".login__info a").style.color = "var(--neo-green)";
  });

document
  .querySelector("#login .login__col:nth-child(1)")
  .addEventListener("mouseout", function () {
    this.style.color = "";
    this.querySelector(".login__info h1").style.color = "";
    this.querySelector(".login__info h5").style.color = "";
    this.querySelector(".login__info a").style.color = "";
  });

const loginForm = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const isCustomer = document.getElementById("isCustomer");

const redirect = (path) => {
  window.location.replace(path);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  let isValid = false;

  users.forEach((u) => {
    if (isCustomer.checked) {
      if (
        u["correo"] === email.value &&
        u["password"] === password.value &&
        u["rol"] === "cliente"
      ) {
        isValid = true;
        redirect("./pages/customer/home.html");
      }
    } else {
      // Validación para administradores
      if (
        u["correo"] === email.value &&
        u["password"] === password.value &&
        u["rol"] === "administrador"
      ) {
        isValid = true;
        redirect("./pages/admin/users.html");
      }
    }
  });

  if (!isValid) {
    alert("Credenciales incorrectas");
  }

  loginForm.reset();
};

loginForm.addEventListener("submit", handleSubmit);
