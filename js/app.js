//Variables
const nombreFecha = document.getElementsByClassName('nombre');
const datos =   document.getElementsByClassName('parrafos');

//Listeners
EventsListeners();
function EventsListeners() {
    document.addEventListener('DOMContentLoaded', cargarInformacion);
}

//Evenros
function cargarInformacion(){
    cargarFecha();
    cargarDatos();
}

function cargarFecha() {
    //Instanciamos el objeto fecha
    const date = new Date();

    //Obtenemos el año, dia y mes
    const obtenerAnio = date.getFullYear();
    const obtenerDia = date.getDate();
    const mes = date.getMonth();

    //El metodo getMonth() devuelve un numero, lo convertimos a el nombre del mes correspondiente
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const obtenerMes = meses[mes];

    //Creamos nuestro template literal para agregarlo a nuestro parrafo
    const fecha = `${obtenerDia} de ${obtenerMes} de ${obtenerAnio}`;


    let agregarFecha = Array.from(nombreFecha);

    agregarFecha.forEach(function(caja){
    //Creamos un parrafo para añadirlo al HTML
    const parrafoFecha = document.createElement('p');
    //Añadimos la clase fecha a nuestro parrafo
    parrafoFecha.classList = 'fecha';
    //Añadimos la fecha obtenida a nuestro parrafo
    parrafoFecha.innerHTML = fecha;
    //Añadimos nuestro parrafo al DOM
    caja.appendChild(parrafoFecha);
    });
}

function cargarDatos(){

    obtenerDatosMundial();
    obtenerDatosMundial2();
}

function obtenerDatosMundial(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://api.thevirustracker.com/free-api?global=stats',true);
    xhr.onload = function(){
        if(this.status === 200 ){
            const mundo = JSON.parse(this.responseText);

            //Casos confirmados
            //Creamos un nuevo parrafo
            const confirmados = document.createElement('p');
            //Accedemos al dato de la API
            const numeroConfirmados = `${mundo.results[0].total_cases}`;
            //El valor que obtivimos lo guardamos en el parrafo
            confirmados.innerHTML = numeroConfirmados;
            //Insertamos al DOM todoMundo[n].childer[1] donde n
            //es el numero de parrafos, cada pais tiene 3 parrafos
            datos[0].insertBefore(confirmados, datos[0].children[1]);

            //Casos recuperados
            //Creamos un nuevo parrafo
            const recuperados = document.createElement('p');
            //Accedemos al dato de la API
            const numeroRecuperados = `${mundo.results[0].total_recovered}`;
            //El valor que obtivimos lo guardamos en el parrafo
            recuperados.innerHTML = numeroRecuperados;
            //Insertamos al DOM datos[n].childer[1] donde n
            //es el numero de parrafos, cada pais tiene 3 parrafos
            datos[1].insertBefore(recuperados, datos[1].children[1]);

            //Casos muertes
            //Creamos un nuevo parrafo
            const muertes = document.createElement('p');
            //Accedemos al dato de la API
            const numeroMuertes = `${mundo.results[0].total_deaths}`;
            //El valor que obtivimos lo guardamos en el parrafo
            muertes.innerHTML = numeroMuertes;
            //Insertamos al DOM datos[n].childer[1] donde n
            //es el numero de parrafos, cada pais tiene 3 parrafoss
            datos[2].insertBefore(muertes, datos[2].children[1]);
        }
    }
    xhr.send();
}


function obtenerDatosMundial2(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://api.thevirustracker.com/free-api?countryTotal=MX',true);
    xhr.onload = function(){
        if(this.status === 200 ){
            const mx = JSON.parse(this.responseText);

            //Casos confirmados
            //Creamos un nuevo parrafo
            const confirmados = document.createElement('p');
            //Accedemos al dato de la API
            const numeroConfirmados = `${mx.countrydata[0].total_cases}`;
            //El valor que obtivimos lo guardamos en el parrafo
            confirmados.innerHTML = numeroConfirmados;
            //Insertamos al DOM datos[n].childer[1] donde n
            //es el numero de parrafos, cada pais tiene 3 parrafos
            datos[3].insertBefore(confirmados, datos[3].children[1]);

            //Casos recuperados
            //Creamos un nuevo parrafo
            const recuperados = document.createElement('p');
            //Accedemos al dato de la API
            const numeroRecuperados = `${mx.countrydata[0].total_recovered}`;
            //El valor que obtivimos lo guardamos en el parrafo
            recuperados.innerHTML = numeroRecuperados;
            //Insertamos al DOM datos[n].childer[1] donde n
            //es el numero de parrafos, cada pais tiene 3 parrafos
            datos[4].insertBefore(recuperados, datos[4].children[1]);

            //CMuertes
            //Creamos un nuevo parrafo
            const muertes = document.createElement('p');
            //Accedemos al dato de la API
            const numeroMuertes = `${mx.countrydata[0].total_deaths}`;
            //El valor que obtivimos lo guardamos en el parrafo
            muertes.innerHTML = numeroMuertes;
            //Insertamos al DOM datos[n].childer[1] donde n
            //es el numero de parrafos, cada pais tiene 3 parrafos
            datos[5].insertBefore(muertes, datos[5].children[1]);
        }
    }
    xhr.send();
}

