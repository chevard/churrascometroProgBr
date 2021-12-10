/*
Carne - 400 gramas por pessoa + de 6 horas - 650
Cerveja - 1200 ml por pessoa + 6 horas = 2000 ml
Refriugerante/Água - 1000 ml por pessoa + 6 horas - 1500 ml

Crianças valem por 0,5
*/

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular() {
  console.log('calculando...')

  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value
  let carne = carnePP(duracao)
  let cerveja = cervejaPP(duracao)
  let bebidas = bebidasPP(duracao)

  let qtdTotalCarne = carne * adultos + (carne / 2) * criancas
  let qtdTotalCerveja = cerveja * adultos
  let qtdTotalBebidas = bebidas * adultos + (bebidas / 2) * criancas

  resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalCerveja / 355
  )} latas de cerveja (355 ml)</p>`
  resultado.innerHTML += `<p>${Math.ceil(
    qtdTotalBebidas / 2000
  )} litros de bebidas (média por litro)</p>`

  console.log(qtdTotalCarne)
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}
