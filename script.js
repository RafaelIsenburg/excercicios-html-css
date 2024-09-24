function interesse() {
    var bolo, cafe, energetico;
    var total = 0;

    // Pergunta se deseja comprar alimentos
    var r = window.confirm("Deseja comprar alimentos?");
    
    if (r == true) {
        // Pergunta sobre o café
        cafe = window.confirm("Deseja comprar café?");
        if (cafe == true) {
            var cafen = prompt("Digite a quantidade de café que deseja comprar:");
            if (cafen != null && cafen > 0) {
                total += cafen * 15;
            }
        }

        // Pergunta sobre o bolo
        bolo = window.confirm("Deseja comprar bolo?");
        if (bolo == true) {
            var bolon = prompt("Digite a quantidade de bolo que deseja comprar:");
            if (bolon != null && bolon > 0) {
                total += bolon * 12;
            }
        }

        // Pergunta sobre o energético
        energetico = window.confirm("Deseja comprar energético?");
        if (energetico == true) {
            var enen = prompt("Digite a quantidade de energético que deseja comprar:");
            if (enen != null && enen > 0) {
                total += enen * 8;
            }
        }

        // Exibe o total no parágrafo com id="resultado"
        document.getElementById("resultado").textContent = `R$ ${total.toFixed(2)}`;
        
    } else {
        document.getElementById("resultado").textContent = "Nenhum alimento comprado.";
    }
}
