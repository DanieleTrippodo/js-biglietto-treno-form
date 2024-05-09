

// # Chiediamo all'utente le informazioni sul suo biglietto
let Chilometri = parseInt(prompt("Quanti chilometri devi percorrere?"));
let eta = parseInt(prompt("Quanti anni hai?"));


// # calcolare il prezzo del biglietto in base ai chilometri in centesimi
let PrezzoBiglietto = Chilometri * 0.267113; 


/* sconto Minorenni */
const ScontoMinorenni = 24.552;
const ScontoMinorenniPercentuale = ScontoMinorenni.toFixed(3);

/* sconto Over65 */
const ScontoOver65 = 37.893;
const ScontoOver65Percentuale = ScontoOver65.toFixed(3);







//# Controlliamo l'età dell'utente e Apllichiamo lo Sconto
if (eta <= 18) {
    console.log(PrezzoBiglietto / ScontoMinorenni * 100)
    

}else if(eta >= 65){
    console.log(PrezzoBiglietto / ScontoOver65 * 100)
}else{
    console.log(PrezzoBiglietto.toFixed(4)) /* per restituire il prezzo totale */
}