import React from 'react';
import { CheckCircle2, Sun, ShieldAlert, Cpu, AlertCircle } from 'lucide-react';

export interface AuditPillar {
  pillar: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  badgeBg: string;
  silentRisk: string;
  checks: string[];
}

export const HealthCheckAuditGridSection: React.FC = () => {
  const pillars: AuditPillar[] = [
    {
      pillar: 'Pillar 01',
      title: 'Roof & Photovoltaic Panels',
      subtitle: 'Thermal cell integrity & structural security',
      icon: <Sun className="w-5 h-5 text-amber-600" />,
      iconBg: 'bg-amber-500/10',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
      silentRisk: 'Micro-cracks, diode burnouts, and delamination silently destroy 20% to 40% of generation while panels appear completely normal from ground level.',
      checks: [
        'Infrared thermal camera scan for cell micro-cracks & diode hot spots',
        'Visual examination for snail trails, browning, and glass delamination',
        'Structural clamp torque and anodized aluminum rail corrosion check',
        'Debris, lichen, leaf build-up, and bird nest obstruction audit',
        'Under-panel DC string cable sag and UV tie deterioration inspection',
        'Open-circuit voltage (Voc) string balance testing under ambient load',
        'Roof penetration flashings and tile bracket weather seal check',
        'Array earth continuity and equipotential bonding verification',
      ],
    },
    {
      pillar: 'Pillar 02',
      title: 'Electrical Safety & Isolators',
      subtitle: 'Fire prevention & Australian Standard compliance',
      icon: <ShieldAlert className="w-5 h-5 text-red-600" />,
      iconBg: 'bg-red-500/10',
      badgeBg: 'bg-red-100 text-red-900 border-red-200',
      silentRisk: 'Degraded or recalled rooftop DC isolators are Australia\'s #1 cause of solar house fires. Moisture ingress creates internal arcing that switchboards cannot detect.',
      checks: [
        'Rooftop high-voltage DC isolator weather seal & recall audit',
        'Earth continuity and insulation resistance (Megger) testing',
        'Main switchboard AC circuit breaker & RCD rating verification',
        'Heavy-duty conduit UV degradation and waterproof gland check',
        'Emergency solar supply main switch hazard tagging & labeling',
        'Arc-fault prevention and AS/NZS 5033 fire safety audit',
        'Switchboard surge protection and lightning diverter check',
        'Grid impedance and fault loop impedance measurement',
      ],
    },
    {
      pillar: 'Pillar 03',
      title: 'Inverter Performance & Output',
      subtitle: 'DC-to-AC conversion & cloud telemetry',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      iconBg: 'bg-blue-500/10',
      badgeBg: 'bg-blue-100 text-blue-900 border-blue-200',
      silentRisk: 'Inverters frequently throttle output due to dust buildup or enter silent standby mode after grid surges, costing you hundreds on each electricity bill.',
      checks: [
        'DC string input vs AC grid feed power conversion calibration',
        'Internal inverter error code log & historical fault review',
        'Heat sink thermal dissipation, fan operation, and capacitor test',
        'Anti-islanding and automated grid safety disconnect test',
        'Firmware update to latest manufacturer performance build',
        'Wi-Fi monitoring reconnection and cloud telemetry sync',
        'Benchmark actual daily kWh output against factory spec',
        'Supply voltage rise calculation to prevent midday curtailment',
      ],
    },
  ];

  return (
    <section id="audit-checklist" className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
    
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 tracking-tight">
          The 24-Point Solar Health & Safety Audit
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          Every check is physically tested and certified by a CEC-accredited Master Electrician on your roof and switchboard — in full compliance with AS/NZS 5033 and AS/NZS 4777.
        </p>
      </div>

      {/* Structured Horizontal Pillar Rows (Clean, Full-Width, Non-Boxy) */}
      <div className="space-y-6">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Pillar Identity & Critical Risk Insight (4 cols) */}
              <div className="p-6 sm:p-7 lg:col-span-4 bg-slate-50/70 border-b lg:border-b-0 lg:border-r border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${pillar.badgeBg} font-mono`}>
                      {pillar.pillar}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">8 Certified Checks</span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-9 h-9 rounded-lg ${pillar.iconBg} flex items-center justify-center shrink-0`}>
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-950">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 font-medium mb-4">
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Integrated Risk Advisory for this Pillar */}
                <div className="bg-white rounded-lg p-3.5 border border-slate-200 text-xs leading-relaxed text-slate-700">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Why This Matters:</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    {pillar.silentRisk}
                  </p>
                </div>
              </div>

              {/* Right Column: 8 Itemized Diagnostic Checks in 2 Columns (8 cols) */}
              <div className="p-6 sm:p-7 lg:col-span-8 flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                  {pillar.checks.map((check, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.2]" />
                      <span className="leading-snug">{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthCheckAuditGridSection;
