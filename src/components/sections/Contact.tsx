import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Github, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactChannels = [
    {
      id: 'email',
      title: 'Email Address',
      value: PERSONAL_INFO.email,
      description: 'Drop an email anytime for opportunities, advisory, or technical discussions.',
      icon: Mail,
      actionText: 'Compose Email',
      actionHref: `mailto:${PERSONAL_INFO.email}`,
      color: 'text-primary',
      bgHover: 'hover:border-primary/50',
    },
    {
      id: 'phone',
      title: 'Phone & WhatsApp',
      value: PERSONAL_INFO.phone,
      description: 'Available for direct voice calls or quick chats on WhatsApp.',
      icon: Phone,
      actionText: 'Chat on WhatsApp',
      actionHref: `https://wa.me/919873918104`,
      color: 'text-accent-amber',
      bgHover: 'hover:border-accent-amber/50',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/divyansh-magan',
      description: 'Connect professionally for GTM engineering, DevRel, and AI insights.',
      icon: Linkedin,
      actionText: 'View Profile',
      actionHref: PERSONAL_INFO.linkedin,
      color: 'text-primary',
      bgHover: 'hover:border-primary/50',
    },
    {
      id: 'github',
      title: 'GitHub',
      value: 'github.com/divyanshmagan',
      description: 'Explore open-source repositories, system architectures, and codebases.',
      icon: Github,
      actionText: 'Explore Repos',
      actionHref: PERSONAL_INFO.github,
      color: 'text-foreground',
      bgHover: 'hover:border-foreground/50',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-topographic">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-3 shadow-subtle">
              <MessageSquare className="w-3.5 h-3.5" />
              Direct Channels
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
              Reach out directly — I usually respond within a few hours.
            </p>
          </div>
        </div>

        {/* Direct Channels Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {contactChannels.map((channel) => {
            const IconComp = channel.icon;
            const isCopied = copiedField === channel.title;

            return (
              <div
                key={channel.id}
                className={`rounded-2xl bg-card border border-border p-6 shadow-card transition-all flex flex-col justify-between group ${channel.bgHover}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-card-subtle border border-border flex items-center justify-center">
                      <IconComp className={`w-5 h-5 ${channel.color}`} />
                    </div>

                    <button
                      onClick={() => handleCopy(channel.value, channel.title)}
                      data-cursor="Copy"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card-subtle hover:bg-muted border border-border text-xs font-mono text-muted-foreground hover:text-foreground transition-all shadow-subtle"
                      title="Copy to clipboard"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-accent-emerald" />
                          <span className="text-accent-emerald font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h3 className="text-base font-bold font-serif text-foreground">
                    {channel.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary font-mono mt-0.5 break-all">
                    {channel.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <a
                    href={channel.actionHref}
                    target={channel.actionHref.startsWith('http') ? '_blank' : undefined}
                    rel={channel.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    data-cursor="Open"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-primary transition-colors group-hover:translate-x-0.5 duration-200"
                  >
                    <span>{channel.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-[11px] font-mono text-muted-foreground">
                    Direct Contact
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Location & Availability Banner */}
        <div className="rounded-2xl bg-card/60 border border-border p-5 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-card-subtle border border-border text-primary">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase font-bold text-muted-foreground">Base Location</p>
              <p className="text-sm font-semibold text-foreground">{PERSONAL_INFO.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-semibold shadow-card transition-all flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Say Hello</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
