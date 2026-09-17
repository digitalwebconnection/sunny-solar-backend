import React from 'react';
import { PageHeader } from '../../components/layout/PageHeader';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader
        badge="Legal & Compliance"
        title="Sunny Solar"
        highlightText="Privacy Policy"
        description="We take your personal information and privacy seriously. Read how we protect and process customer data in accordance with the Australian Privacy Principles."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you request a solar or battery assessment, download a buyer's guide, or submit an inquiry through our website, we collect your name, email address, phone number, physical property address, and details regarding your current energy consumption and electricity bills.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
            <p>
              We use your information exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Perform remote 3D satellite modeling and shading audits of your roof</li>
              <li>Provide accurate solar generation forecasts and transparent itemized quotes</li>
              <li>Submit grid connection paperwork to distribution networks (e.g., Energex, Essential Energy) upon contract execution</li>
              <li>Claim Federal Small-scale Technology Certificates (STCs) on your behalf</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Zero Third-Party Sale Policy</h2>
            <p>
              Sunny Solar does not sell, license, or barter customer lead data to third-party telemarketers or lead generation clearinghouses under any circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Contact Us</h2>
            <p>
              If you wish to review, update, or remove your contact data from our system, please email us at <a href="mailto:privacy@sunnysolar.com.au" className="text-amber-600 underline">privacy@sunnysolar.com.au</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
