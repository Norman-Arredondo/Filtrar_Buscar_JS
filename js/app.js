/**Variables */
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear(); //Nos va a traer el año actual
const min = max -10;


/** Generar un objeto con la búsqueda */
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
};

/**Eventos */
// Una vez que cargue el HTML vamos a llamar la función
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los autos al cargar

    //Llena las opciones de años
    llenarSelect();
});


/**Event Listener para los select de búsqueda */
// Para leer un select puedes usar change, para cuando cambia el select
marca.addEventListener('change', e => {
    //console.log(e.target.value); // Valor que se selecciona Audi, BMW...
    datosBusqueda.marca = e.target.value;

    // Llamar a una función que se va a encargar de filtrar los autos
    filtrarAuto();
});

year.addEventListener('change', e => {
    //console.log(e.target.value); // Valor que se selecciona Audi, BMW...
    datosBusqueda.year = e.target.value;
});

minimo.addEventListener('change', e => {
    //console.log(e.target.value); // Valor que se selecciona Audi, BMW...
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('change', e => {
    //console.log(e.target.value); // Valor que se selecciona Audi, BMW...
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change', e => {
    //console.log(e.target.value); // Valor que se selecciona Audi, BMW...
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change', e => {
    //console.log(e.target.value); // Valor que se selecciona Audi, BMW...
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change', e => {
    //console.log(e.target.value); // Valor que se selecciona Audi, BMW...
    datosBusqueda.color = e.target.value;

    console.log(datosBusqueda)
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


//Funtion que filtra en base a la búsqueda
function filtrarAuto() {
    // Usualmetne es filter( arrow function) but It will be a high level function
    const resultado = autos.filter(filtrarMarca);
    console.log(resultado)
}

function filtrarMarca(auto) {
    /*
    if(datosBusqueda.marca ) {
        return auto.marca === datosBusqueda.marca
    }*/

    const { marca } = datosBusqueda;
    if(marca ) {
        // Filtra el que tenga la misma marca cuando el usuario seleccione alguno
        return auto.marca === marca
    }

    // Si el usuario no ha seleccionado alguno
    return auto; 

}