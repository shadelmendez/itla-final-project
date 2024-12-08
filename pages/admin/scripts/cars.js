const owner = document.getElementById("owner");
const model = document.getElementById("model");
const brand = document.getElementById("brand");
const carType = document.getElementById("carType");
const addCar = document.getElementById("add-car");
const addRow = document.querySelector("table tbody");

const setNewCar = (e) => {
  e.preventDefault();

  const newCar = {
    owner: owner.value,
    model: model.value,
    brand: brand.value,
    carType: carType.value,
  };

  const cars = JSON.parse(localStorage.getItem("cars")) || [];
  cars.push(newCar);
  localStorage.setItem("cars", JSON.stringify(cars));
  updateTable();

  addCar.reset();
};

const updateTable = () => {
  addRow.innerHTML = "";

  const cars = JSON.parse(localStorage.getItem("cars")) || [];

  cars.forEach((user, index) => {
    const row = `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${user.owner}</td>
        <td>${user.brand}</td>
        <td>${user.model}</td>
        <td>${user.carType}</td>
        <td><button class="btn btn-sm" style="color: #4E7317; background-color: #CBF291;" onclick="deleteCar(${index})">Eliminar</button></td>
      </tr>
    `;
    addRow.innerHTML += row;
  });
};

const deleteCar = (index) => {
  const cars = JSON.parse(localStorage.getItem("cars")) || [];
  cars.splice(index, 1);
  localStorage.setItem("cars", JSON.stringify(cars));
  updateTable();
};

addCar.addEventListener("submit", setNewCar);

updateTable();
