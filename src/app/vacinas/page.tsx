'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Vacinas() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
    <main style={{ maxWidth: 1000, margin: '2rem auto', padding: '0 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '1rem' }}>
        Vacinas fornecidas pelo Instituto Butantan
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', lineHeight: 1.6 }}>
        O Butantan produz diversas vacinas importantes para a saúde pública brasileira, incluindo 
        Influenza, Hepatite A, B, HPV, Raiva, e outras.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {vacinas.map((vacina) => (
          <Link 
            key={vacina.id} 
            href={`/vacinas/${vacina.id}`} 
            style={{ textDecoration: 'none' }}
            onMouseEnter={() => setHoveredId(vacina.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div style={{ 
              border: hoveredId === vacina.id ? `3px solid ${vacina.cor}` : '2px solid #b13f3f', 
              borderRadius: 8, 
              padding: 15, 
              width: 160, 
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              backgroundColor: 'white',
              transform: hoveredId === vacina.id ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
              boxShadow: hoveredId === vacina.id 
                ? `0 8px 16px ${vacina.cor}40` 
                : '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                margin: '0 auto 1rem',
                backgroundColor: vacina.cor + '20',
                transition: 'all 0.4s ease',
                transform: hoveredId === vacina.id ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)'
              }}>
                {vacina.icone}
              </div>
              <strong style={{ 
                color: hoveredId === vacina.id ? vacina.cor : '#2c3e50', 
                fontSize: '1rem',
                transition: 'color 0.3s ease',
                display: 'block'
              }}>
                {vacina.nome}
              </strong>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        backgroundColor: '#f8f9fa', 
        borderRadius: 8,
        textAlign: 'center'
      }}>
        <p style={{ color: '#555', fontSize: '0.95rem', marginBottom: '1rem' }}>
          💡 <strong>Dica:</strong> Clique em qualquer vacina acima para ver informações detalhadas sobre 
          composição, indicação, esquema vacinal, eficácia e contraindicações.
        </p>
      </div>

      <div style={{ 
        marginTop: '2rem', 
        textAlign: 'center'
      }}>
        <a 
          href="https://butantan.gov.br/producao/vacinas" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#b13f3f',
            color: 'white',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#8b2f2f';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#b13f3f';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}
        >
          🌐 Visite o site oficial do Butantan
        </a>
      </div>
    </main>
  );
}