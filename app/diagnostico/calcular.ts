export function calcularDiagnostico(
  faturamento: number,
  maquinas: number,
  velocidade: number,
  desperdicio: number
) {

  const velocidadeReferencia = 120
  const desperdicioIdeal = 8

  let scoreVelocidade = (velocidade / velocidadeReferencia) * 30
  if (scoreVelocidade > 30) scoreVelocidade = 30

  let scoreDesperdicio =
    ((desperdicioIdeal - desperdicio) / desperdicioIdeal) * 30

  if (scoreDesperdicio > 30) scoreDesperdicio = 30
  if (scoreDesperdicio < 0) scoreDesperdicio = 0

  let scoreMaquinas = maquinas * 2
  if (scoreMaquinas > 20) scoreMaquinas = 20

  let scoreBase = 20

  let score =
    scoreVelocidade +
    scoreDesperdicio +
    scoreMaquinas +
    scoreBase

  if (score > 100) score = 100

  const perdaAnual =
    faturamento * (desperdicio / 100) * 12

  const potencialRecuperacao = perdaAnual * 0.45

  return {
    score: Math.round(score),
    perdaAnual: Math.round(perdaAnual),
    potencialRecuperacao: Math.round(potencialRecuperacao)
  }
}