import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
    { href: '#hero', label: 'Bosh sahifa' },
    { href: '#social-rights', label: 'Ijtimoiy huquqlar' },
    { href: '#job-board', label: 'Ish joylar' },
    { href: '#support-map', label: 'Yordamchi markazlar' },
    { href: '#contact', label: 'Bog\'lanish' },
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
            <div className="container navbar__inner">
                <a href="#hero" className="navbar__brand" aria-label="Inklyuziv Yordam Markazi – Bosh sahifaga qaytish">
                    <span className="navbar__logo-icon" aria-hidden="true">♿</span>
                    <span className="navbar__brand-text">
                        <span className="navbar__brand-main">Inklyuziv</span>
                        <span className="navbar__brand-sub">Yordam Markazi</span>
                    </span>
                </a>

                <nav role="navigation" aria-label="Asosiy navigatsiya">
                    <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`} role="list">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="navbar__link"
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" className="btn btn-primary navbar__cta" onClick={closeMenu}>
                                Konsultatsiya olish
                            </a>
                        </li>
                    </ul>
                </nav>

                <button
                    className="navbar__hamburger"
                    aria-expanded={menuOpen}
                    aria-controls="nav-menu"
                    aria-label={menuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
                    onClick={() => setMenuOpen(v => !v)}
                >
                    <span className={`hamburger-bar${menuOpen ? ' hamburger-bar--open' : ''}`} />
                    <span className={`hamburger-bar${menuOpen ? ' hamburger-bar--open' : ''}`} />
                    <span className={`hamburger-bar${menuOpen ? ' hamburger-bar--open' : ''}`} />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
