function raio_circulo() {
    let area = parseFloat(prompt("Digite a área do círculo: "));
    if (isNaN(area) || area <= 0) {
        alert("Erro: insira um valor válido e positivo para a área.");
    } else {
        let raio = Math.sqrt(area / Math.PI);
        alert(`O raio do círculo é de: ${raio.toFixed(2)}`);
    }
}

function volume_cilindro() {
    let raio = parseFloat(prompt("Digite o raio da base do cilindro: "));
    let altura = parseFloat(prompt("Digite a altura do cilindro: "));
    if (isNaN(raio) || raio <= 0 || isNaN(altura) || altura <= 0) {
        alert("Erro: por favor, insira valores válidos e positivos para raio e altura.");
    } else {
        const volume = Math.PI * Math.pow(raio, 2) * altura;
        alert(`O volume do cilindro é: ${volume.toFixed(2)}`);
    }
}

function area_quadrado() {
    let lado = parseFloat(prompt("Insira o lado do quadrado em cm (ex.: 120 cm): "));
    if (isNaN(lado) || lado <= 0) {
        alert("Erro: por favor, insira um número válido.");
    } else {
        let area = lado * lado;
        alert(`A área do quadrado é: ${area}`);
    }
}

function jogo_adivinha() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 10;
    function dica(numero) {
        if (numero < numeroSecreto) return "O número é maior!";
        else if (numero > numeroSecreto) return "O número é menor!";
        else return "Parabéns, você acertou!";
    }

    while (tentativas > 0) {
        let tentativa = parseInt(prompt(`Você tem ${tentativas} tentativas restantes. Digite um número entre 1 e 100: `));
        if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
            alert("Erro: por favor, insira um número válido entre 1 e 100.");
            continue;
        }

        if (tentativa === numeroSecreto) {
            alert(`Parabéns! Você acertou o número ${numeroSecreto} em ${11 - tentativas} tentativas.`);
            break;
        } else {
            alert(dica(tentativa));
        }

        tentativas--;
        if (tentativas === 0) alert(`Fim de jogo! O número secreto era ${numeroSecreto}.`);
    }
}

function simular_banco() {
    let contas = {};
    let opcao = "";

    while (opcao !== "5") {
        opcao = prompt(
            "Digite o número relacionado a opção desejada:\n" +
            "1 - Criar nova conta\n" +
            "2 - Depositar\n" +
            "3 - Sacar\n" +
            "4 - Exibir saldo\n" +
            "5 - Sair"
        );

        if (opcao === "1") {
            let nome = prompt("Digite o nome para a nova conta: ");
            if (!nome || contas[nome]) {
                alert("Conta inválida ou já existente!");
                continue;
            }
            let saldoInicial = parseFloat(prompt("Digite o saldo inicial (número maior ou igual a zero) R$: "));
            if (isNaN(saldoInicial) || saldoInicial < 0) {
                alert("Erro: saldo inicial inválido!");
                continue;
            }
            contas[nome] = saldoInicial;
            alert(`Conta criada com sucesso! saldo inicial de R$: ${contas[nome].toFixed(2)}`);
        } else if (opcao === "2") {
            let nome = prompt("Digite o nome da conta para depósito: ");
            if (!contas[nome]) {
                alert("Conta não encontrada!");
                continue;
            }
            let valor = parseFloat(prompt("Digite o valor para depositar R$: "));
            if (isNaN(valor) || valor <= 0) {
                alert("Valor inválido!");
                continue;
            }
            contas[nome] += valor;
            alert(`Depósito realizado! Saldo atual: R$${contas[nome].toFixed(2)}`);
        } else if (opcao === "3") {
            let nome = prompt("Digite o nome da conta para saque: ");
            if (!contas[nome]) {
                alert("Conta não encontrada!");
                continue;
            }
            let valor = parseFloat(prompt("Digite o valor para sacar R$: "));
            if (isNaN(valor) || valor <= 0 || valor > contas[nome]) {
                alert("Valor inválido ou saldo insuficiente!");
                continue;
            }
            contas[nome] -= valor;
            alert(`Saque realizado! Saldo atual R$: ${contas[nome].toFixed(2)}`);
        } else if (opcao === "4") {
            let nome = prompt("Digite o nome da conta para ver o saldo: ");
            if (!contas[nome]) {
                alert("Conta não encontrada!");
                continue;
            }
            alert(`Saldo da conta ${nome} é de R$: ${contas[nome].toFixed(2)}`);
        } else if (opcao === "5") {
            alert("Saída. Agradecemos sua participação!");
        } else {
            alert("Opção inválida! Escolha um número de 1 a 5.");
        }
    }
}
