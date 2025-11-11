// Exercício 21 - Tabuada
function exercicio21() {
    let numero = parseInt(prompt("Insira um número inteiro positivo para ver a tabuada:"));
    
    if (isNaN(numero) || numero <= 0) {
        alert("Erro: por favor, insira um número válido.");
    } else {
        let resultado = '';
        for (let i = 1; i <= 9; i++) {
            resultado += `${numero} x ${i} = ${numero * i}\n`;
        }
        alert(`Tabuada do ${numero}:\n${resultado}`);
    }
}

// Exercício 22 - Pedra, Papel e Tesoura
function exercicio22() {
    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

    let resposta = prompt("Escolha entre pedra, papel ou tesoura:");

    if (!opcoes.includes(resposta.toLowerCase())) {
        alert("Opção inválida. Escolha entre: pedra, papel ou tesoura.");
    } else {
        let resultado;
        if (resposta === escolhaComputador) {
            resultado = "Empate!";
        } else if (
            (resposta === "pedra" && escolhaComputador === "tesoura") ||
            (resposta === "papel" && escolhaComputador === "pedra") ||
            (resposta === "tesoura" && escolhaComputador === "papel")
        ) {
            resultado = "Você venceu!";
        } else {
            resultado = "Computador venceu!";
        }

        alert(`Você escolheu: ${resposta}`);
        alert(`Computador escolheu: ${escolhaComputador}`);
        alert(`Resultado: ${resultado}`);
    }
}

// Exercício 23 - Fatorial
function exercicio23() {
    let numero = parseInt(prompt("Insira um número inteiro positivo para calcular seu fatorial:"));
    
    if (isNaN(numero) || numero <= 0) {
        alert("Erro: por favor, insira um número válido.");
    } else {
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        alert(`O fatorial de ${numero} é ${fatorial}`);
    }
}

// Exercício 24 - Adivinhação de Número
function exercicio24() {
    alert("Pense em um número entre 1 e 100!");
    let min = 1;
    let max = 100;
    let tentativas = 0;

    while (true) {
        tentativas++;
        let palpite = Math.floor((min + max) / 2);
        let resposta = prompt(`O número é ${palpite}? (responda: maior / menor / igual)`);

        if (resposta === "maior") {
            min = palpite + 1;
        } else if (resposta === "menor") {
            max = palpite - 1;
        } else if (resposta === "igual") {
            alert(`Acertei! O número é ${palpite}. Tentei ${tentativas} vezes.`);
            break;
        } else {
            alert("Digite apenas: maior, menor ou igual!");
        }
    }
}

// Exercício 25 - IMC
function exercicio25() {
    let peso = parseFloat(prompt("Digite seu peso em kg (ex.: 52.3):"));
    let altura = parseFloat(prompt("Digite sua altura em metros (ex.: 1.63):"));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Erro: por favor, insira números válidos para peso e altura.");
    } else {
        function calcularIMC(peso, altura) {
            return peso / (altura * altura);
        }

        let imc = calcularIMC(peso, altura);
        alert(`Seu IMC é: ${imc.toFixed(2)}`);
    }
}
