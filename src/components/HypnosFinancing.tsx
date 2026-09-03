// src/components/HypnosFinancing.tsx
"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export default function HypnosFinancing() {
  const [vehiclePrice, setVehiclePrice] = useState<number>(285000);
  const [downPaymentPct, setDownPaymentPct] = useState<number>(30);
  const [termMonths, setTermMonths] = useState<number>(48);
  const [interestRate, setInterestRate] = useState<number>(6.5);

  const downPayment = (vehiclePrice * downPaymentPct) / 100;
  const loanAmount = vehiclePrice - downPayment;

  // Monthly payment formula
  const monthlyRate = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="financiamiento" className="w-full bg-[#09090b] text-[#f4f4f5] py-28 px-6 md:px-12 lg:px-16 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#a1a1aa]">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Estructura Financiera
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-[-0.02em] text-white">
            Soluciones patrimoniales a tu medida.
          </h2>
          <p className="text-[#a1a1aa] text-base md:text-lg font-light leading-relaxed">
            Diseñamos planes de adquisición flexibles, leasing estructurado y opciones de pago privadas adaptadas a la gestión de activos de alta gama.
          </p>
        </div>

        {/* Calculator Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#121216] border border-white/[0.08] rounded-3xl p-8 md:p-12">
          {/* Left Controls */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
              <Calculator className="w-5 h-5 text-white" />
              <h3 className="text-lg font-light text-white tracking-wide">Calculadora de Cuotas</h3>
            </div>

            {/* Vehicle Price Slider */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#a1a1aa] font-light">Valor del Vehículo</span>
                <span className="text-white font-medium">{formatCurrency(vehiclePrice)}</span>
              </div>
              <input
                type="range"
                min="150000"
                max="2500000"
                step="10000"
                value={vehiclePrice}
                onChange={(e) => setVehiclePrice(Number(e.target.value))}
                className="w-full accent-white bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Down Payment Slider */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#a1a1aa] font-light">Pago Inicial ({downPaymentPct}%)</span>
                <span className="text-white font-medium">{formatCurrency(downPayment)}</span>
              </div>
              <input
                type="range"
                min="20"
                max="70"
                step="5"
                value={downPaymentPct}
                onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                className="w-full accent-white bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Term Months Selector */}
            <div className="space-y-3">
              <span className="text-sm text-[#a1a1aa] font-light">Plazo (Meses)</span>
              <div className="grid grid-cols-4 gap-3">
                {[24, 36, 48, 60].map((months) => (
                  <button
                    key={months}
                    onClick={() => setTermMonths(months)}
                    className={`py-3 text-xs tracking-wider rounded-xl transition-all border ${
                      termMonths === months
                        ? "bg-white text-[#09090b] font-medium border-white"
                        : "bg-white/[0.03] text-[#a1a1aa] border-white/[0.08] hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {months} meses
                  </button>
                ))}
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#a1a1aa] font-light">Tasa de Interés Anual (Estimada)</span>
                <span className="text-white font-medium">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="4.0"
                max="12.0"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-white bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-5 bg-[#09090b] border border-white/[0.08] rounded-2xl p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.15em] text-[#a1a1aa] font-medium">
                Resumen de Estimación
              </span>

              <div className="space-y-2">
                <span className="text-xs text-[#a1a1aa] uppercase tracking-wider">Cuota Mensual Estimada</span>
                <div className="text-4xl md:text-5xl font-light text-white tracking-tight">
                  {isNaN(monthlyPayment) ? "$0" : formatCurrency(monthlyPayment)}
                  <span className="text-xs text-[#a1a1aa] font-light ml-2">/ mes</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/[0.08] text-sm">
                <div className="flex justify-between">
                  <span className="text-[#a1a1aa] font-light">Monto a Financiar</span>
                  <span className="text-white font-medium">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a1a1aa] font-light">Plazo Seleccionado</span>
                  <span className="text-white font-medium">{termMonths} Meses</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#a1a1aa] font-light">Tasa Aplicada</span>
                  <span className="text-white font-medium">{interestRate}% APR</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="#contacto"
                className="w-full inline-flex items-center justify-center bg-white text-[#09090b] text-sm font-medium py-4 rounded-xl hover:bg-[#f4f4f5] transition-all shadow-lg"
              >
                Solicitar Asesoría Financiera
              </a>
              <p className="text-[11px] text-[#a1a1aa]/70 text-center font-light leading-relaxed">
                * Las estimaciones son orientativas y están sujetas a aprobación crediticia y auditoría de cumplimiento financiero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
