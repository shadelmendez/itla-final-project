const serviceName = document.getElementById("serviceName");
const price = document.getElementById("price");
const carType = document.getElementById("carType");
const addService = document.getElementById("add-service");
const addRow = document.querySelector("table tbody");

const setNewService = (e) => {
  e.preventDefault();

  const newService = {
    serviceName: serviceName.value,
    price: price.value,
    carType: carType.value,
  };

  const services = JSON.parse(localStorage.getItem("services")) || [];
  services.push(newService);
  localStorage.setItem("services", JSON.stringify(services));
  updateTable();

  addService.reset();
};

const updateTable = () => {
  addRow.innerHTML = "";

  const services = JSON.parse(localStorage.getItem("services")) || [];

  services.forEach((user, index) => {
    const row = `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${user.serviceName}</td>
        <td>${user.price}</td>
        <td>${user.carType}</td>
        <td><button class="btn btn-sm" style="color: #4E7317; background-color: #CBF291;" onclick="deleteService(${index})">Eliminar</button></td>
      </tr>
    `;
    addRow.innerHTML += row;
  });
};

const deleteService = (index) => {
  const services = JSON.parse(localStorage.getItem("services")) || [];
  services.splice(index, 1);
  localStorage.setItem("services", JSON.stringify(services));
  updateTable();
};

addService.addEventListener("submit", setNewService);

updateTable();
