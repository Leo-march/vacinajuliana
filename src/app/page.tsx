import Link from 'next/link';

export default function Home() {
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
    <div style={{ padding: '2rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ 
        background: 'white', 
        borderRadius: 15, 
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
        padding: '2rem', 
        marginBottom: '2rem', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
          Vacinas Butantan
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#7f8c8d', marginBottom: '0.5rem' }}>
          Guia Completo de Vacinação
        </p>
        <p style={{ color: '#95a5a6' }}>
          Informações sobre as principais vacinas fornecidas ao Ministério da Saúde
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {vacinas.map((vacina) => (
          <Link key={vacina.id} href={`/vacinas/${vacina.id}`} style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'white',
              borderRadius: 12,
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              padding: '1.5rem',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s, box-shadow 0.3s',
              height: '100%'
            }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                margin: '0 auto 1rem',
                backgroundColor: vacina.cor + '20'
              }}>
                {vacina.icone}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
                {vacina.nome}
              </h3>
              <div style={{
                height: 3,
                width: 60,
                backgroundColor: vacina.cor,
                borderRadius: 2,
                margin: '0 auto'
              }}></div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.9)',
        borderRadius: 12,
        padding: '1.5rem',
        textAlign: 'center'
      }}>
        <p style={{ color: '#2c3e50', lineHeight: 1.6 }}>
          <strong>Instituto Butantan:</strong> Referência em saúde pública brasileira, 
          produzindo vacinas de alta qualidade, segurança e eficácia.
        </p>
      </div>
    </div>
  );
}