export default function Vacinas() {
    return (
      <>
        <main style={{ maxWidth: 1000, margin: '2rem auto', padding: '0 1rem' }}>
          <h1>Vacinas fornecidas pelo Instituto Butantan</h1>
          <p>
            O Butantan produz diversas vacinas importantes para a saúde pública brasileira, incluindo Influenza, Hepatite A, B, HPV, Raiva, e outras.
          </p>
  
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            {/* Exemplo com uma imagem repetida, deve substituir para cada vacina */}
            <div style={{ border: '2px solid #b13f3f', borderRadius: 8, padding: 10, width: 140, textAlign: 'center' }}>
              <img src="/image.jpg" alt="Vacina Influenza" style={{ maxWidth: '100%', borderRadius: 4 }} />
              <strong>Influenza</strong>
            </div>
            <div style={{ border: '2px solid #b13f3f', borderRadius: 8, padding: 10, width: 140, textAlign: 'center' }}>
              <img src="/image.jpg" alt="Vacina Hepatite A" style={{ maxWidth: '100%', borderRadius: 4 }} />
              <strong>Hepatite A</strong>
            </div>
            <div style={{ border: '2px solid #b13f3f', borderRadius: 8, padding: 10, width: 140, textAlign: 'center' }}>
              <img src="/image.jpg" alt="Vacina Hepatite B" style={{ maxWidth: '100%', borderRadius: 4 }} />
              <strong>Hepatite B</strong>
            </div>
            <div style={{ border: '2px solid #b13f3f', borderRadius: 8, padding: 10, width: 140, textAlign: 'center' }}>
              <img src="/image.jpg" alt="Vacina HPV" style={{ maxWidth: '100%', borderRadius: 4 }} />
              <strong>HPV</strong>
            </div>
            <div style={{ border: '2px solid #b13f3f', borderRadius: 8, padding: 10, width: 140, textAlign: 'center' }}>
              <img src="/image.jpg" alt="Vacina Raiva" style={{ maxWidth: '100%', borderRadius: 4 }} />
              <strong>Raiva</strong>
            </div>
            <div style={{ border: '2px solid #b13f3f', borderRadius: 8, padding: 10, width: 140, textAlign: 'center' }}>
              <img src="/image.jpg" alt="Vacinas DTP, DTPA" style={{ maxWidth: '100%', borderRadius: 4 }} />
              <strong>DTP, DTPA</strong>
            </div>
          </div>
  
          <section style={{ marginTop: '2rem', border: '2px solid #b13f3f', borderRadius: 8, padding: 15 }}>
            <h3><strong>Vacina Influenza sazonal trivalente (fragmentada e inativada)</strong></h3>
            <p>
              A vacina Influenza do Butantan protege contra os três tipos de vírus Influenza mais prevalentes e sua composição é alterada anualmente, devido à alta taxa de mutação do vírus.
              É produzida a partir da inoculação do vírus em ovos embrionados de galinhas. Após um período de incubação, o líquido alantóico que envolve o embrião é colhido, centrifugado, concentrado, fragmentado e inativado, originando uma suspensão da vacina monovalente. A mistura das suspensões de cada monovalente resulta assim na vacina trivalente.
            </p>
            <p><strong>Bula Hemisfério Sul:</strong></p>
            <p style={{ color: 'darkgreen' }}>
              <a href="https://butantan.gov.br" target="_blank" rel="noreferrer" style={{ color: 'darkgreen' }}>
                Acesse a bula para pacientes
              </a>
            </p>
          </section>
        </main>
      </>
    );
  }