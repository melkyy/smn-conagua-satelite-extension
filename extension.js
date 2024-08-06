debugger;
const CONAGUA_URL =
  "https://smn.conagua.gob.mx/tools/RESOURCES/GOES/GOES%20Este/M%C3%A9xico/Tope%20de%20Nubes/MEDIA/";

document.addEventListener("DOMContentLoaded", async function (event) {
  await load();
  document.getElementById("loader").style.display = "none";
  document.getElementById("images").style.display = "block";
});

async function load() {
  const data = getImageUrl();
  const images = await loadImages(data);
  setTimeout(() => {
    images.forEach((el) => {
      document.getElementById("images").appendChild(el);
    });
  }, 1000);
  runAnimation(data);
}
async function loadImages(arrImages) {
  debugger;
  const images = [];
  for (let i = 0; i < arrImages.length; i++) {
    const element = arrImages[i];
    const img = document.createElement("img");
    img.id = i;
    img.src = CONAGUA_URL + element + ".jpg";
    img.style.display = "none";
    img.style.height = "500px";
    img.loading = "eager";
    if (img) {
      images.push(img);
    }
  }
  return images;
}
function pad2(n) {
  return n < 10 ? "0" + n : n;
}

function getImageUrl() {
  const date = new Date(new Date().setHours(new Date().getHours() + 5));
  const datesArr = [];
  for (let i = 1; i < 10; i++) {
    const minutes = i * 10;
    const newDate = new Date(date.getTime() + minutes * 60000);
    const formatedDate =
      newDate.getFullYear().toString() +
      pad2(newDate.getMonth() + 1) +
      pad2(newDate.getDate()) +
      pad2(newDate.getHours()) +
      pad2(Math.floor(newDate.getMinutes() / 10) * 10);

    datesArr.push(formatedDate);
  }
  return datesArr;
}

function runAnimation(arrayFechas) {
  var index = 0;
  setInterval(function () {
    ++index;
    if (index >= arrayFechas.length) {
      document.getElementById(arrayFechas.length - 1).style.display = "none";
      index = 0;
    } else {
      document.getElementById(index - 1).style.display = "none";
    }
    document.getElementById(index).style.display = " block";
  }, 500);
}
