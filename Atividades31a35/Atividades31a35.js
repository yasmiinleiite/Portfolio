// Exercício 31 - Calculadora
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
    if (b === 0) {
        return "Erro: divisão por zero!";
    } else {
        return a / b;
    }
};

function executarCalculadora() {
    let num1 = parseFloat(prompt("Insira um número: "));
    let num2 = parseFloat(prompt("Insira um outro número: "));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
    } else {
        let operacao = prompt("Escolha a operação (somar, subtrair, multiplicar, dividir): ");
        const opcoes = ["somar", "subtrair", "multiplicar", "dividir"];

        if (!opcoes.includes(operacao.toLowerCase())) {
            alert("Erro: operação inválida. Tente novamente.");
        } else {
            let resultado;
            switch (operacao.toLowerCase()) {
                case "somar":
                    resultado = somar(num1, num2);
                    break;
                case "subtrair":
                    resultado = subtrair(num1, num2);
                    break;
                case "multiplicar":
                    resultado = multiplicar(num1, num2);
                    break;
                case "dividir":
                    resultado = dividir(num1, num2);
                    break;
            }
            alert(`Resultado: ${resultado}`);
        }
    }
}

// Exercício 32 - Verificar se pode tirar carta 
function verificarCNH() {
    let idade = Number(prompt("Insira sua idade: "));
    if (idade >= 18) {
        alert(`Você tem ${idade} anos, então você é maior e pode tirar CNH`);
    } else {
        alert(`Você tem ${idade} anos, então você é menor e não pode tirar CNH`);
    }
}

// Exercício 33 - Pedir 3 números
function pedirNumeros() {
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));
    let num3 = parseFloat(prompt("Digite o terceiro número: "));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Erro: por favor, insira apenas números válidos.");
        return;
    }

    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);

    alert(`Os números em ordem crescente são: ${numeros.join(", ")}`);
}

// Exercício 34 - Conversão de horas
function converterHoras() {
    let horas = parseFloat(prompt("Insira um número de horas: "));
    if (isNaN(horas) || horas < 0) {
        alert("Número de horas inserido inválido. Por favor, insira um número de horas válido.");
    } else {
        let minutos = horas * 60;
        alert(`${horas} horas correspondem a ${minutos} minutos.`);
    }
}

// Exercício 35 - Calculo de cédulas
function calcularCedulas() {
    let valor = prompt("Digite o valor desejado R$: ");

    if (isNaN(valor) || valor <= 0) {
        alert("Erro: por favor, insira um valor válido.");
        return;
    }

    valor = parseInt(valor);
    const cedulas = [200, 100, 50, 20, 10, 5, 1];
    let resultado = "";

    for (let i = 0; i < cedulas.length; i++) {
        let quantidade = Math.floor(valor / cedulas[i]);
        if (quantidade > 0) {
            resultado += `${quantidade} cédulas de R$${cedulas[i]}\n`;
            valor -= quantidade * cedulas[i];
        }
    }

    alert(resultado);
}
