function somarnumero(){
    let numero;
    let acumulador;

    do{
        numero = prompt("digite o numero um ou -1 para sair"));
        acumulador = acumulador +numero;
    }while(numero = -1)

    document.getElementById("saida").innerText = acumulador;


        
    }
