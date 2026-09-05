'use client';

import { FormEvent, useState } from 'react';
import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react';

const initialForm = { name: '', email: '', phone: '', attendance: 'Both days — September 21 & 22, 2026', note: '' };

const attendanceOptions = [
    'Both days — September 21 & 22, 2026',
    'Monday only — September 21, 2026',
    'Tuesday only — September 22, 2026',
];

export default function RegisterForm() {
    const [form, setForm] = useState(initialForm);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    message: `[2026 Annual Workshop Registration]\nAttendance: ${form.attendance}\n\nNotes: ${form.note || 'None'}`,
                }),
            });

            if (!response.ok) throw new Error('Registration failed');
            setForm(initialForm);
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    const fieldClass = 'w-full bg-transparent border-b border-black/15 py-4 text-base outline-none focus:border-black transition-colors placeholder:text-black/30';
    const labelClass = 'block font-mono text-[10px] uppercase tracking-[0.25em] text-black/50';

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-sm p-7 md:p-10 space-y-8" aria-label="Workshop registration form">
            <div>
                <label htmlFor="register-name" className={labelClass}>Full name *</label>
                <input id="register-name" className={fieldClass} required autoComplete="name" placeholder="Your name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="register-email" className={labelClass}>Email *</label>
                    <input id="register-email" type="email" className={fieldClass} required autoComplete="email" placeholder="your@email.com" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
                </div>
                <div>
                    <label htmlFor="register-phone" className={labelClass}>Phone</label>
                    <input id="register-phone" type="tel" className={fieldClass} autoComplete="tel" placeholder="Your phone number" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
                </div>
            </div>
            <fieldset>
                <legend className={`${labelClass} mb-4`}>Days attending *</legend>
                <div className="grid sm:grid-cols-3 gap-3">
                    {attendanceOptions.map((option) => (
                        <label key={option} className={`cursor-pointer border px-4 py-3 text-center text-xs font-mono transition-colors ${form.attendance === option ? 'bg-black text-white border-black' : 'border-black/15 hover:border-black/40'}`}>
                            <input type="radio" name="attendance" className="sr-only" value={option} checked={form.attendance === option} onChange={(event) => setForm({ ...form, attendance: event.target.value })} />
                            {option}
                        </label>
                    ))}
                </div>
            </fieldset>
            <div>
                <label htmlFor="register-note" className={labelClass}>Anything we should know?</label>
                <textarea id="register-note" rows={3} className={`${fieldClass} resize-none`} placeholder="Questions, accessibility needs, or a note for the team" value={form.note} onChange={(event) => setForm({ ...form, note: event.target.value })} />
            </div>
            <button type="submit" disabled={status === 'loading'} className="w-full flex items-center justify-between bg-black text-white rounded-sm px-6 py-5 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-brand-accent disabled:opacity-50 transition-colors">
                {status === 'loading' ? <>Sending registration <Loader2 size={16} className="animate-spin" /></> : <>Register by email <ArrowUpRight size={16} /></>}
            </button>
            <div aria-live="polite" className="min-h-5">
                {status === 'success' && <p className="flex items-center gap-2 text-sm text-green-700"><CheckCircle2 size={16} /> Thank you. Your registration has been sent.</p>}
                {status === 'error' && <p className="flex items-center gap-2 text-sm text-red-700"><AlertCircle size={16} /> We could not send your registration. Please try again or text us.</p>}
            </div>
        </form>
    );
}
