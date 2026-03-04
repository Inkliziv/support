import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero" aria-labelledby="hero-title">
            <div className="hero__bg-shapes" aria-hidden="true">
                <div className="shape shape--1" />
                <div className="shape shape--2" />
                <div className="shape shape--3" />
            </div>
            <div className="container hero__inner">
                <div className="hero__content animate-fade-in">
                    <div className="hero__badge" role="doc-subtitle">
                        <span aria-hidden="true">♿</span> Hamma uchun imkoniyat
                    </div>
                    <h1 id="hero-title" className="hero__title">
                        Inklyuziv <span className="hero__title-accent">Yordam</span> Markazi
                    </h1>
                    <p className="hero__subtitle">
                        Nogironlar va himoyaga muhtoj guruhlar uchun bepul huquqiy maslahat,
                        ish imkoniyatlari va ijtimoiy yordam xizmatlarining yagona platformasi.
                    </p>
                    <div className="hero__stats" role="list" aria-label="Platforma statistikasi">
                        <div className="hero__stat" role="listitem">
                            <span className="hero__stat-number">5 000+</span>
                            <span className="hero__stat-label">Foydalanuvchi</span>
                        </div>
                        <div className="hero__stat-divider" aria-hidden="true" />
                        <div className="hero__stat" role="listitem">
                            <span className="hero__stat-number">200+</span>
                            <span className="hero__stat-label">Ish o'rni</span>
                        </div>
                        <div className="hero__stat-divider" aria-hidden="true" />
                        <div className="hero__stat" role="listitem">
                            <span className="hero__stat-number">80+</span>
                            <span className="hero__stat-label">Yordam markazi</span>
                        </div>
                    </div>
                    <div className="hero__actions">
                        <a href="#social-rights" className="btn btn-primary">
                            Huquqlarimni bilaman
                        </a>
                        <a href="#job-board" className="btn btn-outline">
                            Ish topaman
                        </a>
                    </div>
                </div>

                <div className="hero__visual animate-fade-in-delay-2" aria-hidden="true">
                    <div className="hero__card-float hero__card-float--1">
                        <span>✅</span>
                        <span>Huquqlaringiz himoyalangan</span>
                    </div>
                    <div className="hero__illustration">
                        <div className="illustration__circle illustration__circle--outer" />
                        <div className="illustration__circle illustration__circle--middle" />
                        <div className="illustration__icon-wrap">
                            <span className="illustration__icon">🤝</span>
                        </div>
                    </div>
                    <div className="hero__card-float hero__card-float--2">
                        <span>🌟</span>
                        <span>Barchaga teng imkoniyat</span>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator" aria-hidden="true">
                <span className="scroll-dot" />
            </div>
        </section>
    );
};

export default Hero;
