function verificarFruta(nomeFruta) {
    switch (nomeFruta.toLowerCase()) {
        case "maçã":
            console.log("Não vendemos esta fruta aqui");
            break;
        case "kiwi":
            console.log("Estamos com escassez de kiwis");
            break;
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo");
            break;
        default:
            console.log("Erro: Fruta não reconhecida");
    }
}

// Exemplo de uso:
verificarFruta("maçã");
verificarFruta("kiwi");
verificarFruta("melancia");
verificarFruta("laranja"); // Exemplo de fruta não reconhecida
