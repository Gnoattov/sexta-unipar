function calcular() {
    let precoKG = parseFloat(document.getElementById('precoKG').value);
    let quantidadeKG = parseFloat(document.getElementById('quantidadeKG').value);
        let valorFinal = precoKG * quantidadeKG;
    
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = 'Valor a ser pago em R$ ' + valorFinal.toFixed(2);
}