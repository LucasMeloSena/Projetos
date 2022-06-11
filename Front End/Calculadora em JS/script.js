function calculadora() {
    let operacao = prompt("Escolha um tipo de operação: \n 1- Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão Real \n 5 - Divisão Inteira \n 6 - Potenciação \n 7 - Sair")

function soma() {
    let numero1 = Number(prompt("Digite o número 1:"))
    let numero2 = Number(prompt("Digite o número 2:"))
    let resultado
    resultado = numero1 + numero2
    alert(`${numero1} + ${numero2} = ${resultado}`)
    let continuar = prompt("Deseja realizar outra operação? \nNão - 0 \nSim - 1")
    if (continuar == 1) {
        calculadora()
    }
    else if (continuar == 0) {
        alert("Obrigado por utilizar a calculadora! \nAté mais!")
    }
    else {
        alert("Digite uma opção válida!")
        calculadora()
    }
}

function subtracao() {
    let numero1 = Number(prompt("Digite o número 1:"))
    let numero2 = Number(prompt("Digite o número 2:"))
    let resultado
    resultado = numero1 - numero2
    alert(`${numero1} - ${numero2} = ${resultado}`)
    let continuar = prompt("Deseja realizar outra operação? \nNão - 0 \nSim - 1")
    if (continuar == 1) {
        calculadora()
    }
    else if (continuar == 0) {
        alert("Obrigado por utilizar a calculadora! \nAté mais!")
    }
    else {
        alert("Digite uma opção válida!")
        calculadora()
    }
}

function multiplicacao() {
    let numero1 = Number(prompt("Digite o número 1:"))
    let numero2 = Number(prompt("Digite o número 2:"))
    let resultado
    resultado = numero1 * numero2
    alert(`${numero1} x ${numero2} = ${resultado}`)
    let continuar = prompt("Deseja realizar outra operação? \nNão - 0 \nSim - 1")
    if (continuar == 1) {
        calculadora()
    }
    else if (continuar == 0) {
        alert("Obrigado por utilizar a calculadora! \nAté mais!")
    }
    else {
        alert("Digite uma opção válida!")
        calculadora()
    }
}

function divisaoReal() {
    let numero1 = Number(prompt("Digite o número 1:"))
    let numero2 = Number(prompt("Digite o número 2:"))
    let resultado
    resultado = numero1 / numero2
    alert(`${numero1} : ${numero2} = ${resultado}`)
    let continuar = prompt("Deseja realizar outra operação? \nNão - 0 \nSim - 1")
    if (continuar == 1) {
        calculadora()
    }
    else if (continuar == 0) {
        alert("Obrigado por utilizar a calculadora! \nAté mais!")
    }
    else {
        alert("Digite uma opção válida!")
        calculadora()
    }
}

function divisaoInteira() {
    let numero1 = Number(prompt("Digite o número 1:"))
    let numero2 = Number(prompt("Digite o número 2:"))
    let resultado
    resultado = numero1 % numero2
    alert(`O resto da divsão de ${numero1} e ${numero2} = ${resultado}`)
    let continuar = prompt("Deseja realizar outra operação? \nNão - 0 \nSim - 1")
    if (continuar == 1) {
        calculadora()
    }
    else if (continuar == 0) {
        alert("Obrigado por utilizar a calculadora! \nAté mais!")
    }
    else {
        alert("Digite uma opção válida!")
        calculadora()
    }
}

function potenciacao() {
    let numero1 = Number(prompt("Digite o número 1:"))
    let numero2 = Number(prompt("Digite o número 2:"))
    let resultado
    resultado = numero1 ** numero2
    alert(`${numero1} ^ ${numero2} = ${resultado}`)
    let continuar = prompt("Deseja realizar outra operação? \nNão - 0 \nSim - 1")
    if (continuar == 1) {
        calculadora()
    }
    else if (continuar == 0) {
        alert("Obrigado por utilizar a calculadora! \nAté mais!")
    }
    else {
        alert("Digite uma opção válida!")
        calculadora()
    }
}

function sair() {
    alert("Obrigado por utilizar a calculadora! \nAté mais!")
}

if (operacao == 1) {
    soma()
}
else if (operacao == 2) {
    subtracao()
}
else if (operacao == 3) {
    multiplicacao()
}
else if (operacao == 4) {
    divisaoReal()
}
else if (operacao == 5) {
    divisaoInteira()
}
else if (operacao == 6) {
    potenciacao()
}
else if (operacao == 7) {
    sair()
}
else {
    alert("Digite um número válido!")
    calculadora()
}
}
calculadora()