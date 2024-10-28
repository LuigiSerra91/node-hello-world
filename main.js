/* 
Creiamo la prima applicazione con NodeJs:

fate girare lo script usando node main.js
*/

//Iniziate creando un file main.js con un semplice console.log che dica hello node js

console.log('Hello node js');

//aggiungete allo script una variabile di ambiente chiamata PIN  con associato numero a piacere es. PIN=666

const adminPin = 666

//usate il modulo process per recuperare e stampare in console dalla proprietá env la variabile PIN

const pin = process.env.PIN

//ora passate un argomento al vostro script e recuperatene il valore usando process e la proprietá argv per stamparlo in console

const admin = process.argv.slice(2)
console.log(process.env.PIN);
console.log(process.argv);

// Bonus:
//se il valore dell'argomento é admin ed il valore di PIN definito é 666 allora stampa in console Welcome Admin
//altrimenti stampa Access restricted

if(pin == adminPin && admin == 'admin'){
    console.log('Welcome Admin');
    
} else{
    console.log('Access restricted');
    
}
