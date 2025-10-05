// src/pages/Solution.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Play, ArrowRight, SunMedium } from 'lucide-react';
import { highlights, timeline } from '../data/solutionData';
import { telegramService } from '../utils/telegramService';

export default function SolutionPage() {
  const [selected, setSelected] = useState(null);
  const [contact, setContact] = useState({ name: '', email: '', msg: '' });
  const [sent, setSent] = useState(false);

  const handleSelect = (id) => setSelected(id === selected ? null : id);

  // Обработчики для кнопок
  const handleContact = (type) => {
    switch (type) {
      case 'contact':
        telegramService.contactTeam();
        break;
      case 'partner':
        telegramService.becomePartner();
        break;
      case 'message':
        telegramService.askQuestion();
        break;
      default:
        console.warn('Unknown contact type:', type);
    }
  };

  // Отправка формы
  const submitContact = async (e) => {
    e.preventDefault();

    if (!contact.name || !contact.email || !contact.msg) {
      alert('Please fill all fields');
      return;
    }

    setSent(true);

    const success = telegramService.sendFormData(contact);

    if (success) {
      setContact({ name: '', email: '', msg: '' });
    }

    setSent(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-10 bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-md border border-white/30 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Our solution — practical steps to save the Aport
              </h1>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                We propose a multi-layered program that addresses immediate technical needs and builds long-term resilience for the Aport apple through infrastructure, community engagement, and biological conservation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full shadow"
                >
                  <Play className="w-5 h-5" /> Learn how it works
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-full"
                >
                  <ArrowRight className="w-5 h-5 text-red-600" /> Get involved
                </motion.button>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="text-sm text-gray-500">Estimated impact</div>
                  <div className="text-xl font-bold text-red-600">Restore soil moisture &gt;80%</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="text-sm text-gray-500">Timescale</div>
                  <div className="text-xl font-bold text-orange-600">Short to Long term</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-40 blur-3xl"></div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-semibold text-gray-800">Quick diagnostic</h4>
                <p className="mt-2 text-gray-600">Soil moisture decreased by 30% in key orchards; irrigation canals show critical leaks.</p>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Irrigation health</div>
                    <div className="font-bold text-green-600">42%</div>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '42%' }} />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50 rounded">
                    <div className="text-xs text-gray-500">Nurseries</div>
                    <div className="font-semibold">12 active</div>
                  </div>
                  <div className="p-3 bg-amber-50 rounded">
                    <div className="text-xs text-gray-500">Protected orchards</div>
                    <div className="font-semibold">5 sites</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Highlights section */}
        <section id="highlights" className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Core program highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((h) => (
              <motion.article
                key={h.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl p-6 bg-white border border-gray-200 shadow-lg"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white bg-gradient-to-br ${h.color}`}>
                  <h.icon className="w-6 h-6" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">{h.title}</h3>
                <p className="mt-2 text-gray-600">{h.text}</p>

                <div className="mt-4">
                  <button
                    onClick={() => handleSelect(h.id)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-red-600"
                  >
                    {selected === h.id ? 'Hide details' : 'Learn more'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {selected === h.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 text-sm text-gray-700 bg-gray-50 rounded p-3"
                  >
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Immediate technical assessment of canals and pumps.</li>
                      <li>Deploy low-cost sensors for soil moisture mapping.</li>
                      <li>Establish propagation nurseries for climate-resilient rootstocks.</li>
                    </ul>
                  </motion.div>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {/* Timeline section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Roadmap</h2>
          <div className="flex flex-col gap-6">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl shadow border"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">{t.year}</div>
                    <div className="text-lg font-semibold text-gray-800">{t.text}</div>
                  </div>
                  <div className="text-sm text-gray-400">ETA</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="p-8 bg-white rounded-2xl shadow-lg border">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Get involved</h3>
            <p className="text-gray-600 mb-4">We collaborate with NGOs, local authorities, and farmers. Join pilot projects or support conservation efforts.</p>

            <ul className="space-y-3 text-gray-700">
              <li>Volunteer for field restoration.</li>
              <li>Support nursery creation and seed banks.</li>
              <li>Participate in water management workshops.</li>
            </ul>

            <div className="mt-6">
              <button
                onClick={() => handleContact('partner')}
                className="px-5 py-3 rounded-full bg-red-600 text-white"
              >
                Become a partner
              </button>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-white/80 to-white/60 rounded-2xl shadow-lg border">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Contact us</h3>

            <form id="contact-form" onSubmit={submitContact} className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Your name</label>
                <input
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className="w-full mt-1 p-3 border rounded"
                  placeholder="Full name"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="w-full mt-1 p-3 border rounded"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  value={contact.msg}
                  onChange={(e) => setContact({ ...contact, msg: e.target.value })}
                  className="w-full mt-1 p-3 border rounded"
                  rows={4}
                  placeholder="How would you like to help?"
                  required
                />
              </div>

              <div className="flex items-center gap-4">
                <button type="submit" disabled={sent} className="px-5 py-3 bg-red-600 text-white rounded-full">
                  {sent ? 'Sending...' : 'Send message'}
                </button>
                <div className="text-sm text-gray-500">We will reply within 3–5 business days.</div>
              </div>
            </form>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-xl flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="text-sm text-white/80">Ready to restore Aport?</div>
            <h3 className="text-2xl font-bold mt-2">Partner with us to save a legacy</h3>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => handleContact('contact')}
              className="px-6 py-3 bg-white text-red-600 rounded-full font-semibold"
            >
              Contact team
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}