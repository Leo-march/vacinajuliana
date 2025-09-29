import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a202c', color: 'white', padding: '3rem 1rem', marginTop: '3rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
        <nav style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.25rem' }}>Navegação</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><Link href="/"><a style={{ color: '#cbd5e0', textDecoration: 'none' }}>Início</a></Link></li>
            <li><Link href="/vacinas"><a style={{ color: '#cbd5e0', textDecoration: 'none' }}>Vacinas</a></Link></li>
            <li><Link href="/mitos-verdades"><a style={{ color: '#cbd5e0', textDecoration: 'none' }}>Mitos e Verdades</a></Link></li>
            <li><Link href="/calendario"><a style={{ color: '#cbd5e0', textDecoration: 'none' }}>Calendário</a></Link></li>
          </ul>
        </nav>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.25rem' }}>Contato</h3>
          <address style={{ fontStyle: 'normal', color: '#cbd5e0', fontSize: '0.875rem', lineHeight: '1.5' }}>
            Av. Vital Brasil, 1500 - São Paulo, SP<br />
            CEP: 05503-900<br />
            Telefone: (11) 2627-9600<br />
            CNPJ: XX.XXX.XXX/0001-XX
          </address>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #4a5568', padding: '1.5rem 1rem', textAlign: 'center', color: '#a0aec0', fontSize: '0.75rem' }}>
        © {new Date().getFullYear()} Instituto Butantan. Todos os direitos reservados.
      </div>
    </footer>
  );
}