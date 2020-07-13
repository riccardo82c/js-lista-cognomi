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
// console.log(cognome);

// 3. push di cognome in listaNomi
var listaNomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
listaNomi.push(cognome);

// 4. sort dell'array (ordinamento)
listaNomi.sort();
console.log(listaNomi);
