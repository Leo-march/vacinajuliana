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
          <li><Link href="/"><a style={{ color: 'white', textDecoration: 'none' }}>Início</a></Link></li>
          <li><Link href="/vacinas"><a style={{ color: 'white', textDecoration: 'none' }}>Vacinas</a></Link></li>
          <li><Link href="/mitos-verdades"><a style={{ color: 'white', textDecoration: 'none' }}>Mitos e Verdades</a></Link></li>
          <li><Link href="/calendario"><a style={{ color: 'white', textDecoration: 'none' }}>Calendário</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}