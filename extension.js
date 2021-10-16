debugger;
document.addEventListener("DOMContentLoaded", function(event) {
    getConaguaTimeRange();
  });
  function getConaguaTimeRange(){
    const fecha = moment().add(5, 'hours');
    const arrayFechas = [];
    for (let i = 1; i < 9; i++) {
        const newFecha = moment(fecha).add((i * 10), 'm');
        arrayFechas.push((newFecha.format('YYYYMMDDHHmm')).replace(/.$/,"0"));
    }

    var newsArray = arrayFechas;   // your code puts strings into this array
var curNewsIndex = -1;

var intervalID = setInterval(function() {
    ++curNewsIndex;
    if (curNewsIndex >= newsArray.length) {
        curNewsIndex = 0;
    }
    document.getElementById('images').src = 'https://smn.conagua.gob.mx/tools/RESOURCES/GOES/GOES%20Este/M%C3%A9xico/Tope%20de%20Nubes/MEDIA/'+newsArray[curNewsIndex]+'.jpg';   // set new news item into the ticker
}, 500);
}