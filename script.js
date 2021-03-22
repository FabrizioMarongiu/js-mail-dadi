/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/

console.log('ciao');

var mail = ['pippo@gmail.com', 'luca@gmail.com', 'laura@gmail.com', 'patrizia@gmail.com'];

var tuaMail = prompt('Inserisci la tua mail');

var mailTrovata = false;

for ( var i = 0; i < mail.length; i++ ){
    console.log(mail[i]);
    if ( tuaMail === mail[i]){
        mailTrovata=true;
        break;
    }
}


if ( mailTrovata === true){
    console.log('La tua mail è presente nella lista');

}else{ 
console.log('La mail non è stata trovata');
}