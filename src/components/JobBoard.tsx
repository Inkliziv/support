import React, { useState } from 'react';
import './JobBoard.css';

const jobs = [
    {
        title: 'Qo\'ng\'iroq markazi operatori',
        company: 'AloqaServis MChJ',
        location: 'Toshkent (Masofaviy)',
        type: 'To\'liq stavka',
        category: 'IT va aloqa',
        salary: '2 500 000 – 3 500 000 so\'m',
        description: 'Eshitish imkoniyati cheklangan shaxslar uchun moslashtirilgan ish joyi. Imo-ishora tili bo\'yicha kollegalar mavjud.',
        tags: ['Masofaviy', 'Moslashtirilgan', 'Nogironlik huquqi'],
        deadline: '2026-04-01',
    },
    {
        title: 'Ma\'lumotlar kirituvchisi',
        company: 'DataSoft International',
        location: 'Toshkent, Yunusobod',
        type: 'Yarim stavka',
        category: 'IT va texnologiya',
        salary: '1 800 000 – 2 200 000 so\'m',
        description: 'Harakatlanish qiyinchiligi bo\'lgan shaxslar uchun qulay ish muhiti, lift va nogironlar uchun kirish joylashgan.',
        tags: ['Ofis', 'Lift mavjud', 'Langar'],
        deadline: '2026-03-25',
    },
    {
        title: 'Kontent yaratuvchi',
        company: 'MediaUZ',
        location: 'Ko\'rib chiqish mumkin',
        type: 'To\'liq stavka',
        category: 'Ijodiy',
        salary: '3 000 000 – 4 000 000 so\'m',
        description: 'Ijodiy yondashuvning ahamiyatini tan oluvchi muhit. Barcha imkoniyatdagi shaxslar uchun oʻqitish dasturlari mavjud.',
        tags: ['Moslashuvchan', 'Ijod', 'Trening dasturi'],
        deadline: '2026-04-15',
    },
    {
        title: 'Hisobchi',
        company: 'Iqtisod Va Moliya LLC',
        location: 'Toshkent, Mirzo Ulug\'bek',
        type: 'To\'liq stavka',
        category: 'Moliya',
        salary: '4 000 000 – 5 500 000 so\'m',
        description: 'Xayrixoh ish muhiti. Ko\'rish qiyinchiligi bo\'lgan mutaxassislar uchun ekran o\'quvchi dasturlar o\'rnatilgan.',
        tags: ['Ofis', 'Ekran o\'quvchi', 'Imtiyoz'],
        deadline: '2026-03-30',
    },
    {
        title: 'Pedagogika psixologi',
        company: 'Maxsus ta\'lim maktabi № 51',
        location: 'Toshkent, Bo\'stonliq',
        type: 'To\'liq stavka',
        category: 'Ta\'lim',
        salary: '3 200 000 – 3 800 000 so\'m',
        description: 'Maxsus ta\'lim ehtiyojli bolalar bilan ishlash. Sertifikatsiyalash kurslari bepul taqdim etiladi.',
        tags: ['Ta\'lim', 'Ijtimoiy', 'Bepul kurs'],
        deadline: '2026-04-10',
    },
    {
        title: 'Graf dizayner',
        company: 'CreativeUZ Studio',
        location: 'Masofaviy',
        type: 'Loyiha asosida',
        category: 'Dizayn',
        salary: 'Kelishiladi',
        description: 'Barcha jismoniy imkoniyatlar uchun to\'liq masofaviy ish formatida. Portfolio asosida tanlov.',
        tags: ['Masofaviy', 'Freelance', 'Portfolio'],
        deadline: '2026-05-01',
    },
];

const categories = ['Barchasi', 'IT va aloqa', 'IT va texnologiya', 'Ijodiy', 'Moliya', 'Ta\'lim', 'Dizayn'];

const JobBoard: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Barchasi');

    const filtered = activeCategory === 'Barchasi'
        ? jobs
        : jobs.filter(j => j.category === activeCategory);

    return (
        <section id="job-board" className="job-board" aria-labelledby="job-board-title">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <span className="badge">Ish joylari</span>
                    <h2 id="job-board-title">Inklyuziv ish vakansiylari</h2>
                    <div className="divider" />
                    <p>Nogironlar va maxsus ehtiyojli shaxslar uchun moslashtirilgan yuz dan ortiq ish o'rni.</p>
                </div>

                {/* Category Filter */}
                <div className="job-board__filters" role="group" aria-label="Kategoriyalar bo'yicha filtr">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn${activeCategory === cat ? ' filter-btn--active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                            aria-pressed={activeCategory === cat}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="jobs__list" role="list" aria-live="polite" aria-label="Vakansiyalar ro'yxati">
                    {filtered.map((job, i) => (
                        <article key={i} className="job-card card" role="listitem" aria-label={job.title}>
                            <div className="job-card__header">
                                <div className="job-card__title-wrap">
                                    <h3 className="job-card__title">{job.title}</h3>
                                    <span className="job-card__company">{job.company}</span>
                                </div>
                                <span className="job-card__salary">{job.salary}</span>
                            </div>
                            <div className="job-card__meta">
                                <span className="job-meta-item" aria-label="Joylashuv">
                                    <span aria-hidden="true">📍</span> {job.location}
                                </span>
                                <span className="job-meta-item" aria-label="Ish turi">
                                    <span aria-hidden="true">🕐</span> {job.type}
                                </span>
                                <span className="job-meta-item" aria-label="Muddati">
                                    <span aria-hidden="true">📅</span> Muddati: {job.deadline}
                                </span>
                            </div>
                            <p className="job-card__desc">{job.description}</p>
                            <div className="job-card__footer">
                                <div className="job-card__tags" role="list">
                                    {job.tags.map(tag => (
                                        <span key={tag} className="tag tag--green" role="listitem">{tag}</span>
                                    ))}
                                </div>
                                <a href="#contact" className="btn btn-navy job-card__btn" aria-label={`${job.title} uchun ariza topshirish`}>
                                    Ariza topshirish
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="job-board__cta-strip">
                    <p>Ko'proq ish o'rnini ko'rmoqchimisiz? Bizning mutaxassislarimiz sizga eng mos variantni topishga yordam beradi.</p>
                    <a href="#contact" className="btn btn-primary">Yordam so'rash</a>
                </div>
            </div>
        </section>
    );
};

export default JobBoard;
