function calcularReajuste() {
    let saldo = parseFloat(document.getElementById("saldo").value);
    if (isNaN(saldo)) {
      alert("Insira um valor válido para o saldo.");
      return;
    }
  
    let saldoReajustado = saldo * 1.01;
    document.getElementById("resultado").innerText = "Saldo com reajuste: R$" + saldoReajustado.toFixed(2);
  }