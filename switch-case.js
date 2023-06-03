function determinarGanador(jugador1, jugador2) {
    if (jugador1 === jugador2) {
      return "Empate";
    } else if (
      (jugador1 === "R" && jugador2 === "T") ||
      (jugador1 === "T" && jugador2 === "P") ||
      (jugador1 === "P" && jugador2 === "R")
    ) {
      return "Jugador 1 gana";
    } else {
      return "Jugador 2 gana";
    }
  }
  
  // elige P R T
  var jugador1 = "p";
  var jugador2 = "p";
  var resultado = determinarGanador(jugador1, jugador2);
  console.log("Jugador 1: " + jugador1);
  console.log("Jugador 2: " + jugador2);
  console.log(resultado);
  