

document.addEventListener('DOMContentLoaded', function() {
  loadJSON();
  });

function loadJSON() {
  let requestURL = "data.json";
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    let data = request.response;
    showData(data);
    showTable(data);
  }
}
function  showData(jsonObj){
  let data = jsonObj["data"];
  let myH1 = document.createElement('p');
  myH1.className = 'inner-txt';
  myH1.textContent = data[0].temp;
  let capInt = data[0].temp;
  let first = document.getElementById("captint")
  first.appendChild(myH1);

  let myH2 = document.createElement('p');
  myH2.className = 'inner-txt';
  myH2.textContent = data[1].temp;
  let capExt = data[1].temp;
  let second = document.getElementById("captext")
  second.appendChild(myH2);

  cursor(capInt,capExt);
}
function showTable(jsonObj) {
  let data = jsonObj["data"];
  let table = document.getElementById("tablebody");

  for (let i=0; i<6; i++) {
    let tr = document.createElement('tr');
    let temperature = document.createElement('td');
    let description = document.createElement('td');
    let capteur = document.createElement('td');
    temperature.textContent = data[i].temp;
    description.textContent = data[i].descr;
    capteur.textContent = data[i].capteur;
    tr.appendChild(temperature);
    tr.appendChild(description);
    tr.appendChild(capteur);
    table.appendChild(tr);


  }
}

function cursor(cap1,cap2){
  let rotate1 = document.getElementById("rotate1"), rotate2 = document.getElementById('rotate2');
  if(30 > rotate1.style.rotate < 270) {
    rotate1.style.transform = "rotate(" + ((cap1*5) - 50) + "deg)";
  }
  if(30 > rotate2.style.rotate < 270) {
    rotate2.style.transform = "rotate(" + ((cap2*5) - 50) + "deg)";
  }
}

async function Square() {
    let abody = document.getElementsByTagName('body')[0];
    let innerDiv = document.createElement('div');
    innerDiv.className = 'square';
    innerDiv.id = 'Square';
    innerDiv.style.top = getRandomTop() + 'px';
    innerDiv.style.left = getRandomLeft() + 'px';
    let size = getRandomSize() + 'px';
    innerDiv.style.width = size;
    innerDiv.style.height = size;
    abody.appendChild(innerDiv);
    await sleep(2000);
    innerDiv.remove();
  }

setInterval(Square,getRandomTime());


function getRandomTop() {
  return Math.random() * (1000 - 0) + 0;
}
function getRandomLeft() {
  return Math.random() * (1500 - 0) + 0;
}
function getRandomSize() {
  return Math.random() * (150 - 25) + 25;
}
function getRandomTime() {
  return Math.random() * (300 - 100) + 500;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}










