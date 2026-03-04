import React from 'react';
import './SupportMap.css';

const centers = [
    {
        name: 'Toshkent Reabilitatsiya Markazi',
        type: 'Reabilitatsiya',
        address: 'Toshkent sh., Mirzo Ulug\'bek tumani, Amir Temur ko\'chasi 18',
        phone: '+998 71 233 55 70',
        hours: 'Du–Ju: 08:00–17:00',
        services: ['Jismoniy reabilitatsiya', 'Psixologik yordam', 'Ish topish bo\'yicha maslahat'],
        icon: '🏥',
    },
    {
        name: 'Ijtimoiy Yordam Markazi № 1',
        type: 'Ijtimoiy yordam',
        address: 'Toshkent sh., Chilonzor tumani, Qoratosh ko\'chasi 45',
        phone: '+998 71 275 44 12',
        hours: 'Du–Ju: 09:00–18:00',
        services: ['Nafaqalar ro\'yxatdan o\'tkazish', 'Hujjatlar rasmiylashtirish', 'Ijtimoiy xizmatchilar'],
        icon: '🤝',
    },
    {
        name: 'Maxsus Ta\'lim Resurslari Markazi',
        type: 'Ta\'lim',
        address: 'Toshkent sh., Yunusobod tumani, Abuhayr ko\'chasi 12',
        phone: '+998 71 265 33 80',
        hours: 'Du–Ju: 08:00–17:00, Sh: 09:00–14:00',
        services: ['Maktabgacha ta\'lim', 'Maxsus ehtiyojlarga moslashtirilgan ta\'lim', 'Individual mashg\'ulotlar'],
        icon: '🎓',
    },
    {
        name: 'Nogironlar Uchun Bandlik Markazi',
        type: 'Bandlik',
        address: 'Toshkent sh., Shayxontohur tumani, Labzak ko\'chasi 7',
        phone: '+998 71 244 22 45',
        hours: 'Du–Ju: 09:00–17:00',
        services: ['Kasb tanlash maslahati', 'CV tayyorlash yordam', 'Ish o\'rinlarini taqsimlash'],
        icon: '💼',
    },
    {
        name: 'Bepul Huquqiy Yordam Klinikasi',
        type: 'Huquqiy',
        address: 'Toshkent sh., Olmazor tumani, Olmazor ko\'chasi 30',
        phone: '+998 71 291 11 30',
        hours: 'Du–Ju: 10:00–17:00',
        services: ['Bepul huquqiy maslahat', 'Sud hujjatlari tayyorlash', 'Qonuniy vakillik'],
        icon: '⚖️',
    },
    {
        name: 'Ruhiy Salomatlik Klinikasi',
        type: 'Tibbiyot',
        address: 'Toshkent sh., Uchtepa tumani, Bunyodkor ko\'chasi 55',
        phone: '+998 71 256 88 90',
        hours: 'Du–Sh: 09:00–18:00',
        services: ['Psixiatr', 'Psixolog', 'Guruh terapiyasi seanslari'],
        icon: '🧠',
    },
];

const typeColors: Record<string, string> = {
    'Reabilitatsiya': 'tag--accent',
    'Ijtimoiy yordam': 'tag--green',
    'Ta\'lim': 'tag',
    'Bandlik': 'tag--accent',
    'Huquqiy': 'tag--green',
    'Tibbiyot': 'tag',
};

const SupportMap: React.FC = () => {
    return (
        <section id="support-map" className="support-map" aria-labelledby="support-map-title">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <span className="badge">Yordamchi markazlar</span>
                    <h2 id="support-map-title">Mahalliy yordam ko'rsatish punktlari</h2>
                    <div className="divider" />
                    <p>Yaqin atrofdagi tibbiy va ijtimoiy yordam markazlarini toping. Barcha xizmatlar bepul yoki imtiyozli narxlarda.</p>
                </div>

                {/* Map placeholder */}
                <div className="support-map__map-wrap" role="img" aria-label="Toshkent shahridagi yordam markazlari xaritasi">
                    <div className="support-map__map-placeholder">
                        <div className="map-grid" aria-hidden="true">
                            {Array.from({ length: 24 }).map((_, i) => <div key={i} className="map-grid-cell" />)}
                        </div>
                        <div className="map-pins" aria-hidden="true">
                            {centers.map((c, i) => (
                                <div
                                    key={i}
                                    className="map-pin"
                                    style={{ left: `${15 + (i % 3) * 32}%`, top: `${20 + Math.floor(i / 3) * 48}%` }}
                                    title={c.name}
                                >
                                    <span className="map-pin__icon">{c.icon}</span>
                                    <span className="map-pin__label">{c.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="map-overlay-label">
                            <span>📍</span>
                            <span>Interaktiv xarita tez orada ishga tushadi</span>
                        </div>
                    </div>
                </div>

                {/* Center Cards */}
                <div className="centers__grid grid-3">
                    {centers.map((center, i) => (
                        <article key={i} className="card center-card" aria-label={center.name}>
                            <div className="center-card__header">
                                <div className="center-card__icon icon-box" aria-hidden="true">{center.icon}</div>
                                <span className={`tag ${typeColors[center.type] || 'tag'}`}>{center.type}</span>
                            </div>
                            <h3 className="center-card__name">{center.name}</h3>
                            <address className="center-card__details">
                                <div className="center-detail">
                                    <span aria-hidden="true">📍</span>
                                    <span>{center.address}</span>
                                </div>
                                <div className="center-detail">
                                    <span aria-hidden="true">📞</span>
                                    <a href={`tel:${center.phone.replace(/\s/g, '')}`}>{center.phone}</a>
                                </div>
                                <div className="center-detail">
                                    <span aria-hidden="true">🕐</span>
                                    <span>{center.hours}</span>
                                </div>
                            </address>
                            <ul className="center-card__services" aria-label="Ko'rsatiladigan xizmatlar">
                                {center.services.map(svc => (
                                    <li key={svc} className="center-service-item">
                                        <span aria-hidden="true">✓</span> {svc}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="btn btn-navy center-card__btn" aria-label={`${center.name} bilan bog'lanish`}>
                                Yo'nalish olish
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SupportMap;
