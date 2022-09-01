/**Variables */
const resultado = document.querySelector('#resultado');


/**Eventos */
// Una vez que cargue el HTML vamos a llamar la función
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
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