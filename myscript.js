// SNAK 1

/**
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */
 
 let sommaFor = 0;
 
 for (let i = 0; i < 5; i++){
     sommaFor = sommaFor + parseInt( prompt ("inserisci un numero") );
 }
 console.log(sommaFor);


 let sommaWhile = 0;

 let j = 0;
 while ( j < 5) {
     sommaWhile += parseInt ( prompt ("inserisci un numero") );
     j++;
 }
console.log(sommaWhile);