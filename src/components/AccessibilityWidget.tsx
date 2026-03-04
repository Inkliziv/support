import React, { useState, useRef, useEffect } from 'react';
import './AccessibilityWidget.css';

interface Props {
    largeText: boolean;
    setLargeText: (v: boolean) => void;
    highContrast: boolean;
    setHighContrast: (v: boolean) => void;
}

const AccessibilityWidget: React.FC<Props> = ({ largeText, setLargeText, highContrast, setHighContrast }) => {
    const [open, setOpen] = useState(false);
    const [speaking, setSpeaking] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    // Close on Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && open) {
                setOpen(false);
                btnRef.current?.focus();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    // Close on outside click
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (open && panelRef.current && !panelRef.current.contains(e.target as Node) && !btnRef.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, [open]);

    const handleTextToSpeech = () => {
        if (!('speechSynthesis' in window)) {
            alert('Brauzeringiz ovozli o\'qishni qo\'llab-quvvatlamaydi.');
            return;
        }
        if (speaking) {
            window.speechSynthesis.cancel();
            setSpeaking(false);
            return;
        }
        const mainContent = document.getElementById('main-content');
        const text = mainContent?.innerText || 'Sahifada matn topilmadi.';
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'uz-UZ';
        utterance.rate = 0.9;
        utterance.onend = () => setSpeaking(false);
        utterance.onerror = () => setSpeaking(false);
        setSpeaking(true);
        window.speechSynthesis.speak(utterance);
    };

    const handleFontReset = () => {
        setLargeText(false);
        setHighContrast(false);
    };

    return (
        <div className="a11y-widget" role="complementary" aria-label="Maxsus imkoniyatlar paneli">
            <button
                ref={btnRef}
                className="a11y-btn"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="a11y-panel"
                aria-label="Maxsus imkoniyatlar panelinini ochish"
                title="Maxsus imkoniyatlar"
            >
                ♿
            </button>

            {open && (
                <div
                    id="a11y-panel"
                    className="a11y-panel"
                    ref={panelRef}
                    role="dialog"
                    aria-label="Maxsus imkoniyatlar sozlamalari"
                    aria-modal="false"
                >
                    <h3>Maxsus imkoniyatlar</h3>

                    <button
                        className="a11y-option"
                        onClick={handleTextToSpeech}
                        aria-pressed={speaking}
                        aria-label={speaking ? 'Ovozli o\'qishni to\'xtatish' : 'Sahifani ovoz bilan o\'qish'}
                    >
                        <span aria-hidden="true">{speaking ? '⏹️' : '🔊'}</span>
                        <span>{speaking ? 'O\'qishni to\'xtatish' : 'Ovozli o\'qish'}</span>
                    </button>

                    <button
                        className="a11y-option"
                        onClick={() => setLargeText(!largeText)}
                        aria-pressed={largeText}
                        aria-label={largeText ? 'Katta shriftni o\'chirish' : 'Katta shrift yoqish'}
                    >
                        <span aria-hidden="true">🔤</span>
                        <span>{largeText ? 'Oddiy shrift' : 'Katta shrift'}</span>
                        {largeText && <span className="active-section-pill">Faol</span>}
                    </button>

                    <button
                        className="a11y-option"
                        onClick={() => setHighContrast(!highContrast)}
                        aria-pressed={highContrast}
                        aria-label={highContrast ? 'Yuqori kontrastni o\'chirish' : 'Yuqori kontrast yoqish'}
                    >
                        <span aria-hidden="true">🌑</span>
                        <span>{highContrast ? 'Oddiy rang' : 'Yuqori kontrast'}</span>
                        {highContrast && <span className="active-section-pill">Faol</span>}
                    </button>

                    {(largeText || highContrast || speaking) && (
                        <button
                            className="a11y-option a11y-option--reset"
                            onClick={handleFontReset}
                            aria-label="Barcha maxsus imkoniyat sozlamalarini tiklash"
                        >
                            <span aria-hidden="true">↩️</span>
                            <span>Sozlamalarni tiklash</span>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default AccessibilityWidget;
