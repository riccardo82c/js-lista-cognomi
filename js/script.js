/* Lista Cognomi.
Chiedere all’utente il cognome inserirlo in un array con altri cognomi:
‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente scrivi anche la posizione 
"umana" della lista in cui il nuovo utente si trova */

// 1. Acquisire il cognome tramite prompt
// 2. Capitalize del nome
// 3. Pushare il nome nell'array [‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’]
// 4. Ordinare l'array
// 5. Stampare a video l'array
// 6. Trovare l'indice dell'elemento inserito e stamparlo a video

// 1. acquisisco il nome
var cognome = prompt("Inserisci il tuo cognome");

// 2. maiuscolo il primo carattere e minuscolo il resto
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();

// 3. push di cognome in listaNomi
var listaNomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
listaNomi.push(cognome);

// 4. sort dell'array (ordinamento)
listaNomi.sort();

// 5. stampa a video dell'array
var listaVideo = "";
for (var i = 0; i < listaNomi.length; i++) {
  listaVideo += "<li>" + listaNomi[i] + "</li>";
}
document.getElementById("lista").innerHTML = listaVideo;

// 6. stampo a video l'indice del nuovo elemento inserito
var indice;
var trovato = false;
var i = 0;
while (!trovato) {
  if (listaNomi[i] == cognome) {
    trovato = true;
    indice = ++i;
  }
  i++;
}

document.getElementById(
  "posizione"
).innerHTML = `Ben arrivato ${cognome} sei inserito alfabeticamente alla posizione numero ${indice}`;

/* ************************************************** */
// proviamo ad utilizzare indexOf ed solo il ciclo while
/* ************************************************** */
// utilizzo listaNomi2 come copia
var listaNomi2 = listaNomi;
var listaVideo2 = "";

console.log(listaNomi2);

var i = 0;
while (i < listaNomi2.length) {
  if (listaNomi2[i] != cognome) {
    listaVideo2 += "<li>" + listaNomi2[i] + "</li>";
  } else {
    listaVideo2 +=
      "<li>" +
      listaNomi2[i] +
      " ti trovi alla posizione " +
      (listaNomi2.indexOf(cognome) + 1) +
      "</li>";
  }
  i++;
}

document.getElementById("lista2").innerHTML = listaVideo2;
