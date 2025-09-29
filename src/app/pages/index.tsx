export default function Home() {
    return (
      <>
        <main style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
          <h1>Bem-vindo ao Instituto Butantan</h1>
          <p>O Instituto Butantan é referência em pesquisa e produção de vacinas, que salvam milhões de vidas no Brasil.</p>
  
          <section style={{ marginTop: '2rem' }}>
            <h2>Destaques sobre a eficácia das vacinas</h2>
            <ul>
              <li>CoronaVac tem eficácia de 78% para casos leves e 100% para casos graves de Covid-19.</li>
              <li>Produção anual de mais de 80 milhões de doses da vacina Influenza.</li>
              <li>Responsável por mais de 65% do fornecimento nacional de vacinas para o SUS.</li>
              <li>Vacinas seguras, produzidas com rigorosos protocolos de controle de qualidade.</li>
            </ul>
          </section>
        </main>
      </>
    );
  }