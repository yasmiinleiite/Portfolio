// Exercício 6
function exercicio6() {
    let nota1 = parseFloat(prompt("Digite a primeira nota: "))
    let nota2 = parseFloat(prompt("Digite a segunda nota: "))

    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Erro: por favor, insira apenas números.")
    } else {
        if (nota1 % nota2 === 0) {
            alert(`${nota1} é múltipla de ${nota2}.`)
        } else if (nota2 % nota1 === 0) {
            alert(`${nota2} é múltipla de ${nota1}.`)
        } else {
            alert("Nenhuma das notas é múltipla da outra.")
        }
    }
}

// Exercício 7
function exercicio7() {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius: "))

    if (isNaN(celsius)) {
        alert("Erro: por favor, insira um número válido!")
    } else {
        let fahrenheit = (celsius * 1.8) + 32
        alert(`${celsius}°C equivalem a ${fahrenheit.toFixed(2)}°F.`)
    }
}

// Exercício 8
function exercicio8() {
    let altura = parseFloat(prompt("Insira a altura: "))
    let base = parseFloat(prompt("Insira a base: "))

    if (isNaN(altura) || isNaN(base)) {
        alert("Erro: por favor, insira apenas números.")
    } else {
        let area = base * altura
        alert(`A área é de ${area}.`)
    }
}

// Exercício 9
function exercicio9() {
    let num1 = parseFloat(prompt("Insira um número: "))
    let num2 = parseFloat(prompt("Insira outro número: "))

    if (isNaN(num1) || isNaN(num2)) {
        alert("Erro: por favor, insira apenas números.")
    } else {
        let soma = num1 + num2
        let sub = num1 - num2
        let mult = num1 * num2
        let div = num1 / num2

        alert(`Soma: ${soma}`)
        alert(`Subtração: ${sub}`)
        alert(`Multiplicação: ${mult}`)
        alert(`Divisão: ${div}`)
    }
}

// Exercício 10
function exercicio10() {
    let nota1 = parseFloat(prompt("Insira sua primeira nota: "))
    let nota2 = parseFloat(prompt("Insira sua segunda nota: "))
    let nota3 = parseFloat(prompt("Insira sua terceira nota: "))

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Erro: por favor, insira apenas números.")
    } else {
        let media = (nota1 + nota2 + nota3) / 3
        alert(`A média das suas notas é: ${media.toFixed(2)}`)
    }
}
