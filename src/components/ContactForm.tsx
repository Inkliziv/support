import React, { useState } from 'react';
import './ContactForm.css';

interface FormData {
    name: string;
    phone: string;
    email: string;
    topic: string;
    message: string;
    disability: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        topic: '',
        message: '',
        disability: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validate = () => {
        const newErrors: Partial<FormData> = {};
        if (!formData.name.trim()) newErrors.name = 'Ism kiritish shart.';
        if (!formData.phone.trim()) newErrors.phone = 'Telefon raqam kiritish shart.';
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = 'Email manzili to\'g\'ri emas.';
        if (!formData.topic) newErrors.topic = 'Mavzuni tanlang.';
        if (!formData.message.trim()) newErrors.message = 'Xabar matnini kiriting.';
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section id="contact" className="contact" aria-labelledby="contact-title">
                <div className="container">
                    <div className="contact__success" role="alert" aria-live="polite">
                        <div className="success-icon" aria-hidden="true">✅</div>
                        <h2>Arizangiz qabul qilindi!</h2>
                        <p>Mutaxassislarimiz siz bilan <strong>24 soat ichida</strong> bog'lanadi. Iltimos, telefon raqamingizni ko'rsatilgan nomerlarda qo'ng'iroqqa tayyor turing.</p>
                        <button onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', topic: '', message: '', disability: '' }); }} className="btn btn-primary">
                            Yangi ariza yuborish
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="contact" aria-labelledby="contact-title">
            <div className="container">
                <div className="section-header animate-fade-in">
                    <span className="badge">Bog'lanish</span>
                    <h2 id="contact-title">Bepul konsultatsiya oling</h2>
                    <div className="divider" />
                    <p>Savollaringiz bormi? Mutaxassislarimiz sizga yordam berishga tayyor. Ariza qoldiring – 24 soat ichida javob olamiz.</p>
                </div>

                <div className="contact__layout">
                    {/* Info Side */}
                    <div className="contact__info">
                        <div className="contact__info-card">
                            <h3>Biz bilan bog'laning</h3>
                            <div className="contact__info-items">
                                <div className="contact__info-item">
                                    <span className="contact__info-icon" aria-hidden="true">📞</span>
                                    <div>
                                        <div className="contact__info-label">Telefon</div>
                                        <a href="tel:+998711234567" className="contact__info-value">+998 71 123-45-67</a>
                                    </div>
                                </div>
                                <div className="contact__info-item">
                                    <span className="contact__info-icon" aria-hidden="true">📧</span>
                                    <div>
                                        <div className="contact__info-label">Email</div>
                                        <a href="mailto:info@inklyuziv.uz" className="contact__info-value">info@inklyuziv.uz</a>
                                    </div>
                                </div>
                                <div className="contact__info-item">
                                    <span className="contact__info-icon" aria-hidden="true">📍</span>
                                    <div>
                                        <div className="contact__info-label">Manzil</div>
                                        <div className="contact__info-value">Toshkent sh., Amir Temur ko'chasi 25, 3-qavat</div>
                                    </div>
                                </div>
                                <div className="contact__info-item">
                                    <span className="contact__info-icon" aria-hidden="true">🕐</span>
                                    <div>
                                        <div className="contact__info-label">Ish vaqti</div>
                                        <div className="contact__info-value">Du–Ju: 09:00–18:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact__promise">
                            <div className="promise-item">
                                <span aria-hidden="true">🔒</span>
                                <span>Ma'lumotlaringiz maxfiy saqlanadi</span>
                            </div>
                            <div className="promise-item">
                                <span aria-hidden="true">⚡</span>
                                <span>24 soat ichida javob</span>
                            </div>
                            <div className="promise-item">
                                <span aria-hidden="true">💰</span>
                                <span>Barcha xizmatlar bepul</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <form
                        className="contact__form card"
                        onSubmit={handleSubmit}
                        noValidate
                        aria-label="Konsultatsiya arizasi formasi"
                    >
                        <div className="grid-2" style={{ gap: '1rem' }}>
                            <div className="form-group">
                                <label htmlFor="name">To'liq ism <span aria-label="majburiy maydon">*</span></label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Masalan: Alisher Karimov"
                                    autoComplete="name"
                                    aria-required="true"
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                    aria-invalid={!!errors.name}
                                />
                                {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Telefon raqami <span aria-label="majburiy maydon">*</span></label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+998 90 123-45-67"
                                    autoComplete="tel"
                                    aria-required="true"
                                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                                    aria-invalid={!!errors.phone}
                                />
                                {errors.phone && <span id="phone-error" className="form-error" role="alert">{errors.phone}</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email manzili <span className="form-hint">(ixtiyoriy)</span></label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="email@misol.uz"
                                autoComplete="email"
                                aria-describedby={errors.email ? 'email-error' : 'email-hint'}
                            />
                            <span id="email-hint" className="form-hint">Javob email orqali ham yuborilishi mumkin.</span>
                            {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="topic">Konsultatsiya mavzusi <span aria-label="majburiy maydon">*</span></label>
                            <select
                                id="topic"
                                name="topic"
                                value={formData.topic}
                                onChange={handleChange}
                                aria-required="true"
                                aria-invalid={!!errors.topic}
                            >
                                <option value="">— Mavzuni tanlang —</option>
                                <option value="huquq">Huquqiy maslahat</option>
                                <option value="ish">Ish topish</option>
                                <option value="nafaqa">Nafaqa va imtiyozlar</option>
                                <option value="tibbiyot">Tibbiy yordam</option>
                                <option value="reabilitatsiya">Reabilitatsiya</option>
                                <option value="uy-joy">Uy-joy masalalari</option>
                                <option value="boshqa">Boshqa</option>
                            </select>
                            {errors.topic && <span className="form-error" role="alert">{errors.topic}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="disability">Nogironlik turi <span className="form-hint">(ixtiyoriy)</span></label>
                            <select
                                id="disability"
                                name="disability"
                                value={formData.disability}
                                onChange={handleChange}
                            >
                                <option value="">— Tanlang (ixtiyoriy) —</option>
                                <option value="jismoniy">Jismoniy nogironlik</option>
                                <option value="korish">Ko'rish imkoniyati cheklangan</option>
                                <option value="eshitish">Eshitish imkoniyati cheklangan</option>
                                <option value="aqliy">Aqliy nogironlik</option>
                                <option value="surunkali">Surunkali kasallik</option>
                                <option value="boshqa">Boshqa</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Xabaring <span aria-label="majburiy maydon">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Muammoingizni qisqacha bayon qiling. Biz eng mos yechimni taklif etamiz."
                                aria-required="true"
                                aria-invalid={!!errors.message}
                            />
                            {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
                        </div>

                        <button type="submit" className="btn btn-primary contact__submit">
                            <span aria-hidden="true">📨</span> Ariza yuborish
                        </button>
                        <p className="contact__privacy">
                            Ariza yuborib, siz <a href="#contact">maxfiylik siyosati</a>mizga rozilik bildirasiz.
                            Ma'lumotlaringiz uchinchi shaxslarga berilmaydi.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
