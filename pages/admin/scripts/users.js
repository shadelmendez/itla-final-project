const addUser = document.getElementById("add-user");
const username = document.getElementById("username");
const address = document.getElementById("address");
const identifier = document.getElementById("identifier");
const rol = document.getElementById("rol");
const email = document.getElementById("email");
const password = document.getElementById("password");
const contact = document.getElementById("contact");

const addRow = document.querySelector("table tbody");

const setNewUser = (e) => {
  e.preventDefault();

  if (rol.value === "...") {
    alert("Debe seleccionar un rol válido");
    return;
  }

  const newUser = {
    nombre: username.value,
    correo: email.value,
    password: password.value, // password souldve been encrypted/hashed but alas
    direccion: address.value,
    contacto: contact.value,
    cedula: identifier.value,
    rol: rol.value,
  };

  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  updateTable();

  addUser.reset();
};

const updateTable = () => {
  addRow.innerHTML = "";

  const users = JSON.parse(localStorage.getItem("users")) || [];

  users.forEach((user, index) => {
    const row = `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${user.nombre}</td>
        <td>${user.correo}</td>
        <td>${user.password}</td>
        <td>${user.direccion}</td>
        <td>${user.contacto}</td>
        <td>${user.cedula}</td>
        <td>${user.rol}</td>
        <td><button class="btn btn-sm" style="color: #4E7317; background-color: #CBF291;" onclick="deleteUser(${index})">Eliminar</button></td>
      </tr>
    `;
    addRow.innerHTML += row;
  });
};

const deleteUser = (index) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  updateTable();
};

addUser.addEventListener("submit", setNewUser);

updateTable();
