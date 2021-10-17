debugger;
document.addEventListener("DOMContentLoaded", async function(event) {
    setTimeout(function(){
        cargarTodo();
        document.getElementById('loader').style.display = 'none';
        document.getElementById('imagenes').style.display = 'block';
    }, 1500);

  });
function cargarTodo(){
        const data = getImageUrl();
        loadImages(data);
        runAnimation(data);
}
  async function loadImages(arrImages){
    const img = [];
    for (let i = 0; i < arrImages.length; i++) {
        const element = arrImages[i];
        const img = document.createElement("img");
        img.id = i;
        img.src = 'https://smn.conagua.gob.mx/tools/RESOURCES/GOES/GOES%20Este/M%C3%A9xico/Tope%20de%20Nubes/MEDIA/'+element+'.jpg';
        img.style.display = 'none';
        img.style.height = '500px'; 
        if(img){
            document.getElementById('imagenes').appendChild(img);
        }
    }
  }
    function getImageUrl(){
    const fecha = moment().add(5, 'hours');
    const arrayFechas = [];
    for (let i = 1; i < 10; i++) {
        const newFecha = moment(fecha).add((i * 10), 'm');
        arrayFechas.push((newFecha.format('YYYYMMDDHHmm')).replace(/.$/,"0"));
    }
    return arrayFechas;
    }

function runAnimation(arrayFechas){
    var index = 0;
    console.log(arrayFechas);
    var intervalID = setInterval(function() {
    ++index;
    if (index >= arrayFechas.length) {
        document.getElementById(arrayFechas.length-1).style.display = 'none';
        index = 0;
    }else{
        document.getElementById(index - 1).style.display = 'none';
    }
    document.getElementById(index).style.display = ' block'
    console.log(index);
}, 500);
}