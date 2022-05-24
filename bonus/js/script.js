/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
(va bene qualsiasi immagine che prendete dal web e/o avete e/o vi scaricate, è indifferente)
*/

// istanziamento
var app = new Vue({
    el: '#root',
    data: {
        message: "And after all we're only ordinary men", 
        album: "https://m.media-amazon.com/images/I/81aTawcGdmL._AC_SL1500_.jpg"                
    }
});