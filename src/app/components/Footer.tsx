import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a202c', color: 'white', padding: '3rem 1rem', marginTop: '3rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1rem' }}>
        {/* Conteúdo Principal */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* Sobre */}
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.25rem' }}>Sobre o Instituto</h3>
            <p style={{ color: '#cbd5e0', fontSize: '0.875rem', lineHeight: 1.6 }}>
              O Instituto Butantan é um dos principais centros de pesquisa biomédica do mundo, 
              responsável pela produção de vacinas e soros para o SUS.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.25rem' }}>Navegação</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Início</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/vacinas" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Vacinas</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/mitos-verdades" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Mitos e Verdades</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/calendario" style={{ color: '#cbd5e0', textDecoration: 'none' }}>Calendário</Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.25rem' }}>Contato</h3>
            <address style={{ fontStyle: 'normal', color: '#cbd5e0', fontSize: '0.875rem', lineHeight: 1.5 }}>
              Av. Vital Brasil, 1500<br />
              São Paulo, SP - CEP: 05503-900<br />
              Telefone: (11) 2627-9600
            </address>
          </div>
        </div>

        {/* Referências */}
        <div style={{ borderTop: '1px solid #4a5568', paddingTop: '2rem', marginBottom: '2rem' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.25rem' }}>Referências</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e0', fontSize: '0.875rem', lineHeight: 1.8 }}>
            <li>• Ministério da Saúde - Calendário Nacional de Vacinação 2024</li>
            <li>• Instituto Butantan - Portal de Produtos e Vacinas</li>
            <li>• Sociedade Brasileira de Imunizações (SBIm)</li>
            <li>• ANVISA - Agência Nacional de Vigilância Sanitária</li>
            <li>• Organização Mundial da Saúde (OMS) - Imunização</li>
            <li>• Centers for Disease Control and Prevention (CDC)</li>
            <li>• Manual dos Centros de Referência para Imunobiológicos Especiais (CRIE)</li>
            <li>• Programa Nacional de Imunizações (PNI)</li>
          </ul>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid #4a5568', paddingTop: '1.5rem', textAlign: 'center', color: '#a0aec0', fontSize: '0.875rem' }}>
          <p>© {new Date().getFullYear()} Instituto Butantan. Todos os direitos reservados.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
            Este site tem fins educativos. Sempre consulte um profissional de saúde para orientações específicas.
          </p>
        </div>
      </div>
    </footer>
  );
}