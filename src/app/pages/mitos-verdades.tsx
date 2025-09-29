const mitos = [
    { mito: "Vacinas causam doenças graves", verdade: "Mito: Vacinas podem provocar efeitos leves, mas eventos graves são raros." },
    { mito: "Só crianças tomam vacinas", verdade: "Mito: Adultos também precisam de imunização contra várias doenças." },
    { mito: "Vacinas não são seguras", verdade: "Mito: Todas passam por testes rigorosos e controle de qualidade." },
    { mito: "Vacinas controlam epidemias", verdade: "Verdade: Imunizantes foram essenciais para controle nacional de doenças." },
  ];
  
  export default function MitosVerdades() {
    return (
      <>
        <main style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
          <h1>Mitos e Verdades sobre Vacinação</h1>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {mitos.map(({ mito, verdade }, i) => (
              <li key={i} style={{ marginBottom: '1.5rem' }}>
                <strong>{mito}</strong>
                <p>{verdade}</p>
              </li>
            ))}
          </ul>
        </main>
      </>
    );
  }