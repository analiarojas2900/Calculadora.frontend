let botones = document.querySelectorAll('.btn');

for (let index = 0; index < botones.length; index++) {

    let element = botones[index];
    element.addEventListener('click', () => {
        accion(element.textContent);
    })

}

function accion(valor) {


    if (valor == "C") {
        document.getElementById("tResultado").value = "";
    } else if (valor == "=") {
        document.getElementById("tResultado").value = eval(document.getElementById("tResultado").value);
    } else if (!isNaN(valor) || valor == "+" || valor == '-' || valor == '*' || valor == '/') {
        document.getElementById("tResultado").value += valor;
    }



}