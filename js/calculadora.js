function accion(valor) {
    
    
    if (valor == "c"){
        document.getElementById("tResultado").value = "";
    } else if (valor == "=") {
        document.getElementById("tResultado").value = eval(document.getElementById("tResultado").value);
    } else if (!isNaN(valor) || valor == "+" || valor == '-' || valor == '*' || valor == '/'){
        document.getElementById("tResultado").value += valor;
    }


    
}