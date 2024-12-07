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
