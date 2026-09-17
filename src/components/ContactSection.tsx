import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, SERVICES_DATA } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Clock
} from 'lucide-react';

interface ContactSectionProps {
  selectedServicePreset?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    subject: 'Project Inquiry / Service Request',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({
        ...prev,
        service: selectedServicePreset,
        subject: `Inquiry for ${selectedServicePreset}`,
      }));
    }
  }, [selectedServicePreset]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('success');

      const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nRequested Service: ${formData.service}\n\nMessage:\n${formData.message}`
      );

      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*New Project Inquiry for Yaasir*\n\n` +
      `*Name:* ${formData.name || 'Client'}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Service:* ${formData.service}\n` +
      `*Message:* ${formData.message || 'Hello Yaasir, I would like to discuss a project with you.'}`
    );
    window.open(`https://wa.me/252638801669?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider shadow-md shadow-emerald-950/40">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="coral-gradient-text">Exceptional</span>
          </h2>
          <p className="text-slate-300 text-base">
            Have a project in mind or need digital services? Send an email or connect instantly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="glass-card rounded-3xl p-6 border border-emerald-500/20 bg-[#041911]/90">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-base font-bold text-white hover:text-emerald-300 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-[#041911]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      Instant Chat
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-400" /> Fast Response
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">{PERSONAL_INFO.phone}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Chat directly with Yaasir regarding project quotes, consultations, or technical questions.
                  </p>
                  <a
                    href={PERSONAL_INFO.whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-600/30"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Open WhatsApp Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Network Hub */}
            <div className="glass-card rounded-3xl p-6 border border-emerald-500/20 bg-[#041911]/90">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Social Profiles & Networks
              </span>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-emerald-400 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-emerald-400 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-emerald-400 transition-all"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/20 bg-[#041911]/90 relative">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to dispatch an email or initiate an instant WhatsApp thread.
              </p>

              {submittedStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold block">Ready to send!</span>
                    Your email client has been prepared. If it didn't open automatically, you can also copy the email or click below to send via WhatsApp.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-medium text-slate-300">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Mahamed Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#03130d] border border-emerald-900/60 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-medium text-slate-300">
                      Your Email <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. client@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#03130d] border border-emerald-900/60 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-service" className="text-xs font-medium text-slate-300">
                      Interested Service
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#03130d] border border-emerald-900/60 text-white text-sm focus:outline-none focus:border-emerald-400 transition-all"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-[#03130d] text-white">
                          {srv.title}
                        </option>
                      ))}
                      <option value="General Consultation" className="bg-[#03130d] text-white">
                        General Consultation / Custom Project
                      </option>
                    </select>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-medium text-slate-300">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. Website Redesign Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#03130d] border border-emerald-900/60 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 transition-all"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-medium text-slate-300">
                    Project Details & Scope <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your goals, timeline, and any specific technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#03130d] border border-emerald-900/60 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                  ></textarea>
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full font-black text-xs text-slate-950 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 hover:brightness-110 transition-all shadow-lg shadow-emerald-950/50 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>{isSubmitting ? 'Preparing Email...' : 'Send Message to Yaasir'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    id="contact-whatsapp-form-btn"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-xs text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Prefill WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
