
document.getElementById("sesion");
console.log("boton Iniciar Sesión");

// CAMBIO DE NOMBRE DEL BOTON DE INICIAR SESION:
document.getElementById("sesion").onclick = () => {
    console.log("Click en Iniciar Sesion");
    document.getElementById("sesion").innerText = "Cerrar Sesión";
}

// OCULTAR BOTON DE AGREGAR DEFINICIÓN:
document.getElementById("add-def").onclick = () => {
    console.log("Click en Agregar Definición");
    document.getElementById("add-def").style.display = "none"
}

// ALERTA DE CLICK EN EL BOTON DE ME GUSTA, EN MI CASO ELEGÍ EL DE GOLDEN RETRIVER:
document.getElementById("mg-perro").onclick = () => {
    console.log("Click en Me gusta Golden Retriver");
    alert("Le has dado un me gusta a la raza de perro Golden Retriver ❤️")
    
}
