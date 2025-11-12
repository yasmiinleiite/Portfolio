function exercicio36() {
    let numero = parseFloat(prompt("Digite um número para que seja calculado a raiz quadrada: "))
    
    if (isNaN(numero) || numero < 0) {
        alert("Erro: por favor, digite um número válido!")
    } else {
        let raiz = Math.sqrt(numero)
        alert(`A raiz quadrada de ${numero} é ${raiz.toFixed(2)}`)
    }
}

function exercicio37() {
    let nome = prompt("Insira seu nome: ")
    if (!nome || nome.trim() === "") {
        alert("Erro: por favor, insira seu nome.")
        return
    }

    let endereco = prompt("Insira seu endereço: ")
    if (!endereco || endereco.trim() === "") {
        alert("Erro: endereço não pode ficar vazio.")
        return
    }

    let sexo = prompt("Insira seu sexo (M/F): ")
    if (!sexo || (sexo.toUpperCase() !== "M" && sexo.toUpperCase() !== "F")) {
        alert("Erro: por favor, insira M para masculino ou F para feminino.")
        return
    }

    let telefone = prompt("Digite seu telefone: ")
    if (!telefone || telefone.trim() === "") {
        alert("Erro: por favor, insira telefone.")
        return
    }

    let celular = prompt("Digite seu celular:")
    if (!celular || celular.trim() === "") {
        alert("Erro: por favor, insira seu celular.")
        return
    }

    let email = prompt("Digite seu email: ")
    if (!email || email.trim() === "") {
        alert("Erro: por favor, insira seu email.")
        return
    } else {
        alert("Cadastro realizado com sucesso!\n" +
              `Nome: ${nome}\n` +
              `Endereço: ${endereco}\n` +
              `Sexo: ${sexo.toUpperCase()}\n` +
              `Telefone: ${telefone}\n` +
              `Celular: ${celular}\n` +
              `Email: ${email}`)
    }
}

function exercicio38() {
    let salario = prompt("Insira seu salário R$: ")
    while (isNaN(salario) || salario <= 0) {
        salario = prompt("Salário inválido! Insira um salário maior que zero: ")
    }
    salario = parseFloat(salario)

    const calcularIR = salario => {
        let imposto = 0
        if (salario <= 1903.98) {
            imposto = 0
        } else if (salario <= 2826.65) {
            imposto = salario * 0.075 - 142.80
        } else if (salario <= 3751.05) {
            imposto = salario * 0.15 - 354.80
        } else if (salario <= 4664.68) {
            imposto = salario * 0.225 - 636.13
        } else {
            imposto = salario * 0.275 - 869.36
        }
        return imposto
    }

    const imposto = calcularIR(salario)
    console.log(`Para salário de R$: ${salario.toFixed(2)}, o imposto devido é ${imposto.toFixed(2)}`)
}

function exercicio39() {
    let salario = parseFloat(prompt("Insira seu salário R$: "))
    while (isNaN(salario) || salario <= 0) {
        salario = parseFloat(prompt("Valor inválido! Insira um salário maior que zero: "))
    }

    let inss = 0

    if (salario <= 1518) {
        inss = salario * 0.075
    } else if (salario <= 2793.88) {
        inss = salario * 0.09
    } else if (salario <= 4190.83) {
        inss = salario * 0.12
    } else {
        inss = salario * 0.14
    }

    alert(`Para o salário R$${salario.toFixed(2)}, o valor do INSS é R$${inss.toFixed(2)}`)
}

function exercicio40() {
    let capital = parseFloat(prompt("Digite o capital inicial R$: "))
    if (isNaN(capital) || capital <= 0) {
        alert("Erro: por favor, insira um capital válido.")
        return
    }

    let taxa = parseFloat(prompt("Digite a taxa de juros (% ao mês): "))
    if (isNaN(taxa) || taxa < 0) {
        alert("Erro: por favor, insira uma taxa válida.")
        return
    }

    let tempo = parseInt(prompt("Digite o número de períodos (em meses): "))
    if (isNaN(tempo) || tempo <= 0) {
        alert("Erro: por favor, insira um tempo válido.")
        return
    }

    let montante = capital * Math.pow(1 + taxa / 100, tempo)
    let juros = montante - capital

    alert(`Capital inicial: R$${capital.toFixed(2)}\n` +
        `Taxa de juros: ${taxa}% ao período\n` +
        `Período: ${tempo}\n` +
        `Juros compostos: R$${juros.toFixed(2)}\n` +
        `Montante: R$${montante.toFixed(2)}`)
}
