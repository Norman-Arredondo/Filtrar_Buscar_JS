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
    mostrarAutos(autos); // Muestra los autos al cargar

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
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
});

minimo.addEventListener('change', e => {
    //console.log(e.target.value); // Valor que se selecciona Audi, BMW...
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});

maximo.addEventListener('change', e => {
    //console.log(e.target.value); // Valor que se selecciona Audi, BMW...
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});

puertas.addEventListener('change', e => {
    //console.log(e.target.value); // Valor que se selecciona Audi, BMW...
    datosBusqueda.puertas = parseInt(e.target.value);

     // Llamar a una función que se va a encargar de filtrar los autos
     filtrarAuto();
});

transmision.addEventListener('change', e => {
    //console.log(e.target.value); // Valor que se selecciona Audi, BMW...
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', e => {
    //console.log(e.target.value); // Valor que se selecciona Audi, BMW...
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});



/**Funciones */
//Funcion que imprime el HTML
function mostrarAutos(autos) {

    limpiarHTML(); // Elimina el HTML previo

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
        resultado.appendChild(autoHTML); // No borra el contenido previo

    });
}


//Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild) { // Mientras haya algo
        resultado.removeChild(resultado.firstChild);
    }
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
    const resultado = autos.filter(filtrarMarca).filter( filtrarYear ).filter( filtrarMinimo).filter( filtrarMaximo ).filter( filtrarPuertas ).filter(filtrarTransmision).filter(filtrarColor);
    //console.log(resultado)
    mostrarAutos(resultado);
}

function filtrarMarca(auto) {
    /*
    if(datosBusqueda.marca ) {
        return auto.marca === datosBusqueda.marca
    }*/

    const { marca } = datosBusqueda;
    if(marca ) {
        // Filtra el que tenga la misma marca cuando el usuario seleccione alguno
        return auto.marca === marca;
    }
    // Si el usuario no ha seleccionado alguno
    return auto; 

}

function filtrarYear(auto) {
    // En un formulario vienen como string
    // console.log(typeof year);
    // console.log(typeof auto.year)
    const { year } = datosBusqueda;
    if(year) {
        // Filtra el que tenga la misma marca cuando el usuario seleccione alguno
        return auto.year === year; // Operador estricto, revisa el valor y también el tipo de dato
    }
    // Si el usuario no ha seleccionado alguno
    return auto; 
}

// Simepre vaa tomar la iteración del objeto actual
function filtrarMinimo( auto ) {
    const { minimo } = datosBusqueda; // Extraigo el mínimo
    if( minimo ) { // Se ejecuta si hay un mínimo
        
        return auto.precio >= minimo; // Me interesan los de precio mínimo
    }
    // Si el usuario no ha seleccionado alguno
    return auto;
}

function filtrarMaximo( auto ) {
    const { maximo } = datosBusqueda; // Extraigo el maximo
    if( maximo ) { // Se ejecuta si hay un máximo
        
        return auto.precio <= maximo; // Me interesan los de precio máximo
    }
    // Si el usuario no ha seleccionado alguno
    return auto;
}

function filtrarPuertas( auto ) {
    const { puertas } = datosBusqueda;
    if(puertas) {
        
        return auto.puertas === puertas; 
    }
    // Si el usuario no ha seleccionado alguno
    return auto; 
}

function filtrarTransmision( auto ) {
    const { transmision } = datosBusqueda;
    if(transmision) {
        return auto.transmision === transmision; 
    }
    // Si el usuario no ha seleccionado alguno
    return auto; 
}

function filtrarColor( auto ) {
    const { color } = datosBusqueda;
    if(color) {
        return auto.color === color; 
    }
    // Si el usuario no ha seleccionado alguno
    return auto; 
}
