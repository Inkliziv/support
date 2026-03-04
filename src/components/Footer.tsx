import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" role="contentinfo">
            <div className="container footer__inner">
                <div className="footer__brand">
                    <a href="#hero" className="footer__logo" aria-label="Inklyuziv Yordam Markazi – Bosh sahifaga qaytish">
                        <span aria-hidden="true">♿</span>
                        <span>Inklyuziv Yordam Markazi</span>
                    </a>
                    <p className="footer__tagline">
                        Tenglik. Imkoniyat. Qadr-qimmat.
                    </p>
                    <div className="footer__social" aria-label="Ijtimoiy tarmoqlar">
                        <a href="#" aria-label="Telegram kanaliga o'tish" className="footer__social-link">
                            <span aria-hidden="true">✈️</span>
                        </a>
                        <a href="#" aria-label="Instagram sahifasiga o'tish" className="footer__social-link">
                            <span aria-hidden="true">📸</span>
                        </a>
                        <a href="#" aria-label="Facebook sahifasiga o'tish" className="footer__social-link">
                            <span aria-hidden="true">👥</span>
                        </a>
                    </div>
                </div>

                <nav className="footer__links-grid" aria-label="Footer navigatsiya">
                    <div className="footer__col">
                        <h3 className="footer__col-title">Xizmatlar</h3>
                        <ul>
                            <li><a href="#social-rights">Ijtimoiy huquqlar</a></li>
                            <li><a href="#job-board">Ish joylar</a></li>
                            <li><a href="#support-map">Yordam markazlari</a></li>
                            <li><a href="#contact">Konsultatsiya</a></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h3 className="footer__col-title">Huquqiy ma'lumot</h3>
                        <ul>
                            <li><a href="#social-rights">Pensiya huquqi</a></li>
                            <li><a href="#social-rights">Tibbiy imtiyozlar</a></li>
                            <li><a href="#social-rights">Transport huquqlari</a></li>
                            <li><a href="#social-rights">Ta'lim kvotasi</a></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h3 className="footer__col-title">Bog'lanish</h3>
                        <ul>
                            <li>
                                <a href="tel:+998711234567">📞 +998 71 123-45-67</a>
                            </li>
                            <li>
                                <a href="mailto:info@inklyuziv.uz">✉️ info@inklyuziv.uz</a>
                            </li>
                            <li>
                                <span>📍 Toshkent sh., Amir Temur ko'chasi 25</span>
                            </li>
                            <li>
                                <span>🕐 Du–Ju: 09:00–18:00</span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <p>© {year} Inklyuziv Yordam Markazi. Barcha huquqlar himoyalangan.</p>
                    <div className="footer__bottom-links">
                        <a href="#contact">Maxfiylik siyosati</a>
                        <a href="#contact">Foydalanish shartlari</a>
                        <a href="#contact">Sayt xaritasi</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
