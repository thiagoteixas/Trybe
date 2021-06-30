let estado = "lista";

switch (estado) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    
    case "espera":
        console.log("Você está na nossa lista de espera");
        break;
    
    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;
    
    default:
        console.log("Sei não");
        break;
}