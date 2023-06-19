// Codice JavaScript per la gestione del carrello

// Array che conterrà gli oggetti prodotto nel carrello
let carrello = [];

// Funzione per aggiungere un prodotto al carrello
function aggiungiAlCarrello() {
    // Recupera i dati del prodotto dalla scheda prodotto
    let immagine = document.getElementById('immagine-prodotto').src;
    let titolo = document.getElementById('titolo-prodotto').textContent;
    let descrizione = document.getElementById('descrizione-prodotto').textContent;
    let taglia = document.getElementById('taglia-prodotto').value;
    let colore = document.getElementById('colore-prodotto').value;
    let quantita = parseInt(document.getElementById('quantita-prodotto').value);
    let prezzo = 19.99; // Prezzo fisso per tutti i prodotti (esempio)

    // Crea l'oggetto prodotto con i dati recuperati
    let prodotto = {
        immagine: immagine,
        titolo: titolo,
        descrizione: descrizione,
        taglia: taglia,
        colore: colore,
        quantita: quantita,
        prezzo: prezzo
    };

    // Aggiunge il prodotto al carrello
    carrello.push(prodotto);

    // Aggiorna il numero di prodotti nel carrello nell'header
    let numeroProdottiCarrello = document.getElementById('numero-prodotti-carrello');
    numeroProdottiCarrello.textContent = '(' + carrello.length + ')';

    // Chiude la scheda prodotto
    document.getElementById('scheda-prodotto').style.display = 'none';
}

// Funzione per rimuovere un prodotto dal carrello
function rimuoviDalCarrello(index) {
    // Rimuove il prodotto dall'array carrello
    carrello.splice(index, 1);

    // Aggiorna il numero di prodotti nel carrello nell'header
    let numeroProdottiCarrello = document.getElementById('numero-prodotti-carrello');
    numeroProdottiCarrello.textContent = '(' + carrello.length + ')';

    // Aggiorna la tabella del carrello
    aggiornaTabellaCarrello();
}

// Funzione per aggiornare la quantità di un prodotto nel carrello
function aggiornaQuantita(index, quantita) {
    // Aggiorna la quantità del prodotto nell'array carrello
    carrello[index].quantita = quantita;

    // Aggiorna la tabella del carrello
    aggiornaTabellaCarrello();
}

// Funzione per mostrare la scheda prodotto
function mostraSchedaProdotto(idProdotto) {
    // Recupera i dati del prodotto corrispondente all'id dalla scheda prodotto
    let immagine = document.getElementById(idProdotto + '-immagine').src;
    let titolo = document.getElementById(idProdotto + '-titolo').textContent;
