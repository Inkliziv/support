import React, { useState } from 'react';
import './SocialRights.css';

const rights = [
    {
        icon: '📋',
        title: 'Ijtimoiy pensiya',
        desc: 'Nogironlik darajasiga ko\'ra davlat pensiyasi olishga haqingiz bor. Ariza topshirish uchun "Fuqarolarga xizmat" markaziga murojaat qiling.',
        tags: ['Moliyaviy yordam', 'Davlat nafaqasi'],
        link: '#contact',
    },
    {
        icon: '🏥',
        title: 'Bepul tibbiy xizmat',
        desc: 'I va II guruh nogironlar uchun davlat poliklinikalarida bepul davolash, dori-darmon va reabilitatsiya xizmatlaridan foydalanish huquqi.',
        tags: ['Sog\'liqni saqlash', 'Bepul xizmat'],
        link: '#contact',
    },
    {
        icon: '🏠',
        title: 'Uy-joy imtiyozlari',
        desc: 'Nogironlar uchun kommunal to\'lovlarda 50% chegirma va navbatdan tashqari davlat uy-joyi olish huquqi nazarda tutilgan.',
        tags: ['Uy-joy', 'Chegirma'],
        link: '#contact',
    },
    {
        icon: '🎓',
        title: 'Ta\'lim huquqi',
        desc: 'Maxsus ta\'lim ehtiyojlari bo\'lgan shaxslar oliy o\'quv yurtlariga kvota asosida kirishlari va stipendiya olishlari mumkin.',
        tags: ['Ta\'lim', 'Kvota'],
        link: '#contact',
    },
    {
        icon: '💼',
        title: 'Mehnatga joylashish',
        desc: 'Mahalliy bandlik markazlari kvota asosida nogironlarni ish bilan ta\'minlashga majbur. Ish beruvchilar uchun soliq imtiyozlari mavjud.',
        tags: ['Ish', 'Kvota', 'Imtiyoz'],
        link: '#job-board',
    },
    {
        icon: '🚌',
        title: 'Transport imtiyozlari',
        desc: 'I va II guruh nogironlar va ularning hamrohlari shahar jamoat transportidan bepul foydalanish huquqiga ega.',
        tags: ['Transport', 'Bepul'],
        link: '#contact',
    },
];

const SocialRights: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <section id="social-rights" className="social-rights" aria-labelledby="social-rights-title">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <span className="badge">Ijtimoiy huquqlar</span>
                    <h2 id="social-rights-title">Sizning huquqlaringiz</h2>
                    <div className="divider" />
                    <p>O'zbekiston qonunchiligi asosida nogironlar va himoyaga muhtoj shaxslarga berilgan huquqlar va davlat kafolatlari.</p>
                </div>

                <div className="rights__grid grid-3">
                    {rights.map((right, i) => (
                        <article
                            key={i}
                            className={`card rights__card${expanded === i ? ' rights__card--expanded' : ''}`}
                            aria-label={right.title}
                        >
                            <div className="icon-box" aria-hidden="true">{right.icon}</div>
                            <h3 className="rights__card-title">{right.title}</h3>
                            <p className="rights__card-desc">{right.desc}</p>
                            <div className="rights__tags" role="list" aria-label="Teglar">
                                {right.tags.map(tag => (
                                    <span key={tag} className="tag tag--accent" role="listitem">{tag}</span>
                                ))}
                            </div>
                            <a href={right.link} className="rights__link" aria-label={`${right.title} bo'yicha ko'proq ma'lumot`}>
                                Batafsil ma'lumot →
                            </a>
                        </article>
                    ))}
                </div>

                <div className="social-rights__banner animate-fade-in">
                    <div className="banner__icon" aria-hidden="true">⚖️</div>
                    <div className="banner__content">
                        <h3>Huquqlaringiz buzilganmi?</h3>
                        <p>Mutaxassislarimiz bepul huquqiy maslahat berishadi. Ariza qoldiring, 24 soat ichida javob oling.</p>
                    </div>
                    <a href="#contact" className="btn btn-primary">Bepul maslahat olish</a>
                </div>
            </div>
        </section>
    );
};

export default SocialRights;
