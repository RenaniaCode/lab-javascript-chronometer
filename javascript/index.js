const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code go
  let minutes = chronometer.getMinutes();

  if(minutes < 10){
    minUniElement.innerText = minutes;  
    minDecElement.innerText = 0;
  }else if(minutes >= 10){
  minutes = minutes.toString();
  let minD = minutes[0]
  let minU = minutes[1]
  minDecElement.innerText = Number(minD);
  minUniElement.innerText = Number(minU);
  }
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.getSeconds();

  if(seconds < 10){
    secUniElement.innerText = seconds;
    secDecElement.innerText = 0;
  }else if(seconds >= 10){

  seconds = seconds.toString();
  let secD = seconds[0]
  let secU = seconds[1]
  
  secDecElement.innerText = Number(secD);
  secUniElement.innerText = Number(secU);
  }
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here 
}

function printSplit() {
  // ... your code goes here
  let splitTime = chronometer.split();
  let oneSplit = document.createElement('li');
  oneSplit.className = 'splitsChild';
  oneSplit.innerHTML = `
  ${splitTime}`;
  splitsElement.appendChild(oneSplit);
}

function clearSplits() {
  // ... your code goes here
  const parent = document.querySelectorAll('li');//querySelector genera un array de NodeList en la cual se puede usar un forEach ---- el getElementsById genera un objeto con caracteres HTML
  parent.forEach(element =>{element.remove()})//con este forEach estamos eliminando cada uno de los elementos del nodeList generado por el querySelector
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';

  chronometer.stop();
}

function setSplitBtn() {
  // ... your code goes here
  printSplit();
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.className = 'btn stop'
  btnLeftElement.innerHTML = 'STOP'
  btnRightElement.className = 'btn split'
  btnRightElement.innerHTML = 'SPLIT'

  chronometer.start();
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  clearSplits();
  let ol = splitsElement
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  //condiciones para llamar funciones
  if(btnLeftElement.innerHTML === 'START'){
    setStartBtn();
  } else {
    setStopBtn();}
  //refresca el tiempo impreso, no se relaciona con el valor del boton
  setInterval(()=>(printTime()),1000);
});


// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.innerHTML === 'SPLIT'){
    setSplitBtn();
  } else {
    setResetBtn()}
});
