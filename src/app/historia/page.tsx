export default function Historia() {
    const timeline = [
      {
        ano: '1796',
        titulo: 'Primeira Vacina da História',
        descricao: 'Edward Jenner cria a primeira vacina contra a varíola, usando material de lesões de varíola bovina. O termo "vacina" vem do latim "vacca" (vaca).',
        icone: '🔬',
        cor: '#e74c3c'
      },
      {
        ano: '1885',
        titulo: 'Vacina contra a Raiva',
        descricao: 'Louis Pasteur desenvolve a vacina antirrábica e a testa pela primeira vez em um ser humano, salvando a vida de um menino mordido por um cão raivoso.',
        icone: '🐕',
        cor: '#e67e22'
      },
      {
        ano: '1901',
        titulo: 'Fundação do Instituto Butantan',
        descricao: 'Criado em São Paulo para produzir soro antipestoso durante um surto de peste bubônica. Desde então, tornou-se referência em produção de vacinas e soros.',
        icone: '🏛️',
        cor: '#f39c12'
      },
      {
        ano: '1923',
        titulo: 'BCG contra Tuberculose',
        descricao: 'Albert Calmette e Camille Guérin desenvolvem a vacina BCG (Bacilo de Calmette-Guérin), ainda hoje aplicada em recém-nascidos.',
        icone: '💉',
        cor: '#16a085'
      },
      {
        ano: '1955',
        titulo: 'Vacina contra Poliomielite',
        descricao: 'Jonas Salk desenvolve a primeira vacina inativada contra a pólio. Anos depois, Albert Sabin cria a versão oral, facilitando a imunização em massa.',
        icone: '🦠',
        cor: '#2980b9'
      },
      {
        ano: '1963-1971',
        titulo: 'Tríplice Viral',
        descricao: 'Desenvolvimento das vacinas contra sarampo (1963), caxumba (1967) e rubéola (1969), posteriormente combinadas na vacina tríplice viral.',
        icone: '💊',
        cor: '#8e44ad'
      },
      {
        ano: '1980',
        titulo: 'Erradicação da Varíola',
        descricao: 'A Organização Mundial da Saúde declara a varíola erradicada do planeta, primeira doença eliminada pela vacinação. Um dos maiores triunfos da saúde pública.',
        icone: '🌍',
        cor: '#27ae60'
      },
      {
        ano: '1986',
        titulo: 'Vacinas Combinadas',
        descricao: 'Desenvolvimento e implementação de vacinas combinadas como a Pentavalente, reduzindo o número de injeções necessárias em crianças.',
        icone: '🎯',
        cor: '#c0392b'
      },
      {
        ano: '2006',
        titulo: 'Vacina contra HPV',
        descricao: 'Aprovação da primeira vacina contra o papilomavírus humano (HPV), capaz de prevenir diversos tipos de câncer, incluindo câncer de colo de útero.',
        icone: '🛡️',
        cor: '#d35400'
      },
      {
        ano: '2020-2021',
        titulo: 'Vacinas contra COVID-19',
        descricao: 'Desenvolvimento recorde de múltiplas vacinas contra COVID-19, incluindo tecnologias inovadoras como mRNA. O Butantan produziu a CoronaVac para o Brasil.',
        icone: '🚀',
        cor: '#2c3e50'
      }
    ];
  
    return (
      <main style={{ maxWidth: 1000, margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
            História da Vacinação
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6 }}>
            Uma jornada de mais de 200 anos salvando vidas e erradicando doenças
          </p>
        </div>
  
        <div style={{
          backgroundColor: '#e8f5e9',
          padding: '2rem',
          borderRadius: 12,
          marginBottom: '3rem',
          borderLeft: '4px solid #27ae60'
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
            🏆 O Impacto das Vacinas
          </h3>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
            As vacinas estão entre as maiores conquistas da medicina. Estima-se que salvam entre 2 a 3 milhões 
            de vidas por ano em todo o mundo. Doenças que antes eram devastadoras, como varíola e poliomielite, 
            foram erradicadas ou controladas graças à imunização.
          </p>
          <p style={{ color: '#555', lineHeight: 1.8, margin: 0 }}>
            No Brasil, o Programa Nacional de Imunizações (PNI), criado em 1973, é reconhecido 
            internacionalmente como um dos mais completos e bem-sucedidos programas de vacinação do mundo.
          </p>
        </div>
  
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Linha vertical da timeline */}
          <div style={{
            position: 'absolute',
            left: '2.5rem',
            top: '3rem',
            bottom: '3rem',
            width: '3px',
            backgroundColor: '#e0e0e0'
          }} />
  
          {timeline.map((evento, index) => (
            <div 
              key={index}
              style={{
                position: 'relative',
                marginBottom: '2.5rem',
                paddingLeft: '3rem'
              }}
            >
              {/* Bolinha na timeline */}
              <div style={{
                position: 'absolute',
                left: '0.9rem',
                top: '1.5rem',
                width: '3rem',
                height: '3rem',
                borderRadius: '50%',
                backgroundColor: evento.cor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                zIndex: 1
              }}>
                {evento.icone}
              </div>
  
              {/* Card do evento */}
              <div style={{
                backgroundColor: 'white',
                borderRadius: 12,
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderLeft: `4px solid ${evento.cor}`,
                marginLeft: '2rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.75rem'
                }}>
                  <span style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: evento.cor,
                    padding: '0.25rem 0.75rem',
                    borderRadius: 6
                  }}>
                    {evento.ano}
                  </span>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    color: '#2c3e50',
                    margin: 0
                  }}>
                    {evento.titulo}
                  </h3>
                </div>
                <p style={{ color: '#555', lineHeight: 1.8, margin: 0 }}>
                  {evento.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
  
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: 'white',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1.5rem' }}>
            🔬 Pioneiros da Vacinação
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#f8f9fa',
              borderRadius: 8,
              borderLeft: '4px solid #3498db'
            }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
                Edward Jenner (1749-1823)
              </h4>
              <p style={{ color: '#555', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
                Médico inglês considerado o "pai da imunologia". Sua descoberta da vacina contra varíola 
                revolucionou a medicina e salvou milhões de vidas.
              </p>
            </div>
  
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#f8f9fa',
              borderRadius: 8,
              borderLeft: '4px solid #e74c3c'
            }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
                Louis Pasteur (1822-1895)
              </h4>
              <p style={{ color: '#555', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
                Cientista francês que desenvolveu a vacina antirrábica e estabeleceu as bases científicas 
                para o desenvolvimento de diversas outras vacinas.
              </p>
            </div>
  
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#f8f9fa',
              borderRadius: 8,
              borderLeft: '4px solid #27ae60'
            }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
                Jonas Salk (1914-1995)
              </h4>
              <p style={{ color: '#555', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
                Virologista americano que desenvolveu a primeira vacina eficaz contra a poliomielite, 
                doença que paralisava milhares de crianças anualmente.
              </p>
            </div>
          </div>
        </div>
  
        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#fff3cd',
          borderRadius: 12,
          borderLeft: '4px solid #ffc107'
        }}>
          <p style={{ margin: 0, color: '#856404', lineHeight: 1.6 }}>
            💡 <strong>Curiosidade:</strong> A palavra "vacina" tem origem no latim <em>vacca</em> (vaca), 
            pois a primeira vacina foi desenvolvida usando material da varíola bovina por Edward Jenner. 
            Essa descoberta pioneira deu origem a uma das maiores conquistas da medicina moderna.
          </p>
        </div>
      </main>
    );
  }