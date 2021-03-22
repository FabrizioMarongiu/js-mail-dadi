/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/

// console.log('ciao');

// var mail = ['pippo@gmail.com', 'luca@gmail.com', 'laura@gmail.com', 'patrizia@gmail.com'];

// var tuaMail = prompt('Inserisci la tua mail');

// var mailTrovata = false;

// for ( var i = 0; i < mail.length; i++ ){
//     console.log(mail[i]);
//     if ( tuaMail === mail[i]){
//         mailTrovata=true;
//         break;
//     }
// }


// if ( mailTrovata === true){
//     console.log('La tua mail è presente nella lista');

// }else{ 
// console.log('La mail non è stata trovata');
// }


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
var nomeGiocatore = prompt('Ciao, digita il tuo nome per iniziare a giocare:')


alert('Questo gioco ti permette di sfidare l\'avversario James al gioco di dadi...Iniziamo!');

var number1 = (Math.random()*6) + 1;

var giocatore = number1.toFixed();
console.log(giocatore);

var number2 = (Math.random()*6) + 1;

var james = number2.toFixed();
console.log(james);

if (giocatore > james){
    console.log('Bravo ', nomeGiocatore, ' hai vinto!!')
}else if (giocatore < james){
    console.log('Ha vinto James!!')
}else if (giocatore == james){
    console.log('Parità...è uscito lo stesso numero')

}
