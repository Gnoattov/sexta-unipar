function verificarImpar() {
    let numero = parseInt(document.getElementById("numero").value);
    
    if (isNaN(numero)) {
      document.getElementById("resultado").innerHTML = "Insira um número válido.";
    } else {
      if (numero % 2 !== 0) {
        document.getElementById("resultado").innerHTML = "O número é ímpar.";
      } else {
        document.getElementById("resultado").innerHTML = "O número não é ímpar.";
      }
    }
  }
  