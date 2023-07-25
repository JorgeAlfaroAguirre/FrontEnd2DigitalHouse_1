window.onload = () => {
    juguemos();
  };
  
  const juguemos = () => {
    const preguntarNombre = () => {
      let nombre = prompt('¿Cuál es tu nombre?');
      if (!nombre | nombre.length < 3 | !isNaN(nombre) ) {
        preguntarNombre();
      } else {
        confirmar(nombre);
      }
    };
  
    const confirmar = (nombre) => {
      let confirmarNombre = confirm(`¿Es tu nombre ${nombre}?`);
      if (!confirmarNombre) {
        preguntarNombre();
      } else {
        alert('¡Comencemos a jugar!');
      }
    };
  
    // preguntarNombre();
  };

  const puntajes = {
    jugador: 0,
    computadora: 0,
  }

  const computadora = (valor) => {
    const arr = ["Piedra ✊", "Papel ✋", "Tijeras ✌"];
    const result = Math.floor(Math.random() * 3);
  
    if (valor === result) {
      alert("Empate " + arr[result]);
    } else if (
      (valor === 0 && result === 2) ||
      (valor === 1 && result === 0) ||
      (valor === 2 && result === 1)
    ) {
      alert("Jugador " + arr[valor] + ", Computadora " + arr[result]);
      alert("Gana Jugador");
      puntajes.jugador ++
    } else {
      alert("Jugador " + arr[valor] + ", Computadora " + arr[result]);
      alert("Pierde Jugador");
      puntajes.computadora ++
    }
  };
  
  const mostrarPuntajes =()=>{
    alert("Puntaje Jugador = " + puntajes.jugador + " Puntaje Computadora = " + puntajes.computadora)
  }