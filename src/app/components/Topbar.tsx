import Link from 'next/link';

export default function Topbar() {
  return (
    <header style={{
      backgroundColor: '#b13f3f',
      padding: '1rem 2rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: '1.25rem',
    }}>
      <div>Instituto Butantan</div>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0, padding: 0 }}>
          <li><Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Início</Link></li>
          <li><Link href="/vacinas" style={{ color: 'white', textDecoration: 'none' }}>Vacinas</Link></li>
          <li><Link href="/mitos-verdades" style={{ color: 'white', textDecoration: 'none' }}>Mitos e Verdades</Link></li>
          <li><Link href="/calendario" style={{ color: 'white', textDecoration: 'none' }}>Calendário</Link></li>
        </ul>
      </nav>
    </header>
  );
}