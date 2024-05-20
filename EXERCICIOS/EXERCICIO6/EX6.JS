function encontrarMenor() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let valor3 = parseFloat(document.getElementById("valor3").value);
    let valor4 = parseFloat(document.getElementById("valor4").value);
    
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
      document.getElementById("resultado").innerHTML = "Isira valores numéricos válidos.";
    } else {
      let menorValor = Math.min(valor1, valor2, valor3, valor4);
      document.getElementById("resultado").innerHTML = "Menor valor: " + menorValor;
    }
  }
  