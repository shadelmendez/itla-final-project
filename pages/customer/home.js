const serviceName = document.getElementById("serviceName");
const carType = document.getElementById("carType");
const brand = document.getElementById("brand");
const model = document.getElementById("model");
const employee = document.getElementById("employee");
const username = document.getElementById("username");
const address = document.getElementById("address");

const addService = document.getElementById("customer-service");
const addRow = document.querySelector("table tbody");

const setService = (e) => {
  e.preventDefault();

  const newService = {
    serviceName: serviceName.value,
    carType: carType.value,
    brand: brand.value,
    model: model.value,
    employee: employee.employee,
    username: username.value,
    address: address.value,
  };

  const services = JSON.parse(localStorage.getItem("customer-services")) || [];
  services.push(newService);
  localStorage.setItem("customer-services", JSON.stringify(services));
  updateTable();

  addService.reset();
};

const updateTable = () => {
  addRow.innerHTML = "";

  const services = JSON.parse(localStorage.getItem("customer-services")) || [];

  services.forEach((user, index) => {
    const row = `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${user.serviceName}</td>
        <td>${user.carType}</td>
        <td>${user.brand}</td>
        <td>${user.model}</td>
        <td>${user.employee}</td>
        <td>${user.nombre}</td>
        <td>${user.address}</td>
        <td><button class="btn btn-sm" style="color: #4E7317; background-color: #CBF291;" onclick="deleteService(${index})">Eliminar</button></td>
      </tr>
    `;
    addRow.innerHTML += row;
  });
};

const setServicesSelection = () => {
  serviceName.innerHTML = "";
  const services = JSON.parse(localStorage.getItem("services")) || [];

  if (!services.length) {
    console.log("No hay servicios guardados.");
    return;
  }

  serviceName.innerHTML += `<option selected>Selecciona un servicio</option>`;

  services.forEach((s) => {
    if (s.serviceName) {
      const option = `<option value="${s.serviceName}">${s.serviceName} - ${s.carType}</option>`;
      serviceName.innerHTML += option;
    }
  });
};

const setCarSelection = () => {
  carType.innerHTML = "";
  const cars = JSON.parse(localStorage.getItem("cars")) || [];

  if (!cars.length) {
    console.log("No hay tipos de vehiculos guardados.");
    return;
  }

  carType.innerHTML += `<option selected>Selecciona un tipo de vehiculo</option>`;

  cars.forEach((c) => {
    if (c.carType) {
      const option = `<option value="${c.carType}">${c.carType} </option>`;
      carType.innerHTML += option;
    }
  });
};

const setEmployeeSelection = () => {
  employee.innerHTML = "";
  const employees = JSON.parse(localStorage.getItem("users")) || [];

  if (!employees.length) {
    console.log("No hay empleados guardados.");
    return;
  }

  employee.innerHTML += `<option selected>Selecciona un empleado</option>`;

  employees.forEach((e) => {
    if (e.nombre && e.rol == "lavador") {
      const option = `<option value="${e.nombre}">${e.nombre} </option>`;
      employee.innerHTML += option;
    }
  });
};

const deleteService = (index) => {
  const services = JSON.parse(localStorage.getItem("customer-services")) || [];
  services.splice(index, 1);
  localStorage.setItem("customer-services", JSON.stringify(services));
  updateTable();
};

addService.addEventListener("submit", setService);

updateTable();
setServicesSelection();
setCarSelection();
setEmployeeSelection();
