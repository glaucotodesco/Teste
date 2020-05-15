
function calcularTotal() {
    
    var pratoPrincipalValue = document.getElementById("prato-principal").value; 
    var acompanhamentoValue = document.getElementById("acompanhamentos").value;
    if (pratoPrincipalValue == "0") {
        alert('Selecione um prato principal!');
        return false;
    }
    if(acompanhamentoValue =="0"){
        multiple = false;
    }
    
    

    var valorPratoPrincipal = 0;
    switch (pratoPrincipalValue) {
        case "massa":
            valorPratoPrincipal = 25
            break;
        case "carne":
            valorPratoPrincipal = 18
            break;
        case "peixe":
            valorPratoPrincipal = 22
            break;
    }

    var elementoSelectAcompanhamentos = document.getElementById("acompanhamentos");
    var arrayAcompanhamentos = 
        Array.from(elementoSelectAcompanhamentos.options)
            .filter(option => option.selected)
            .map(option => parseFloat(option.value)); 

    var somaAcompanhamentos = 0;
    arrayAcompanhamentos.forEach((valorAcompanhamento) => { somaAcompanhamentos += valorAcompanhamento });
    
    var convenioValue = parseInt(document.getElementById("convenio").value);
    var valorTotal = (valorPratoPrincipal + somaAcompanhamentos) * ((100 - convenioValue) / 100); 
    
    var obs = document.getElementById("observacoes").value;
    document.getElementById("valorModal").innerText = "O valor do pedido é: R$ " + valorTotal.toFixed(2) + "\n\n" + obs;
    

    (function () {
        $('select').selectpicker();
    });
}