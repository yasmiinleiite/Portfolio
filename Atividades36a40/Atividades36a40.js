// Exercício 36
// Raiz quadrada de um número 

let numero = parseFloat(prompt("Digite um número para que seja calculado a raiz quadrada: "))

if (isNaN(numero) || numero < 0) {
    alert("Erro: por favor, digite um número válido!")
} else {
    let raiz = Math.sqrt(numero)

    alert(`A raiz quadrada de ${numero} é ${raiz.toFixed(2)}`)
}

// Exercício 37 
// Cadastro 

function cadastroSimples() {
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

cadastroSimples()

// Exercício 38 lista 8 
// Calcular imposto de renda

// Exercício 39 
// Calcular INSS 

// Execício 40
// Calcular juros compostos 

function calcularJurosCompostos() {
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

calcularJurosCompostos()