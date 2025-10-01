'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div style={{ padding: '2rem 1rem', maxWidth: 1200, margin: '0 auto' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'white', 
        borderRadius: 15, 
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
        padding: '3rem 2rem', 
        marginBottom: '3rem', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
          Instituto Butantan
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#7f8c8d', marginBottom: '0.5rem' }}>
          Mais de 120 anos protegendo a saúde pública brasileira
        </p>
        <p style={{ fontSize: '1.1rem', color: '#95a5a6', lineHeight: 1.6, maxWidth: 800, margin: '0 auto' }}>
          Referência mundial em pesquisa, produção de vacinas, soros e biofármacos
        </p>
      </div>

      {/* Cards de Dados Rápidos */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 12,
          padding: '2rem',
          color: 'white',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💉</div>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>80%</h3>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            Das vacinas do Programa Nacional de Imunizações
          </p>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          borderRadius: 12,
          padding: '2rem',
          color: 'white',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏭</div>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>100M+</h3>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            Doses de vacinas produzidas anualmente
          </p>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          borderRadius: 12,
          padding: '2rem',
          color: 'white',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔬</div>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>15+</h3>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            Vacinas e soros diferentes produzidos
          </p>
        </div>
      </div>

      {/* Seção Sobre Vacinação */}
      <div style={{
        background: 'white',
        borderRadius: 12,
        padding: '2.5rem',
        marginBottom: '3rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1.5rem', textAlign: 'center' }}>
          Por que a vacinação é importante?
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem'
        }}>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🛡️</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
              Proteção Individual
            </h3>
            <p style={{ color: '#555', lineHeight: 1.6 }}>
              Vacinas protegem você e sua família contra doenças graves e potencialmente fatais.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>👨‍👩‍👧‍👦</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
              Imunidade Coletiva
            </h3>
            <p style={{ color: '#555', lineHeight: 1.6 }}>
              Quando muitas pessoas se vacinam, protegem também quem não pode ser imunizado.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌍</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
              Erradicação de Doenças
            </h3>
            <p style={{ color: '#555', lineHeight: 1.6 }}>
              A vacinação em massa já erradicou a varíola e quase eliminou a poliomielite.
            </p>
          </div>
        </div>
      </div>

      {/* CTA - Navegação */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        <Link href="/vacinas" style={{ textDecoration: 'none' }}>
          <div 
            style={{
              background: 'white',
              borderRadius: 12,
              padding: '2rem',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: hoveredCard === 'vacinas' ? '3px solid #b13f3f' : '2px solid #b13f3f',
              height: '100%',
              transform: hoveredCard === 'vacinas' ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hoveredCard === 'vacinas' 
                ? '0 8px 16px rgba(177,63,63,0.3)' 
                : '0 4px 6px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={() => setHoveredCard('vacinas')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💉</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
              Nossas Vacinas
            </h3>
            <p style={{ color: '#555', lineHeight: 1.6, margin: 0 }}>
              Conheça as vacinas produzidas pelo Instituto Butantan
            </p>
          </div>
        </Link>

        <Link href="/mitos-verdades" style={{ textDecoration: 'none' }}>
          <div 
            style={{
              background: 'white',
              borderRadius: 12,
              padding: '2rem',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: hoveredCard === 'mitos' ? '3px solid #b13f3f' : '2px solid #b13f3f',
              height: '100%',
              transform: hoveredCard === 'mitos' ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hoveredCard === 'mitos' 
                ? '0 8px 16px rgba(177,63,63,0.3)' 
                : '0 4px 6px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={() => setHoveredCard('mitos')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❓</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
              Mitos e Verdades
            </h3>
            <p style={{ color: '#555', lineHeight: 1.6, margin: 0 }}>
              Esclareça suas dúvidas sobre vacinação
            </p>
          </div>
        </Link>

        <Link href="/calendario" style={{ textDecoration: 'none' }}>
          <div 
            style={{
              background: 'white',
              borderRadius: 12,
              padding: '2rem',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: hoveredCard === 'calendario' ? '3px solid #b13f3f' : '2px solid #b13f3f',
              height: '100%',
              transform: hoveredCard === 'calendario' ? 'translateY(-8px)' : 'translateY(0)',
              boxShadow: hoveredCard === 'calendario' 
                ? '0 8px 16px rgba(177,63,63,0.3)' 
                : '0 4px 6px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={() => setHoveredCard('calendario')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '0.5rem' }}>
              Calendário Vacinal
            </h3>
            <p style={{ color: '#555', lineHeight: 1.6, margin: 0 }}>
              Veja o calendário nacional de vacinação
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}