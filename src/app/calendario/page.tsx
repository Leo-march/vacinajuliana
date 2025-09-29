export default function Calendario() {
    const calendarioVacinal = [
      { idade: 'Ao nascer', vacinas: 'BCG e Hepatite B' },
      { idade: '2 meses', vacinas: 'Pentavalente, VIP (Poliomielite), Pneumocócica 10, Rotavírus' },
      { idade: '3 meses', vacinas: 'Meningocócica C' },
      { idade: '4 meses', vacinas: 'Pentavalente, VIP, Pneumocócica 10, Rotavírus' },
      { idade: '5 meses', vacinas: 'Meningocócica C' },
      { idade: '6 meses', vacinas: 'Pentavalente, VIP, Pneumocócica 10' },
      { idade: '9 meses', vacinas: 'Febre Amarela' },
      { idade: '12 meses', vacinas: 'Tríplice Viral (Sarampo, Caxumba e Rubéola), Pneumocócica 10, Meningocócica C' },
      { idade: '15 meses', vacinas: 'DTP, VOP (Poliomielite oral), Hepatite A, Tetra Viral' },
      { idade: '4 anos', vacinas: 'DTP, VOP, Febre Amarela, Varicela' },
      { idade: '9-14 anos (meninas)', vacinas: 'HPV (2 doses)' },
      { idade: '11-14 anos (meninos)', vacinas: 'HPV (2 doses)' },
      { idade: '10-19 anos', vacinas: 'Hepatite B, Febre Amarela, dT (Difteria e Tétano)' },
      { idade: '20-59 anos', vacinas: 'Hepatite B, Febre Amarela, dT, Tríplice Viral' },
      { idade: '60+ anos', vacinas: 'Influenza (anual), Pneumocócica 23, dT, Febre Amarela' },
      { idade: 'Gestantes', vacinas: 'dTpa, Hepatite B, Influenza' }
    ];
  
    return (
      <main style={{ maxWidth: 1000, margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
            Calendário Nacional de Vacinação 2025
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6 }}>
            Confira abaixo o calendário atualizado, com as vacinas recomendadas por faixa etária
          </p>
        </div>
  
        <div style={{ 
          backgroundColor: '#fff3cd', 
          padding: '1rem', 
          borderRadius: 8, 
          marginBottom: '2rem',
          borderLeft: '4px solid #ffc107'
        }}>
          <p style={{ margin: 0, color: '#856404' }}>
            ⚠️ <strong>Importante:</strong> Este calendário é uma referência geral. Consulte sempre um profissional 
            de saúde para orientações personalizadas e verifique sua caderneta de vacinação.
          </p>
        </div>
  
        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            backgroundColor: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            borderRadius: 8,
            overflow: 'hidden'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#b13f3f', color: 'white' }}>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '1rem', 
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  Idade
                </th>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '1rem', 
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  Vacinas Recomendadas
                </th>
              </tr>
            </thead>
            <tbody>
              {calendarioVacinal.map((item, index) => (
                <tr 
                  key={index} 
                  style={{ 
                    borderBottom: '1px solid #e0e0e0',
                    backgroundColor: index % 2 === 0 ? 'white' : '#f8f9fa'
                  }}
                >
                  <td style={{ 
                    padding: '1rem', 
                    fontWeight: '600',
                    color: '#2c3e50',
                    verticalAlign: 'top',
                    minWidth: '150px'
                  }}>
                    {item.idade}
                  </td>
                  <td style={{ 
                    padding: '1rem',
                    color: '#555',
                    lineHeight: 1.6
                  }}>
                    {item.vacinas}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem'
        }}>
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: '#e3f2fd', 
            borderRadius: 12,
            borderLeft: '4px solid #2196f3'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
              📱 Caderneta Digital
            </h3>
            <p style={{ color: '#555', lineHeight: 1.6, margin: 0 }}>
              Acesse o aplicativo Conecte SUS para visualizar e gerenciar seu histórico de vacinação digital.
            </p>
          </div>
  
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: '#f3e5f5', 
            borderRadius: 12,
            borderLeft: '4px solid #9c27b0'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
              🏥 Onde Vacinar
            </h3>
            <p style={{ color: '#555', lineHeight: 1.6, margin: 0 }}>
              As vacinas do calendário nacional estão disponíveis gratuitamente em todas as Unidades Básicas de Saúde (UBS).
            </p>
          </div>
  
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: '#e8f5e9', 
            borderRadius: 12,
            borderLeft: '4px solid #4caf50'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
              ⏰ Mantenha-se em Dia
            </h3>
            <p style={{ color: '#555', lineHeight: 1.6, margin: 0 }}>
              Verifique regularmente sua caderneta de vacinação e de seus familiares para garantir a proteção completa.
            </p>
          </div>
        </div>
  
        <div style={{ 
          marginTop: '3rem', 
          padding: '2rem', 
          backgroundColor: 'white',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
            💉 Por que seguir o calendário vacinal?
          </h3>
          <ul style={{ color: '#555', lineHeight: 2, marginLeft: '1.5rem' }}>
            <li>Proteção individual contra doenças graves e potencialmente fatais</li>
            <li>Proteção coletiva através da imunidade de rebanho</li>
            <li>Redução da circulação de vírus e bactérias na comunidade</li>
            <li>Prevenção de surtos e epidemias</li>
            <li>Economia em gastos com tratamentos de doenças evitáveis</li>
          </ul>
        </div>
      </main>
    );
  }