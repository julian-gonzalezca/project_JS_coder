// const buscar = document.querySelector("#buscar");
// const card_text = document.querySelector(".card-text");
// const marca = document.querySelector("#marca");
// let testAdd = document.createElement("ul");

// const autos = ["renault", "chevrolet", "dodge", "toyota", "subaru"];

// buscar.classList.add("test");
// console.log(buscar.classList);
// buscar.classList.remove("test");
// console.log(buscar.classList);
// marca.innerHTML = '<a href="#">Renault</a>';
// testAdd.classList.add("newClass");
// // testAdd.innerHTML = `<li class='newSubClass'>${autos[0]}</li>`;
// // testAdd.innerHTML += `<li class='newSubClass'>${autos[1]}</li>`;
// // testAdd.innerHTML += `<li class='newSubClass'>${autos[2]}</li>`;
// // testAdd.innerHTML += `<li class='newSubClass'>${autos[3]}</li>`;

// for (auto of autos) {
//   testAdd.innerHTML += `<li class = 'newSubClass'>${auto}</li>`;
// }
// card_text.append(testAdd);

// // /*Eventos del Mause*/
// const buscar = document.querySelector("#buscar");
// buscar.addEventListener("click", mostrarAlerta);

// function mostrarAlerta() {
//   alert("hello world");
// }

// buscar.addEventListener("mouseover", () => {
//   console.log("hello world");
// });

//funciones
function cambiarModoColor() {
  body.classList.toggle("bg-dark");
  if (body.classList.contains("bg-dark")) {
    botonModoOscuro.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  } else {
    botonModoOscuro.innerHTML = '<i class="bi bi-moon-fill"></i>';
  }
}

function obtenerCriterio(event) {
  event.preventDefault();
  //console.log(criterio);
  marca.innerHTML = buscarImput.value;
  console.log(buscarImput.value);
}
//variables
const botonModoOscuro = document.querySelector("#color-mode");
const body = document.body;
const buscarForm = document.querySelector("#buscar");
const buscarImput = document.querySelector("#buscar-input");
const marca = document.querySelector("#marca");

//switch color-mode
botonModoOscuro.addEventListener("click", cambiarModoColor);

//busqueda
//cuando se haga submit
buscarForm.addEventListener("submit", obtenerCriterio);
// buscarForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let criterio = buscarImput.value;
//   console.log(criterio);
//   buscarForm.reset();
// });

//Agg form

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Administrador de autos
//funciones
function addVehiculo() {
  let marca = prompt("Ingrese marca: ");
  let modelo = prompt("Ingrese modelo: ");
  let year = parseInt(prompt("Ingrese año: "));
  let precio = parseInt(prompt("Ingrese precio: "));
  autos[autos.length] = new Vehiculo(marca, modelo, year, precio);
}
function listarVehiculos(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `COD: [${i}] Marca: ${array[i].marca} | Modelo: ${array[i].modelo} - ${array[i].year} | Precio: $${array[i].precio}`
    );
  }
}
function separacion() {
  console.log(
    "_________________________________________________________________\n\n"
  );
}
function msjDefault() {
  console.log("Ingrese una opcion\n\n");
}
function resultadoBusqueda(resultado) {
  if (resultado.length == 0) {
    console.log("No se encuentran coincidencias!\n\n");
  } else {
    listarVehiculos(resultado);
    separacion();
  }
}

//clase constructora
class Vehiculo {
  constructor(marca, modelo, year, precio) {
    (this.marca = marca),
      (this.modelo = modelo),
      (this.year = year),
      (this.precio = precio);
  }
}

//array / variables
let index;
let criterio;
let busqueda;
let resultado;
const autos = [
  new Vehiculo("toyota", "celica", 1980, 8900),
  new Vehiculo("renault", "twingo", 2001, 1000),
  new Vehiculo("ford", "f150", 1990, 7500),
  new Vehiculo("chevrolet", "spark", 2008, 3400),
  new Vehiculo("dodge", "caliber", 2004, 7500),
  new Vehiculo("renault", "megane", 2002, 2000),
  new Vehiculo("peugeot", "202", 2003, 1700),
];
let opcion = parseInt(
  prompt(
    "Ingrese opcion segun el indice: \n[1] Listar Vehiculos \n[2] Agregar Vehiculo \n[3] Eliminar Vehiculo \n[4] Buscar \n[0] Salir"
  )
);
//menu
while (opcion != 0) {
  switch (opcion) {
    case 1:
      listarVehiculos(autos);
      separacion();
      //console.table(autos);
      break;
    case 2:
      addVehiculo();
      break;
    case 3:
      listarVehiculos(autos);
      separacion();
      index = parseInt(prompt("Ingrese COD de vehiculo a eliminar: "));
      autos.splice(index, 1);
      break;
    case 4:
      criterio = parseInt(
        prompt(
          "Ingrese criterio de busqueda segun el indice: \n[1] Marca \n[2] Modelo \n[3] año \n[0] Salir"
        )
      );
      while (criterio != 0) {
        switch (criterio) {
          case 1:
            busqueda = prompt("Ingrese marca a buscar: ");
            resultado = autos.filter((auto) => auto.marca === busqueda);
            resultadoBusqueda(resultado);
            break;
          case 2:
            busqueda = prompt("Ingrese modelo a buscar: ");
            resultado = autos.filter((auto) => auto.modelo === busqueda);
            resultadoBusqueda(resultado);
            break;
          case 3:
            busqueda = parseInt(prompt("Ingrese año a buscar: "));
            resultado = autos.filter((auto) => auto.year === busqueda);
            resultadoBusqueda(resultado);
            break;
          default:
            msjDefault();
            break;
        }
        criterio = parseInt(
          prompt(
            "Ingrese criterio de busqueda segun el indice: \n[1] Marca \n[2] Modelo \n[3] año \n[0] Salir"
          )
        );
      }
    default:
      msjDefault();
      break;
  }
  opcion = parseInt(
    prompt(
      "Ingrese opcion segun el indice: \n[1] Listar Vehiculos \n[2] Agregar Vehiculo \n[3] Eliminar Vehiculo \n[4] Buscar \n[0] Salir"
    )
  );
}
//console.table(autos);
