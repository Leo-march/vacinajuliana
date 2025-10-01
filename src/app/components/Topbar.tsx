'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header style={{
        backgroundColor: '#b13f3f',
        padding: '1rem 2rem',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        position: 'relative',
        zIndex: 1000
      }}>
        <div>💉 Instituto Butantan</div>
        
        {/* Menu Desktop */}
        {!isMobile && (
          <nav>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', margin: 0, padding: 0 }}>
              <li><Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Início</Link></li>
              <li><Link href="/vacinas" style={{ color: 'white', textDecoration: 'none' }}>Vacinas</Link></li>
              <li><Link href="/mitos-verdades" style={{ color: 'white', textDecoration: 'none' }}>Mitos e Verdades</Link></li>
              <li><Link href="/calendario" style={{ color: 'white', textDecoration: 'none' }}>Calendário</Link></li>
              <li><Link href="/historia" style={{ color: 'white', textDecoration: 'none' }}>História</Link></li>
            </ul>
          </nav>
        )}

        {/* Botão Menu Mobile */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.8rem',
              cursor: 'pointer',
              padding: '0.5rem',
              zIndex: 1001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        )}
      </header>

      {/* Overlay */}
      {isMenuOpen && isMobile && (
        <div
          onClick={closeMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998
          }}
        />
      )}

      {/* Sidebar Mobile */}
      {isMobile && (
        <aside
          style={{
            position: 'fixed',
            top: 0,
            right: isMenuOpen ? 0 : '-300px',
            width: '280px',
            height: '100vh',
            backgroundColor: '#b13f3f',
            boxShadow: '-4px 0 12px rgba(0,0,0,0.3)',
            transition: 'right 0.3s ease',
            zIndex: 999,
            overflowY: 'auto'
          }}
        >
          <div style={{ padding: '2rem 1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '2px solid rgba(255,255,255,0.3)'
            }}>
              <h2 style={{ 
                color: 'white', 
                margin: 0,
                fontSize: '1.3rem',
                fontWeight: 'bold'
              }}>
                Menu
              </h2>
              <button
                onClick={closeMenu}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.8rem',
                  cursor: 'pointer',
                  padding: '0.25rem'
                }}
                aria-label="Fechar menu"
              >
                ✕
              </button>
            </div>

            <nav>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <li>
                  <Link 
                    href="/" 
                    onClick={closeMenu}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span style={{ fontSize: '1.3rem' }}>🏠</span>
                    Início
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/vacinas" 
                    onClick={closeMenu}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span style={{ fontSize: '1.3rem' }}>💉</span>
                    Vacinas
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/mitos-verdades" 
                    onClick={closeMenu}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span style={{ fontSize: '1.3rem' }}>❓</span>
                    Mitos e Verdades
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/calendario" 
                    onClick={closeMenu}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span style={{ fontSize: '1.3rem' }}>📅</span>
                    Calendário
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/historia" 
                    onClick={closeMenu}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span style={{ fontSize: '1.3rem' }}>📜</span>
                    História
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
}