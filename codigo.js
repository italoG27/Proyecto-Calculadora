let pantalla = document.getElementById("pantalla");

function Agregar(dato) {
  if (!pantalla) pantalla = document.getElementById("pantalla");
  pantalla.value += dato;
}

function Eliminar() {
  if (!pantalla) pantalla = document.getElementById("pantalla");
  pantalla.value = pantalla.value.slice(0, -1);
}


function LimpiarTodo() {
  if (!pantalla) pantalla = document.getElementById("pantalla");
  pantalla.value = "";
}





function Calcular() {
  if (!pantalla) pantalla = document.getElementById("pantalla");
  try {
    let expresion = pantalla.value.replace(/÷/g, '/');
    pantalla.value = eval(expresion);
  } catch (e) {
    pantalla.value = "Error";
  }
}

function Restar() {
  Calcular();
}

function Multiplicar() {
  Calcular();
}

function Division() {
  Calcular();
}

const imagenes = {
  suma: [
    "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&q=80",
    "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&q=80"
  ],
  resta: [
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&q=80",
    "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=500&q=80"
  ],
  multiplicacion: [
    "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=500&q=80",
    "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500&q=80"
  ],
  division: [
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&q=80",
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&q=80"
  ]
};

let estados = {};

function cambiarImagen(tipo) {
  let img = document.getElementById(`img-${tipo}`);
  if (img) {
    estados[tipo] = !estados[tipo];
    img.src = estados[tipo] ? imagenes[tipo][1] : imagenes[tipo][0];
  }
}