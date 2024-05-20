function calcularMedias() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      alert("Por favor, insira valores numéricos válidos.");
      return;
    }
  
    let mediaAritmetica = (num1 + num2 + num3) / 3;
    let mediaPonderada = (num1 * 3 + num2 * 2 + num3 * 5) / (3 + 2 + 5);
    let somaDasMedias = mediaAritmetica + mediaPonderada;
    let mediaDasMedias = somaDasMedias / 2;
  
    let resultados = document.getElementById("resultados");
    resultados.innerHTML = `
      <p>Média Aritmética: ${mediaAritmetica.toFixed(2)}</p>
      <p>Média Ponderada: ${mediaPonderada.toFixed(2)}</p>
      <p>Soma das Médias: ${somaDasMedias.toFixed(2)}</p>
      <p>Média das Médias: ${mediaDasMedias.toFixed(2)}</p>
    `;
  }