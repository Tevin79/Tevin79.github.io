function chiffrerSub() {
    let cle = document.getElementById("cleSub").value
    let mot = document.getElementById("motSub").value
    document.getElementById("finalSub").value = ""
    let base = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    cle = cle.split('')
    mot = mot.split('')

    for (i = 0; i < mot.length; i++) {
        for (x = 0; x < base.length - 1; x++) {
            if (mot[i] == base[x]) {
                document.getElementById("finalSub").value = document.getElementById("finalSub").value + cle[x]
            }
        }
    }

    document.getElementById("finalSub").select();
    document.execCommand('copy');
}

function dechiffrerSub() {
    let cle = document.getElementById("cleSub").value
    let mot = document.getElementById("motSub").value
    document.getElementById("finalSub").value = ""
    let base = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    cle = cle.split('')
    mot = mot.split('')

    for (i = 0; i < mot.length; i++) {
        for (x = 0; x < base.length - 1; x++) {
            if (mot[i] == cle[x]) {
                document.getElementById("finalSub").value = document.getElementById("finalSub").value + base[x]
            }
        }
    }

    document.getElementById("finalSub").select();
    document.execCommand('copy');
}