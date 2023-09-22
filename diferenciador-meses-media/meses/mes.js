function obtermes() {

    let mes = parseInt(document.getElementById("mesinput").value);

    switch (mes) {

        case 1:
            document.write("janeiro");
            break;

        case 2:
            document.write("fevereiro");
            break

        case 3:
            document.write("março");
            break

        case 4:
            document.write("abril");
            break

        case 5:
            document.write("maio");
            break

        case 6:
            document.write("junho");
            break

        case 7:
            document.write("julho");
            break

        case 8:
            document.write("agosto");
            break

        case 9:
            document.write("outubro");
            break

        case 10:
            document.write("setembro");
            break

        case 11:
            document.write("novembro");
            break

        case 12:
            document.write("dezembro");
            break

        default:
            break;
          
    }
}