
var valores = [1,2,3,4,5,6,7]
let userOpition 
   /* while (userOpition != 0){
        input = prompt("-----MENU---- \n \n 1. Caça Niquel \n 2. Sortear valor aleatorio \n 3.sortear nomes \n 4. Sortear numero com intervalo definido \n \n 0. Sair", 0)

    }*/ 
var resultado = Sortear(valores)
cassino()

function Sortear(valores){
    var sorte = getRandomIntInclusive(0, valores.length - 1)
    var result = valores[sorte]
    return result
}

function cassino(){
    var casaUm = ""
    var casaDois = ""
    var casaTres = ""

    let valoresPossiveis = [" O", " X", " 7"]
    casaUm = valoresPossiveis[ getRandomIntInclusive(0, valoresPossiveis.length - 1)]
    casaDois = valoresPossiveis[ getRandomIntInclusive(0, valoresPossiveis.length - 1)]
    casaTres = valoresPossiveis[ getRandomIntInclusive(0, valoresPossiveis.length - 1)]

    if(casaUm == casaDois && casaDois == casaTres){
        let mensagem = "VOCÊ GANHOU 1 BI"
        console.log(mensagem)
        console.log(casaUm, casaDois, casaTres)

    }else{
        let mensagem = "MAIS SORTE NA PRÓXIMA!"
        console.log(mensagem)
        console.log(casaUm, casaDois, casaTres)

    }
    
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

