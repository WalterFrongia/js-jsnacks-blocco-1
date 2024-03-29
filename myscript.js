// SNAK 1

/**
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */
 
//  let sommaFor = 0;
 
//  for (let i = 0; i < 5; i++){
//      sommaFor = sommaFor + parseInt( prompt ("inserisci un numero") );
//  }
//  console.log(sommaFor);


//  let sommaWhile = 0;

//  let j = 0;
//  while ( j < 5) {
//      sommaWhile += parseInt ( prompt ("inserisci un numero") );
//      j++;
//  }
// console.log(sommaWhile);


// SNAK 2

/**
 * 
 * Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
 * una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
 * Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
 * 
 */


 listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
 listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];

let listaInvitati =[];


for( let i = 0; i < 8; i++){

    let indiceNomeRandomico = Math.floor(Math.random() * listaNomi.length);
    let indiceCognomeRandomico = Math.floor(Math.random() * listaCognomi.length);

    console.log(indiceNomeRandomico);
    console.log(indiceCognomeRandomico);

    let nomeInteroRandomico = listaNomi [indiceNomeRandomico] + ' '
                            +  listaCognomi [indiceCognomeRandomico];

    console.log(nomeInteroRandomico);

    listaInvitati.push(nomeInteroRandomico);
    document.getElementById("lista-invitati").innerHTML += '<li>' + nomeInteroRandomico + '</li>';

}

document.getElementById("lista-nomi").innerHTML = listaNomi.toString();
document.getElementById("lista-cognomi").innerHTML = listaCognomi.toString();







// SNAK 3

// **
//  *  A)
//  *   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
//  *   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
//  *   tanti quanti l'altro.
//  * 
//  *  B)
//  *  Mostriamo in HTML le due liste in parallelo
//  */