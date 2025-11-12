function exercicio41() {
    let valor = parseFloat(prompt("Informe o valor total financiado R$: "))
    let taxaJurosPercent = parseFloat(prompt("Informe a taxa de juros mensal (em %): "))
    let numParcelas = parseInt(prompt("Informe o número de parcelas: "))

    function isValidNumber(n) {
        return !isNaN(n) && n > 0
    }

    if (!isValidNumber(valor)) {
        alert("Erro: por favor, informe um valor válido.")
    } else if (!isValidNumber(taxaJurosPercent)) {
        alert("Erro: por favor, informe uma taxa de juros válida.")
    } else if (!isValidNumber(numParcelas)) {
        alert("Erro: por favor, informe um número de parcelas válido.")
    } else {
        let taxaJuros = taxaJurosPercent / 100
        let parcela = (valor * taxaJuros) / (1 - Math.pow(1 + taxaJuros, -numParcelas))
        alert(`O valor de cada parcela será: R$ ${parcela.toFixed(2)}`)
    }
}

function exercicio42() {
    function pedirNumeros() {
        let vetor = []
        
        for (let i = 0; i < 5; i++) {
            let numero = prompt(`Informe o ${i + 1}º número inteiro:`)
            
            while (isNaN(numero) || !Number.isInteger(parseFloat(numero))) {
                numero = prompt(`Por favor, insira um número inteiro válido para o ${i + 1}º valor:`)
            }
            
            vetor.push(parseInt(numero))
        }
        
        return vetor
    }

    function exibirDobro(vetor) {
        console.log("Dobro dos valores informados:")
        for (let i = 0; i < vetor.length; i++) {
            console.log(`Valor: ${vetor[i]} - Dobro: ${vetor[i] * 2}`)
        }
    }

    let vetorNumeros = pedirNumeros()
    exibirDobro(vetorNumeros)
}

function exercicio43() {
    function pedirNumeros() {
        let vetor = []
        
        for (let i = 0; i < 8; i++) {
            let numero = prompt(`Informe o ${i + 1}º número inteiro: `)
            
            while (isNaN(numero) || !Number.isInteger(parseFloat(numero))) {
                numero = prompt(`Por favor, insira um número inteiro válido para o ${i + 1}º valor: `)
            }
            
            vetor.push(parseInt(numero))
        }
        
        return vetor
    }

    function calcularMedia(vetor) {
        let soma = 0
        for (let i = 0; i < vetor.length; i++) {
            soma += vetor[i]
        }
        let media = soma / vetor.length
        console.log(`A média aritmética dos valores é: ${media}`)
    }

    let vetorNumeros = pedirNumeros()
    calcularMedia(vetorNumeros)
}

function exercicio44() {
    let idades = []
    let soma = 0

    for (let i = 0; i < 20; i++) {
        let idadeValida = false
        let idade
        while (!idadeValida) {
            idade = prompt(`Digite a idade da pessoa ${i + 1}:`)
            if (idade !== null && !isNaN(idade) && idade.trim() !== '' && Number(idade) > 0) {
                idade = Number(idade)
                idadeValida = true
            } else {
                alert('Por favor, digite uma idade válida.')
            }
        }
        idades.push(idade)
        soma += idade
    }

    let media = soma / idades.length
    let acimaMedia = idades.filter(idade => idade > media)

    alert(`A média das idades é ${media.toFixed(2)}\nIdades acima da média: ${acimaMedia.join(', ')}`)
}

function exercicio45() {
    let numeros = []
    let pares = []

    for (let i = 0; i < 10; i++) {
        let numeroValido = false
        let numero
        while (!numeroValido) {
            numero = prompt(`Digite o número ${i + 1}:`)
            if (numero !== null && !isNaN(numero) && numero.trim() !== '') {
                numero = Number(numero)
                numeroValido = true
            } else {
                alert('Por favor, digite um número válido.')
            }
        }
        numeros.push(numero)
        if (numero % 2 === 0) {
            pares.push(numero)
        }
    }

    if (pares.length > 0) {
        alert(`Números pares: ${pares.join(', ')}`)
    } else {
        alert('Todos os números são ímpares')
    }
}

function exercicio46() {
    let nomes = []

    for (let i = 0; i < 10; i++) {
        let nomeValido = false
        let nome
        while (!nomeValido) {
            nome = prompt(`Digite o nome ${i + 1}:`)
            if (nome !== null && nome.trim() !== '') {
                nomeValido = true
            } else {
                alert('Por favor, digite um nome válido.')
            }
        }
        nomes.push(nome)
    }

    alert('Os nomes inseridos são: ' + nomes.join(', '))
}
