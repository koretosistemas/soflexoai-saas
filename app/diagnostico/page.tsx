"use client"

import { useState } from "react"
import { calcularDiagnostico } from "./calcular"

export default function Diagnostico() {

  const [resultado, setResultado] = useState<any>(null)

  function analisar(e:any){
    e.preventDefault()

    const faturamento = Number(e.target.faturamento.value)
    const maquinas = Number(e.target.maquinas.value)
    const velocidade = Number(e.target.velocidade.value)
    const desperdicio = Number(e.target.desperdicio.value)

    const analise = calcularDiagnostico(
      faturamento,
      maquinas,
      velocidade,
      desperdicio
    )

    setResultado(analise)
  }

  return (
    <main style={{padding:40,fontFamily:"Arial"}}>

      <h1>SoflexoAI Diagnóstico</h1>

      <form onSubmit={analisar}>

        <p>
          Faturamento mensal<br/>
          <input name="faturamento" type="number"/>
        </p>

        <p>
          Número de máquinas<br/>
          <input name="maquinas" type="number"/>
        </p>

        <p>
          Velocidade média (m/min)<br/>
          <input name="velocidade" type="number"/>
        </p>

        <p>
          Desperdício (%)<br/>
          <input name="desperdicio" type="number"/>
        </p>

        <button type="submit">
          Analisar operação
        </button>

      </form>

      {resultado && (

        <div style={{marginTop:40}}>

          <h2>Resultado do Diagnóstico</h2>

          <p>
            SoflexoAI Score: <b>{resultado.score} / 100</b>
          </p>

          <p>
            Perda anual estimada: 
            <b> $ {resultado.perdaAnual.toLocaleString()}</b>
          </p>

          <p>
            Potencial de recuperação:
            <b> $ {resultado.potencialRecuperacao.toLocaleString()}</b>
          </p>

        </div>

      )}

    </main>
  )
}