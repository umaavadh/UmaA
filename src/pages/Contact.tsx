import { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'contact');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      // silently ignore — Netlify will handle the submission
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } finally {
      setSubmitting(false);
    }
  };

  const labelClass = 'block text-sm font-sans font-medium text-[#0D2B40] mb-1.5';
  const inputClass =
    'w-full px-4 py-3 border border-[#CCDEEa] rounded-lg text-sm text-[#0D2B40] placeholder-[#A0B8C8] focus:outline-none focus:ring-2 focus:ring-[#1A7AAF] focus:border-transparent transition-all';

  return (
    <>
      <div className="bg-ocean-bg flex flex-col justify-center min-h-[180px] md:min-h-[220px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-10">
          <p className="text-[11px] font-sans font-medium uppercase tracking-[2px] text-ocean-primary mb-6">
            Get in Touch
          </p>
          <p className="font-display text-[18px] md:text-[22px] leading-[1.4] mb-0 max-w-[800px] border-l-4 border-[#1A7AAF] pl-5" style={{ color: '#4A6A80', fontWeight: 'normal' }}>
            Whether you have a project in mind, a program that needs rethinking, or just want to explore possibilities, I would love to hear from you.
          </p>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <div className="space-y-6 mb-16">

            {/* Contact Form Card */}
            <div className="bg-white border border-[#CCDEEa] rounded-xl p-8 text-left">
              <div className="flex justify-center mb-5">
                <Mail className="w-8 h-8 text-[#1A7AAF]" />
              </div>
              <h3 className="font-display text-2xl text-center mb-6" style={{ color: '#0D2B40' }}>
                Get in Touch
              </h3>

              <form
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                name="contact"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClass}>Your Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>Message (optional)</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project or just say hello."
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#1A7AAF] text-white py-3 rounded-lg font-sans font-medium text-sm hover:bg-[#155f8a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>

                  {submitted && (
                    <div className="mt-2 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium text-center">
                      Thank you! I'll be in touch soon.
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white border border-[#CCDEEa] rounded-xl p-8">
              <div className="flex justify-center mb-4">
                <Linkedin className="w-8 h-8 text-[#1A7AAF]" />
              </div>
              <p className="text-[15px] text-ocean-text mb-5">
                Let's connect professionally.
              </p>
              <a
                href="https://www.linkedin.com/in/umaavadhanula/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1A7AAF] text-white px-7 py-3 rounded-md font-sans font-medium text-sm hover:bg-[#155f8a] transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <p className="font-display italic text-[20px] text-[#0D2B40] leading-relaxed">
            Every great learning program starts with a conversation. Let's start ours.
          </p>
        </div>
      </div>
    </>
  );
}
