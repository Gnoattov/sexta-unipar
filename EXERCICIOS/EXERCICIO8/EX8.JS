function retornarNomeProduto() {
    let codigo = document.getElementById("codigo").value;
    let Produto;
  
    if (codigo === "001") {
      Produto = "Parafuso";
    } else if (codigo === "002") {
      Produto = "Porca";
    } else if (codigo === "003") {
      Produto = "Prego";
    } else {
      Produto = "Diversos";
    }
  
    document.getElementById("resultado").innerHTML = "Produto: " + Produto;
  }
  