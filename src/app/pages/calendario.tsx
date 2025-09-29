export default function Calendario() {
    return (
      <>
        <main style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem' }}>
          <h1>Calendário Nacional de Vacinação 2025</h1>
          <p>Confira abaixo o calendário atualizado, com as vacinas recomendadas por faixa etária:</p>
  
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #b13f3f' }}>
                <th style={{ textAlign: 'left', padding: '10px' }}>Idade</th>
                <th style={{ textAlign: 'left', padding: '10px' }}>Vacinas Recomendadas</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px' }}>Ao nascer</td>
                <td style={{ padding: '10px' }}>BCG e Hepatite B</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px' }}>2 meses</td>
                <td style={{ padding: '10px' }}>Pentavalente, VIP, Pneumocócica, Rotavírus</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px' }}>3 meses</td>
                <td style={{ padding: '10px' }}>Meningocócica</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px' }}>4 meses</td>
                <td style={{ padding: '10px' }}>Pentavalente, VIP, Pneumocócica, Rotavírus</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px' }}>6 meses</td>
                <td style={{ padding: '10px' }}>Pentavalente, VIP, Pneumocócica</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px' }}>12 meses</td>
                <td style={{ padding: '10px' }}>Tríplice Viral (Sarampo, Caxumba e Rubéola), Pneumocócica 10-valente</td>
              </tr>
              {/* Continue preenchendo conforme o calendário real */}
            </tbody>
          </table>
        </main>
        <Footer />
      </>
    );
  }