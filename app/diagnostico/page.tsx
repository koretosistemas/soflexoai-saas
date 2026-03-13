export default function Diagnostico() {
  return (
    <main style={{padding:40,fontFamily:"Arial"}}>
      
      <h1>Diagnóstico Empresarial - SoflexoAI</h1>

      <p>Responda algumas perguntas para analisarmos a eficiência da sua operação flexográfica.</p>

      <form style={{marginTop:30}}>

        <div style={{marginBottom:20}}>
          <label>Faturamento mensal da empresa (R$)</label><br/>
          <input type="number" placeholder="Ex: 500000" />
        </div>

        <div style={{marginBottom:20}}>
          <label>Número de máquinas de impressão</label><br/>
          <input type="number" placeholder="Ex: 3" />
        </div>

        <div style={{marginBottom:20}}>
          <label>Velocidade média de impressão (m/min)</label><br/>
          <input type="number" placeholder="Ex: 120" />
        </div>

        <div style={{marginBottom:20}}>
          <label>Percentual estimado de desperdício (%)</label><br/>
          <input type="number" placeholder="Ex: 8" />
        </div>

        <button type="submit">
          Analisar operação
        </button>

      </form>

    </main>
  )
}