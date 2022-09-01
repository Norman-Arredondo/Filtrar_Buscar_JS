/**Variables */
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear(); //Nos va a traer el año actual
const min = max -10;

/**Eventos */
// Una vez que cargue el HTML vamos a llamar la función
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los autos al cargar

    //Llena las opciones de años
    llenarSelect();
});



/**Funciones */
function mostrarAutos() {
    // Iterar sobre autos
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        // Va a ser igual a un template string

        // ${auto.marca}  ${auto.modelo} -> Se le aplica destructuring
        autoHTML.textContent = `
        ${marca}  ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        // Insertar en el html
        resultado.appendChild(autoHTML);

    });
}

// Genera los años del select 
function llenarSelect() {
    for(let i = max; i >= min ; i--) {
        const opcion = document.createElement('option'); // Los select tienen la etiqueta option
        opcion.value = i;
        opcion.textContent = i; 
        year.appendChild(opcion); // Agrega las opciones de año al select
    }
}