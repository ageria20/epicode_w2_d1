/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

 I principale tipi di dato in JavaScript sono:
 1. Tipo di dato Stringa: questo tipo di dato è definito da due apici, "", in cui all'interno possiamo metterci ciò che vogliamo
 es. let var = "a56#fnfe@.,,,feòfùùàò";
 2. Tipo di dato Numero: questo tipo di dato può contenere soltanto numeri.
 es. let number = 0424;
 4. Tipo di dato Booleano: a questo tipo di dato possiamo assegnare solamente valori di tipo true e false, che rispettivamente coincidono a 1 e 0.
 es. let bool = true --> l'output sarà true ma il valore assegnato all'output sarà 1, in caso di false sarà 0
 5. Tipo di dato null: questo tipo di dato ci indica una mancanza volontaria di un valore dentro una variabile.
 es. let var = null; 
 6. Tipo di dato Undefined: questo è tipo di dato ci indica che una variabile non è stata definita 
 es. let var --> l'output sarà 'undefined';

 

*/


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


const myName = "Andrea";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


const number1 = 12;
const number2 = 20;
const sum = number1 + number2;
console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/


const x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


//const myName = "Geria";
// L'output genererà un errore in quanto non è possibile riassegnare un valore ad una variabile già definita tramite il costrutto const.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


const diff = x - 4;
console.log(diff);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/


const name1 = "john";
let name2 = "John";
const control = (name1 !== name2) ? "La stringa 1 è diversa dalla stringa 2" : "Le stringhe sono uguali";
console.log(control);
name2 = name2.toLowerCase();
const lower = (name1 === name2);
console.log(lower);