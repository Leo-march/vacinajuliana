// ============================================
// src/app/mitos-verdades/page.tsx
// ============================================
export default function MitosVerdades() {
    const mitos = [
      { 
        mito: "Vacinas causam doenças graves", 
        verdade: "Mito: Vacinas podem provocar efeitos leves e temporários, mas eventos graves são extremamente raros. Os benefícios da vacinação superam amplamente os riscos.",
        icone: "❌"
      },
      { 
        mito: "Só crianças precisam tomar vacinas", 
        verdade: "Mito: Adultos também precisam de imunização contra várias doenças, incluindo gripe, tétano, hepatites e outras. O calendário vacinal é para todas as idades.",
        icone: "❌"
      },
      { 
        mito: "Vacinas não são seguras", 
        verdade: "Mito: Todas as vacinas passam por testes rigorosos e controle de qualidade antes de serem aprovadas. São monitoradas continuamente após aprovação.",
        icone: "❌"
      },
      { 
        mito: "Vacinas causam autismo", 
        verdade: "Mito: Diversos estudos científicos comprovaram que não há relação entre vacinas e autismo. Este mito foi baseado em um estudo fraudulento já desmentido.",
        icone: "❌"
      },
      { 
        mito: "Vacinas controlam epidemias", 
        verdade: "Verdade: Imunizantes foram essenciais para o controle e erradicação de diversas doenças no Brasil e no mundo, como poliomielite e varíola.",
        icone: "✅"
      },
      { 
        mito: "É melhor ter imunidade natural do que pela vacina", 
        verdade: "Mito: Embora a imunidade natural possa ser forte, o risco de complicações graves da doença é muito maior que os riscos da vacinação.",
        icone: "❌"
      },
      { 
        mito: "Vacinas contêm ingredientes perigosos", 
        verdade: "Mito: Os componentes das vacinas são seguros nas quantidades utilizadas. Substâncias como alumínio e formaldeído estão em níveis muito menores que os encontrados naturalmente no ambiente.",
        icone: "❌"
      },
      { 
        mito: "A vacinação em massa protege a comunidade", 
        verdade: "Verdade: A imunidade coletiva (ou de rebanho) protege pessoas que não podem ser vacinadas, como bebês e imunodeprimidos.",
        icone: "✅"
      }
    ];
  
    return (
      <main style={{ maxWidth: 900, margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
            Mitos e Verdades sobre Vacinação
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6 }}>
            Esclarecendo dúvidas comuns sobre vacinas com base em evidências científicas
          </p>
        </div>
  
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {mitos.map(({ mito, verdade, icone }, i) => (
            <li 
              key={i} 
              style={{ 
                marginBottom: '2rem',
                padding: '1.5rem',
                backgroundColor: 'white',
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderLeft: icone === "✅" ? '4px solid #27ae60' : '4px solid #e74c3c'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{icone}</span>
                <div>
                  <strong style={{ fontSize: '1.2rem', color: '#2c3e50', display: 'block', marginBottom: '0.5rem' }}>
                    {mito}
                  </strong>
                  <p style={{ color: '#555', lineHeight: 1.8, margin: 0 }}>
                    {verdade}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
  
        <div style={{ 
          marginTop: '3rem', 
          padding: '2rem', 
          backgroundColor: '#e8f5e9', 
          borderRadius: 12,
          borderLeft: '4px solid #27ae60'
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
            📚 Fontes Confiáveis
          </h3>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
            Para mais informações baseadas em ciência sobre vacinas, consulte:
          </p>
          <ul style={{ color: '#555', lineHeight: 2, marginLeft: '1.5rem' }}>
            <li>Organização Mundial da Saúde (OMS)</li>
            <li>Ministério da Saúde do Brasil</li>
            <li>Sociedade Brasileira de Imunizações (SBIm)</li>
            <li>Instituto Butantan</li>
            <li>Fundação Oswaldo Cruz (Fiocruz)</li>
          </ul>
        </div>
      </main>
    );
  }