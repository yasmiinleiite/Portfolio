// até 4 lista 3
// Exercício 11
function exercicio11() {
    let largura = parseFloat(prompt("Insira a largura da parede: "));
    let altura = parseFloat(prompt("Insira a altura da parede: "));

    if (isNaN(largura) || isNaN(altura)) {
        alert("Erro: por favor, insira apenas números.");
        return;
    }

    let area = largura * altura;
    let litros;

    if (area > 2) {
        litros = Math.ceil(area / 2); // arredonda para cima
        alert(`Serão necessários ${litros} litros de tinta.`);
    } else {
        alert(`Será necessário 1 litro de tinta.`);
    }
}

// Exercício 12
function exercicio12() {
    let idade = parseInt(prompt("Insira sua idade: "));
    if (isNaN(idade)) {
        alert("Erro: por favor, insira apenas números válidos.");
        return;
    }
    if (idade >= 18) {
        alert(`Você tem ${idade} anos, então você é maior de idade.`);
    } else {
        alert(`Você tem ${idade} anos, então você é menor de idade.`);
    }
}

// Exercício 13
function exercicio13() {
    let num = parseInt(prompt("Insira um número inteiro: "));
    if (isNaN(num)) {
        alert("Erro: por favor, insira apenas números válidos.");
        return;
    }
    alert(`O número ${num} é ${num % 2 === 0 ? "par" : "ímpar"}.`);
}

// Exercício 14
function exercicio14() {
    let num1 = parseInt(prompt("Insira um número inteiro: "));
    let num2 = parseInt(prompt("Insira outro número inteiro: "));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Erro: por favor, insira apenas números válidos.");
        return;
    }

    if (num1 === num2) {
        alert("Os números inseridos são iguais.");
    } else if (num1 > num2) {
        alert(`O número ${num1} é maior que o número ${num2}.`);
    } else {
        alert(`O número ${num2} é maior que o número ${num1}.`);
    }
}

// Exercício 15
function exercicio15() {
    const armazenada = "1234";
    let senha = prompt("Insira sua senha: ");

    if (!senha) {
        alert("Erro: por favor, insira a senha corretamente.");
        return;
    }

    if (senha === armazenada) {
        alert("Acesso permitido.");
    } else {
        alert("Acesso negado.");
    }
}
