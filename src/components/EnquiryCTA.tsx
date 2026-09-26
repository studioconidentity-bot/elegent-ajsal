import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, ArrowRight, Check, Send } from 'lucide-react';

export const EnquiryCTA: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial / Hospitality',
    requirements: '',
  });

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      'Hello ELEGANT team, I am an architect/contractor looking to enquire about glass hardware specifications and pricing for an upcoming project.'
    );
    window.open(`https://wa.me/971501234567?text=${message}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Commercial / Hospitality',
        requirements: '',
      });
    }, 4000);
  };

  return (
    <section
      id="contact-enquiry"
      className="relative w-full bg-[#FAF9F6] text-[#141414] py-16 sm:py-24 border-t border-[#EAE8E3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F2EFE8] border border-[#DDDCD4] rounded-xs p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Direct Consultation & WhatsApp */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#E8E5DD] border border-[#D5D2C9] rounded-full text-[10px] uppercase font-mono tracking-[0.2em] text-[#5A5953]">
                <span>Architectural Consultation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#141414] leading-tight">
                Have a project in development?
              </h2>

              <p className="text-sm sm:text-base text-[#61605A] font-light leading-relaxed max-w-xl">
                Whether you need a bill of materials verified, CAD submittals for tender approval, or custom finish hardware for luxury residences, our technical team is at your disposal.
              </p>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="whatsapp-enquiry-btn"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#141414] text-[#FAF9F6] hover:bg-black transition-colors rounded-xs text-xs font-medium uppercase tracking-[0.16em] shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#22C55E]" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="mailto:projects@elegant-hardware.com"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 border border-[#CCC9C0] hover:border-[#141414] bg-[#FAF9F6] text-[#2E2E2A] transition-colors rounded-xs text-xs font-medium uppercase tracking-wider"
                >
                  <Mail className="w-4 h-4 text-[#73726B]" />
                  <span>Send BOQ / Drawings</span>
                </a>
              </div>

              {/* Response Time & Guarantee */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-[11px] text-[#73726B] font-mono border-t border-[#E0DED5]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#15803D]" />
                  <span>Response within 4 business hours</span>
                </div>
                <div>•</div>
                <div>Direct trade discounts for contractors</div>
                <div>•</div>
                <div>International dispatch</div>
              </div>
            </div>

            {/* Right Column: Quick Specification Enquiry Form */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF9F6] border border-[#DDDCD4] p-6 sm:p-8 rounded-xs shadow-xs">
                <div className="border-b border-[#EAE8E1] pb-4 mb-5">
                  <h3 className="text-base font-medium text-[#141414]">
                    Quick Specification Request
                  </h3>
                  <p className="text-xs text-[#73726B] mt-1 font-light">
                    Submit your requirements for immediate engineering review.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 bg-[#DCFCE7] text-[#15803D] rounded-full mx-auto flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-medium text-[#141414]">Request Received</h4>
                    <p className="text-xs text-[#61605A] leading-relaxed">
                      Thank you. An architectural technical specialist will review your specifications and contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider text-[#5A5953] mb-1.5">
                        Your Name / Practice
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Studio Foster Architects"
                        className="w-full px-3 py-2.5 bg-white border border-[#D5D3CB] focus:border-[#141414] text-xs text-[#141414] outline-none rounded-xs placeholder-[#9E9D97]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider text-[#5A5953] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="specification@studio.com"
                        className="w-full px-3 py-2.5 bg-white border border-[#D5D3CB] focus:border-[#141414] text-xs text-[#141414] outline-none rounded-xs placeholder-[#9E9D97]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider text-[#5A5953] mb-1.5">
                        Project Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-[#D5D3CB] focus:border-[#141414] text-xs text-[#141414] outline-none rounded-xs"
                      >
                        <option>Commercial / Hospitality Entrance</option>
                        <option>Luxury Residential Frameless Showers</option>
                        <option>Curtain Wall & Facade Spider Fittings</option>
                        <option>Acoustic Glass Interior Partitions</option>
                        <option>Custom Architectural Hardware</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase font-mono tracking-wider text-[#5A5953] mb-1.5">
                        Project Requirements / Notes
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        placeholder="Specify glass thickness (e.g. 12mm), hardware finish (e.g. Brushed Satin), or estimated door count..."
                        className="w-full px-3 py-2 bg-white border border-[#D5D3CB] focus:border-[#141414] text-xs text-[#141414] outline-none rounded-xs placeholder-[#9E9D97] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#1E1E1E] hover:bg-black text-[#FAF9F6] text-xs font-medium uppercase tracking-wider rounded-xs transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Specification Request</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
