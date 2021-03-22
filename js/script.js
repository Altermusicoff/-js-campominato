// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente(100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//   BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: : party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri ?
//   Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante: occhiolino:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…




var startBtn = document.getElementById('start');
var resetBtn = document.getElementById('reset');




// fun genera numeri random [min, max]
function getRnd(min, max) {
  var minRnd = min;
  var maxRnd = max - minRnd + 1;
  var rnd = Math.floor(Math.random() * maxRnd) + minRnd;
  return rnd;
}

function getBombs(){
  var arrBombs = [];
  for (var i = 0; i < 16; i++) {

    var bombs = getRnd(1, 100);

    if (!arrBombs.includes(bombs)) {
      arrBombs.push(bombs)
    }
    else {
      i--;
    }
  }
  console.log(boxBombs);
  return boxBombs;
}

function theGame(){

  var boxSteps = [];

  for (var i = 0; i < 100; i++) {

    var steps = parseInt(prompt('Take a step, but be careful!'));

    if (boxBombs.includes(steps)) {
      alert('YOU BOOMED! Collect your pieces with a spoon!!!');
      break;
    }

    else if (!boxSteps.includes(steps)) {
      boxSteps.push(steps);
    }

    else if (boxSteps.includes(steps)) {
      alert('Go on! You have already been here!');
      i--;
    }

    else if (steps === " ") {
      alert('Invalid step!');

    }

    var winner = document.getElementById('winner');
    winner.innerHTML('YOU SURVIVED')

  };
}


















// // calcola num random compreso [min, max]
// function getRandomValue(min, max) {
//   var localMin = min;
//   var localMax = max - min + 1;
//   return Math.floor(Math.random() * localMax) + localMin
// }
// // calcolo array di numeri casuali compresi [1, rangeMax] 
// function getRandomArray(rangeMax) {
//   var randomValues = [];
//   // finche' array non ha dimensione suff
//   while (randomValues.length < 16) {
//     var rnd = getRandomValue(1, rangeMax);
//     if (!randomValues.includes(rnd)) { // se il valore non e' pres.
//       // nell'array
//       randomValues.push(rnd);          // allora lo inserisco
//     }
//   }
//   return randomValues;
// }
// function playGame(rangeMax, randomValues) {
//   // num. valori richiesti per vincere
//   var requestedValue = rangeMax - randomValues.length;
//   // array di valori forniti dall'utente
//   var userValues = [];
//   // finche' l'utente non ha inserito abbastanza valori buoni
//   while (userValues.length < requestedValue) {
//     var newValue = parseInt(prompt('Dammi numero'));
//     // valuto se il valore e' fuori range o gia' inserito
//     if (newValue < 1
//       || newValue > 100
//       || userValues.includes(newValue)) {
//       // notifico e permetto di continuare
//       console.log('Valore non utilizzabile. Si prega di riprovare');
//     } else {
//       // valuto se il valore e' minato
//       if (randomValues.includes(newValue)) {
//         // fine del gioco (perso)
//         console.log('End of game');
//         return false;
//       } else {
//         // inserisco valore fornito dall'utente
//         userValues.push(newValue);
//       }
//     }
//     console.log(userValues);
//   }
//   // fine del gioco (vinto)
//   return true;
// }
// // BONUS: calcolo range a partire da livello utente
// function getLevel() {
//   var lvl = parseInt(prompt('A che livello vuoi giocare?'));
//   // defin. rangeMax in base a lvl scelto dall'utente
//   switch (lvl) {
//     case 0:
//       var rangeMax = 30;
//       break;
//     case 1:
//       var rangeMax = 25;
//       break;
//     case 2:
//       var rangeMax = 20;
//       break;
//   }
//   return rangeMax;
// }
// function init() {
//   // ottengo rangeMax a partire dal lvl chiesto all'utente
//   var rangeMax = getLevel();
//   // ottengo array di mine
//   var pcValues = getRandomArray(rangeMax);
//   // loggo array di mine
//   console.log(pcValues);
//   // inizio il gioco
//   var res = playGame(rangeMax, pcValues);
//   // stampo risultato partita
//   if (res) {
//     console.log('Hai vinto');
//   } else {
//     console.log('Hai perso');
//   }
// }
// init();