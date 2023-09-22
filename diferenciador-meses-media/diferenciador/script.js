function validarNumero() {
    let numero = document.getElementById("numeroinput").value;
    let textodesaida;
    if (numero > 0) {
        textodesaida = "o numero maior que zero";
        document.getElementById("saidavalidacao").innerText = textodesaida;
    }
    else if (numero < 0) {
        textodesaida = "o numero e menor que zero";
        document.getElementById("saidavalidacao").innerText = textodesaida;

    }
    else {
        textodesaida = "o numero e igual zero";
        document.getElementById("saidavalidacao").innerText = textodesaida;

    }
}