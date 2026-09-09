import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Message dispatched! Divyansh will get back to you shortly.');

      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#5C6B4E', '#C4A574', '#7A8E6B', '#B85D43'],
      });

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-topographic">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-subtle">
              <MessageSquare className="w-3.5 h-3.5" />
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-foreground">
              Let's build something <span className="italic font-normal text-primary">meaningful</span> together.
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="font-handwriting text-accent-amber text-lg font-bold -rotate-1 select-none">
              ~ open for new opportunities ✍️
            </span>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Drop a line — I usually respond within a few hours.
            </p>
          </div>
        </div>

        {/* Contact Layout (Clean 2-Column Split without excess boxed nesting) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clean Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold font-serif text-foreground">
                  Direct Channels
                </h3>
                <span className="font-handwriting text-primary text-sm font-bold rotate-1 select-none">
                  ⤷ click card to copy!
                </span>
              </div>

              <div
                onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                data-cursor="Copy"
                className="flex items-center justify-between p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer group shadow-subtle"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase font-bold">Email</p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground">
                  {copiedField === 'Email' ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </span>
              </div>

              <div
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
                data-cursor="Copy"
                className="flex items-center justify-between p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all cursor-pointer group shadow-subtle"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent-amber" />
                  <div>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase font-bold">Phone / WhatsApp</p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground">
                  {copiedField === 'Phone' ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border shadow-subtle">
                <MapPin className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase font-bold">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Socials & Cursive Footer Note */}
            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="GitHub"
                  className="p-2.5 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground shadow-subtle transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="LinkedIn"
                  className="p-2.5 rounded-xl bg-card border border-border text-muted-foreground hover:text-foreground shadow-subtle transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <span className="font-handwriting text-primary text-base font-bold -rotate-2 select-none">
                ~ always happy to chat :)
              </span>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-card border border-border p-6 sm:p-7 shadow-card">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 text-primary mx-auto flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-serif text-foreground">Message Sent!</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-mono text-muted-foreground mb-1 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-card-subtle border border-border focus:border-primary text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground/60 shadow-subtle"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted-foreground mb-1 font-semibold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-card-subtle border border-border focus:border-primary text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground/60 shadow-subtle"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1 font-semibold">
                      Subject / Inquiry
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineer (LLM / RAG) Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-card-subtle border border-border focus:border-primary text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground/60 shadow-subtle"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-foreground mb-1 font-semibold">
                      Message *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Divyansh, I'd love to connect regarding..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-card-subtle border border-border focus:border-primary text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground/60 resize-none shadow-subtle"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="Send"
                    className="w-full py-3 px-5 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-xs sm:text-sm shadow-card transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
