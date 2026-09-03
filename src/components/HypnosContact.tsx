// src/components/HypnosContact.tsx
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";

export default function HypnosContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Porsche 911 GT3 RS",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="w-full bg-[#09090b] text-[#f4f4f5] py-28 px-6 md:px-12 lg:px-16 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#a1a1aa]">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Atención Privada
            </div>
            <h2 className="text-3xl md:text-5xl font-light tracking-[-0.02em] text-white">
              Inicia una conversación confidencial.
            </h2>
            <p className="text-[#a1a1aa] text-base md:text-lg font-light leading-relaxed">
              Nuestros asesores privados están a tu disposición para coordinar presentaciones exclusivas, pruebas dinámicas o solicitudes de importación a medida.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#a1a1aa]">Showroom Principal</span>
              <p className="text-white font-light text-base">Avenida Del Mar & Bulevar Artigas, Punta del Este</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#a1a1aa]">Contacto Directo</span>
              <p className="text-white font-light text-base">concierge@hypnos-motors.com</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#a1a1aa]">Horario de Atención</span>
              <p className="text-white font-light text-base">Lunes a Sábado — Con Cita Previa</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7 bg-[#121216] border border-white/[0.08] rounded-3xl p-8 md:p-12">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center space-y-6"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto border border-white/20">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-light text-white">Solicitud Recibida</h3>
                <p className="text-[#a1a1aa] text-sm font-light max-w-md mx-auto">
                  Un conserje privado se pondrá en contacto con usted en breve para coordinar los detalles de su consulta.
                </p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs uppercase tracking-wider text-white underline underline-offset-4 hover:text-[#a1a1aa] transition-colors"
              >
                Enviar otra consulta
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#a1a1aa]">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alejandro Gonzalez"
                    className="w-full bg-[#09090b] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#a1a1aa]">Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alejandro@agency.com"
                    className="w-full bg-[#09090b] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#a1a1aa]">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+598 99 123 456"
                    className="w-full bg-[#09090b] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-[#a1a1aa]">Vehículo de Interés</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#09090b] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
                  >
                    <option value="Porsche 911 GT3 RS">Porsche 911 GT3 RS</option>
                    <option value="Ferrari Roma Spider">Ferrari Roma Spider</option>
                    <option value="Aston Martin Vantage">Aston Martin Vantage</option>
                    <option value="Rimac Nevera Hypercar">Rimac Nevera Hypercar</option>
                    <option value="Otro / Búsqueda Personalizada">Otro / Búsqueda Personalizada</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#a1a1aa]">Mensaje o Requerimiento Especial</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Especifique requerimientos de importación, blindaje o pruebas de manejo..."
                  className="w-full bg-[#09090b] border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-white text-[#09090b] text-sm font-medium py-4 rounded-xl hover:bg-[#f4f4f5] transition-all shadow-lg"
              >
                <span>Enviar Consulta Confidencial</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
