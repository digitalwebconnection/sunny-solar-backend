import React, { useState } from 'react';
import { resourcesData } from '../../data/resourcesData';
import { PageHeader } from '../../components/layout/PageHeader';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Download, Check, ShieldCheck, Mail, User, Phone, CheckCircle2, FileText } from 'lucide-react';
import { submitToWeb3Forms } from '../../utils/web3forms';

export interface ResourceLeadGenPageProps {
  guideKey: keyof typeof resourcesData;
}

export const ResourceLeadGenPage: React.FC<ResourceLeadGenPageProps> = ({ guideKey }) => {
  const guide = resourcesData[guideKey];
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const res = await submitToWeb3Forms({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      postcode: formData.postcode,
      resource_title: guide.title,
      resource_format: guide.format,
      page: 'Resource Lead Gen Page',
    }, {
      subject: `New Resource Download (${guide.title}) - ${formData.name}`,
      from_name: 'Sunny Solar Resources',
    });

    setIsSubmitting(false);
    if (res.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(res.message || 'Error submitting request. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader
        badge={guide.format}
        title={guide.title}
        description={guide.subtitle}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Value prop & What's inside */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                About this Free Resource
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                {guide.description}
              </p>

              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-500" />
                What You Will Discover Inside:
              </h3>

              <div className="space-y-3.5">
                {guide.whatInside.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {guide.pagesCount && (
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Badge variant="slate" size="sm">{guide.pagesCount}</Badge>
                  <span>• Instant digital delivery via email</span>
                </div>
              )}
            </div>

            <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
              <span>
                <strong>100% Privacy Guarantee:</strong> We never sell your contact information or spam your inbox. Unsubscribe anytime with one click.
              </span>
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8 shadow-xl relative lg:sticky lg:top-28">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Download Sent!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  We have dispatched your free copy of <strong>"{guide.title}"</strong> to <span className="font-semibold text-slate-800">{formData.email}</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-amber-600 font-bold hover:underline cursor-pointer"
                  >
                    Send to a different email address
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                  <Badge variant="amber" size="sm">Free Instant Access</Badge>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-2">
                    Where Should We Send Your Copy?
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below for immediate download access.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-base lg:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com.au"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-base lg:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Phone Number (Optional)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-base lg:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Suburb / Postcode</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Robina 4226"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-base lg:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  />
                </div>

                {errorMessage && (
                  <div className="p-2 rounded bg-red-50 border border-red-200 text-red-600 text-xs text-center">
                    {errorMessage}
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    icon={<Download className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Submitting to Web3Forms...' : guide.ctaText}
                  </Button>
                </div>

                <p className="text-[11px] text-slate-400 text-center pt-2">
                  Instant PDF download • Zero spam guaranteed
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
