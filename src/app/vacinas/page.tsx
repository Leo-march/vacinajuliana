import Link from 'next/link';

export default function Vacinas() {
  const vacinas = [
    { id: 'influenza', nome: 'Influenza Sazonal Trivalente', icone: '💉', cor: '#e74c3c' },
    { id: 'hepatite-a', nome: 'Hepatite A', icone: '🦠', cor: '#e67e22' },
    { id: 'hepatite-b', nome: 'Hepatite B', icone: '🛡️', cor: '#f39c12' },
    { id: 'hpv', nome: 'HPV', icone: '💊', cor: '#16a085' },
    { id: 'raiva', nome: 'Raiva', icone: '🐕', cor: '#2980b9' },
    { id: 'difteria-tetano', nome: 'DTP, DT, dT', icone: '💪', cor: '#8e44ad' },
    { id: 'dtpa', nome: 'dTpa', icone: '👶', cor: '#c0392b' }
  ];

  return (
    <main style={{ maxWidth: 1000, margin: '2rem auto', padding: '0 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
        Vacinas fornecidas pelo Instituto Butantan
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', lineHeight: 1.6 }}>
        O Butantan produz diversas vacinas importantes para a saúde pública brasileira, incluindo 
        Influenza, Hepatite A, B, HPV, Raiva, e outras.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {vacinas.map((vacina) => (
          <Link key={vacina.id} href={`/vacinas/${vacina.id}`} style={{ textDecoration: 'none' }}>
            <div style={{ 
              border: '2px solid #b13f3f', 
              borderRadius: 8, 
              padding: 15, 
              width: 160, 
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: 'white'
            }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                margin: '0 auto 1rem',
                backgroundColor: vacina.cor + '20'
              }}>
                {vacina.icone}
              </div>
              <strong style={{ color: '#2c3e50', fontSize: '1rem' }}>{vacina.nome}</strong>
            </div>
          </Link>
        ))}
      </div>

      <section style={{ 
        marginTop: '2rem', 
        border: '2px solid #b13f3f', 
        borderRadius: 8, 
        padding: 20,
        backgroundColor: 'white'
      }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
          Vacina Influenza sazonal trivalente (fragmentada e inativada)
        </h3>
        <p style={{ lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
          A vacina Influenza do Butantan protege contra os três tipos de vírus Influenza mais prevalentes 
          e sua composição é alterada anualmente, devido à alta taxa de mutação do vírus.
        </p>
        <p style={{ lineHeight: 1.8, color: '#555', marginBottom: '1rem' }}>
          É produzida a partir da inoculação do vírus em ovos embrionados de galinhas. Após um período 
          de incubação, o líquido alantóico que envolve o embrião é colhido, centrifugado, concentrado, 
          fragmentado e inativado, originando uma suspensão da vacina monovalente. A mistura das suspensões 
          de cada monovalente resulta assim na vacina trivalente.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Bula Hemisfério Sul:</strong>
        </p>
        <p style={{ color: 'darkgreen', marginTop: '0.5rem' }}>
          <a 
            href="https://butantan.gov.br/producao/vacinas" 
            target="_blank" 
            rel="noreferrer" 
            style={{ color: 'darkgreen', textDecoration: 'underline' }}
          >
            Acesse a bula para pacientes
          </a>
        </p>
      </section>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        backgroundColor: '#f8f9fa', 
        borderRadius: 8,
        textAlign: 'center'
      }}>
        <p style={{ color: '#555', fontSize: '0.95rem' }}>
          💡 <strong>Dica:</strong> Clique em qualquer vacina acima para ver informações detalhadas sobre 
          composição, indicação, esquema vacinal, eficácia e contraindicações.
        </p>
      </div>
    </main>
  );
}