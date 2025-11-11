// Exercício 41 lista 8
// Simular financiamento 

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