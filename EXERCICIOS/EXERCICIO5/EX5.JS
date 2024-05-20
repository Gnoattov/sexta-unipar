function encontrarMaior() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    
    if (isNaN(valor1) || isNaN(valor2)) {
      document.getElementById("resultado").innerHTML = "Por favor, insira valores numéricos válidos.";
    } else {
      var maiorValor = valor1 > valor2 ? valor1 : valor2;
      document.getElementById("resultado").innerHTML = "Maior valor: " + maiorValor;
    }
  }
  
