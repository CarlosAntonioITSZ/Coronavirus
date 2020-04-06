//Variables
const nombreFecha = document.getElementsByClassName('nombre');
const datos = document.getElementsByClassName('datos');
const ranking = document.getElementsByClassName('numero');

//Listeners
EventsListeners();
function EventsListeners() {
    document.addEventListener('DOMContentLoaded', cargarInformacion);
}

//Evenros
function cargarInformacion() {
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

    agregarFecha.forEach(function (caja) {
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

function cargarDatos() {

    obtenerDatosMundial();
    obtenerDatosMX();
    obtenerDatosUS();
    obtenerDatosES();
    obtenerDatosIT();
    obtenerDatosCN();
}

function obtenerDatosMundial() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.thevirustracker.com/free-api?global=stats', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const mundo = JSON.parse(this.responseText);

            const confirmados = formatNumber.new(mundo.results[0].total_cases);
            datos[0].innerHTML = `${confirmados}`;

            const recuperados = formatNumber.new(mundo.results[0].total_recovered);
            datos[1].innerHTML = `${recuperados}`;

            const muertos = formatNumber.new(mundo.results[0].total_deaths);
            datos[2].innerHTML = `${muertos}`;
        }
    }
    xhr.send();
}

function obtenerDatosMX() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.thevirustracker.com/free-api?countryTotal=MX', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const mx = JSON.parse(this.responseText);

            const confirmados = formatNumber.new(mx.countrydata[0].total_cases);
            datos[3].innerHTML = `${confirmados}`;

            const recuperados = formatNumber.new(mx.countrydata[0].total_recovered);
            datos[4].innerHTML = `${recuperados}`;

            const muertos = formatNumber.new(mx.countrydata[0].total_deaths);
            datos[5].innerHTML = `${muertos}`;

            ranking[0].innerHTML = `#${mx.countrydata[0].total_danger_rank}`;
        }
    }
    xhr.send();
}

function obtenerDatosUS() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.thevirustracker.com/free-api?countryTotal=US', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const us = JSON.parse(this.responseText);

            const confirmados = formatNumber.new(us.countrydata[0].total_cases);
            datos[6].innerHTML = `${confirmados}`;

            const recuperados = formatNumber.new(us.countrydata[0].total_recovered);
            datos[7].innerHTML = `${recuperados}`;

            const muertos = formatNumber.new(us.countrydata[0].total_deaths);
            datos[8].innerHTML = `${muertos}`;

            ranking[1].innerHTML = `#${us.countrydata[0].total_danger_rank}`;
        }
    }
    xhr.send();
}

function obtenerDatosES() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.thevirustracker.com/free-api?countryTotal=ES', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const es = JSON.parse(this.responseText);

            const confirmados = formatNumber.new(es.countrydata[0].total_cases);
            datos[9].innerHTML = `${confirmados}`;

            const recuperados = formatNumber.new(es.countrydata[0].total_recovered);
            datos[10].innerHTML = `${recuperados}`;

            const muertos = formatNumber.new(es.countrydata[0].total_deaths);
            datos[11].innerHTML = `${muertos}`;

            ranking[2].innerHTML = `#${es.countrydata[0].total_danger_rank}`;
        }
    }
    xhr.send();
}

function obtenerDatosIT() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.thevirustracker.com/free-api?countryTotal=IT', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const it = JSON.parse(this.responseText);

            const confirmados = formatNumber.new(it.countrydata[0].total_cases);
            datos[12].innerHTML = `${confirmados}`;

            const recuperados = formatNumber.new(it.countrydata[0].total_recovered);    
            datos[13].innerHTML = `${recuperados}`;

            const muertos = formatNumber.new(it.countrydata[0].total_deaths);    
            datos[14].innerHTML = `${muertos}`;

            ranking[3].innerHTML = `#${it.countrydata[0].total_danger_rank}`;
        }
    }
    xhr.send();
}

function obtenerDatosCN() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.thevirustracker.com/free-api?countryTotal=CN', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const cn = JSON.parse(this.responseText);

            const confirmados = formatNumber.new(cn.countrydata[0].total_cases); 
            datos[15].innerHTML = `${confirmados}`;

            const recuperados = formatNumber.new(cn.countrydata[0].total_recovered); 
            datos[16].innerHTML = `${recuperados}`;

            const muertos = formatNumber.new(cn.countrydata[0].total_deaths); 
            datos[17].innerHTML = `${muertos}`;

            ranking[4].innerHTML = `#${cn.countrydata[0].total_danger_rank}`;
        }
    }
    xhr.send();
}

const formatNumber = {
    separador: ".", // separador para los miles
    sepDecimal: ',', // separador para los decimales
    formatear:function (num){
    num +='';
    var splitStr = num.split('.');
    var splitLeft = splitStr[0];
    var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
    var regx = /(\d+)(\d{3})/;
    while (regx.test(splitLeft)) {
    splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
    }
    return this.simbol + splitLeft +splitRight;
    },
    new:function(num, simbol){
    this.simbol = simbol ||'';
    return this.formatear(num);
    }
   }