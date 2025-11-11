function exercicio16() {
    let temp = parseFloat(prompt("Digite a temperatura atual em °C:"))
    let resultado = ""

    if (isNaN(temp)) {
        alert("Erro: por favor, insira um número válido!")
        return
    }

    if (temp < 18) {
        resultado = `A temperatura atual é de ${temp}°C, está frio.`
    } else if (temp >= 18 && temp <= 25) {
        resultado = `A temperatura atual é de ${temp}°C, está agradável.`
    } else {
        resultado = `A temperatura atual é de ${temp}°C, está quente.`
    }

    alert(resultado)
}

function exercicio17() {
    let nota1 = parseFloat(prompt("Digite a primeira nota (0 a 10):"))
    let nota2 = parseFloat(prompt("Digite a segunda nota (0 a 10):"))
    let resultado = ""

    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("Erro: por favor, insira notas válidas entre 0 e 10.")
        return
    }

    const media = (nota1 + nota2) / 2
    resultado += `Sua média de notas é: ${media.toFixed(2)}.\n`

    if (media > 5) {
        resultado += "Você está acima da média."
    } else {
        resultado += "Você está abaixo da média."
    }

    resultado += `\nA primeira nota é ${nota1 % 2 === 0 ? "par" : "ímpar"}.`
    resultado += `\nA segunda nota é ${nota2 % 2 === 0 ? "par" : "ímpar"}.`

    alert(resultado)
}

function exercicio18() {
    let peso = parseFloat(prompt("Digite seu peso em kg:"))
    let altura = parseFloat(prompt("Digite sua altura em metros:"))
    let resultado = ""

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Erro: por favor, insira números válidos para peso e altura.")
        return
    }

    const imc = peso / (altura * altura)
    resultado = `Seu IMC é: ${imc.toFixed(2)}`

    alert(resultado)
}

function exercicio19() {
    let ano = parseInt(prompt("Digite um ano:"))
    let resultado = ""

    if (isNaN(ano)) {
        alert("Erro: por favor, insira um ano válido.")
        return
    }

    if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
        resultado = `${ano} é um ano bissexto.`
    } else {
        resultado = `${ano} não é um ano bissexto.`
    }

    alert(resultado)
}

const taxas = {
    euro: 6.5,
    libra: 7.04,
    dolar: 5.29
}

function converterMoeda() {
    let moeda = prompt("Digite a moeda para conversão (euro, libra, dolar):").toLowerCase()
    let valor = parseFloat(prompt("Digite o valor em reais (R$):"))
    let resultado = ""

    if (!taxas[moeda]) {
        resultado = "Erro: moeda inválida! Escolha entre: euro, libra ou dolar."
    } else if (isNaN(valor) || valor <= 0) {
        resultado = "Erro: por favor, informe um valor válido."
    } else {
        const convertido = valor * taxas[moeda]
        resultado = `O valor de R$ ${valor} na moeda ${moeda} é equivalente a ${convertido.toFixed(2)}.`
    }

    alert(resultado)
}
