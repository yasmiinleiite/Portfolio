// EXERCÍCIO 1 - Boas-vindas
function exercicio1() {
    let nome = prompt("Insira seu nome: ")
    alert(`Olá, ${nome}, seja bem-vindo(a)!`)
}

// Exercício 2 - Matéria favorita
function exercicio2() {
    let materia = prompt("Qual sua matéria favorita?")
    alert(`A matéria de ${materia} realmente é ótima!`)
}

// EXERCÍCIO 3 - Data de hoje
function exercicio3() {
    let data = prompt("Informe a data de hoje:")
    alert(`Data informada: ${data}`)
}

// EXERCÍCIO 4 - Preparação para o semestre
function exercicio4() {
    const resposta = prompt("Está preparado(a) para o segundo semestre?").toLowerCase()

    if (resposta === "sim") {
        alert(`Que ótimo!`)
    } else if (resposta === "não" || resposta === "nao") {
        alert(`Tudo bem! Ainda há tempo para se preparar.`)
    } else {
        alert(`Erro: por favor, digite 'Sim' ou 'Não'`)
    }
}

// Exercício 5 - Calcule a diferença entre dois números
function exercicio5() {
    let num1 = parseFloat(prompt("Insira um número: "))
    let num2 = parseFloat(prompt("Insira outro número: "))

    const subtracao = (num1, num2) => num1 - num2

    alert(`A diferença dos números inseridos é ${subtracao(num1, num2)}`)
}

document.getElementById("ex1").addEventListener("click", exercicio1)
document.getElementById("ex2").addEventListener("click", exercicio2)
document.getElementById("ex3").addEventListener("click", exercicio3)
document.getElementById("ex4").addEventListener("click", exercicio4)
document.getElementById("ex5").addEventListener("click", exercicio5)
