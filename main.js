function ActualizarHora(){
    //Variables
    var fecha = new Date(),
        segundos = fecha.getSeconds(),
        minutos = fecha.getMinutes(),
        horas = fecha.getHours(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();


    var pHoras = document.getElementById("pHoras"),
        pMinutos = document.getElementById("pMinutos"),
        pSegundos = document.getElementById("pSegundos"),
        pDiaSemana = document.getElementById("pDiaSemana"),
        pDia = document.getElementById("pDia"),
        pMes = document.getElementById("pMes"),
        pYear = document.getElementById("pYear"),
        pSaludo = document.getElementById("Saludo");

//Fecha
    var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pDiaSemana.textContent = semana[diaSemana];
    pDia.textContent = dia;
    pMes.textContent = meses[mes];
    pYear.textContent = year;

    pHoras.textContent = horas < 10 ? `0${horas}` : horas;
    pMinutos.textContent = minutos < 10 ? `0${minutos}` : minutos;
    pSegundos.textContent = segundos < 10 ? `0${segundos}` : segundos;

    saludo = 'Buenos Días';
    if (horas >=12){
        saludo = 'Buenas Tardes'
    }
    if (horas >=18){
        saludo = 'Buenas Noches'
    }
    pSaludo.textContent = saludo;
}

setInterval(() => {ActualizarHora()},1000);