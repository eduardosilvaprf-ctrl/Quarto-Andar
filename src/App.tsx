/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Compass, 
  Palmtree, 
  Anchor, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Twitter, 
  Phone,
  Mail,
  Globe,
  Calendar
} from 'lucide-react';
import { useState, useEffect } from 'react';

const destinations = [
  {
    id: 1,
    name: 'Maldivas',
    description: 'Villas sobre águas cristalinas e pores do sol infinitos.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
    tag: 'Luxo'
  },
  {
    id: 2,
    name: 'Toscana, Itália',
    description: 'Vinhedos ondulantes, culinária autêntica e história viva.',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=800',
    tag: 'Cultura'
  },
  {
    id: 3,
    name: 'Quioto, Japão',
    description: 'Templos milenares e a serenidade das cerejeiras em flor.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    tag: 'Tradição'
  },
  {
    id: 4,
    name: 'Santorini, Grécia',
    description: 'Arquitetura branca debruçada sobre o Mar Egeu.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
    tag: 'Exclusivo'
  }
];

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Curadoria Global',
    description: 'Destinos selecionados a dedo por especialistas apaixonados.'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Itinerários Sob Medida',
    description: 'Viagens planejadas exclusivamente para o seu ritmo e desejo.'
  },
  {
    icon: <Anchor className="w-6 h-6" />,
    title: 'Experiências VIP',
    description: 'Acesso privativo a eventos e locais raramente abertos ao público.'
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-black rounded-sm transition-transform group-hover:rotate-90">6</div>
            <span className="text-xl font-black tracking-tighter uppercase">Sexto Andar™</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.25em] font-bold">
            <a href="#destinos" className="hover:text-indigo-400 transition-colors opacity-60 hover:opacity-100">Expedições</a>
            <a href="#servicos" className="hover:text-indigo-400 transition-colors opacity-60 hover:opacity-100">Serviços</a>
            <a href="#sobre" className="hover:text-indigo-400 transition-colors opacity-60 hover:opacity-100">Manifesto</a>
            <a href="#contato" className="bg-white text-black px-6 py-2 rounded-full hover:bg-indigo-400 transition-all opacity-100">Reservar Agora</a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
            id="mobile-menu-btn"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col p-8 text-white"
          >
            <div className="flex justify-between items-center">
              <span className="text-xl font-black tracking-tighter uppercase">Sexto Andar</span>
              <button onClick={() => setIsMobileMenuOpen(false)} id="close-mobile-menu">
                <X className="w-10 h-10 text-white" />
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-20 text-6xl font-black tracking-tighter uppercase italic">
              <a href="#destinos" onClick={() => setIsMobileMenuOpen(false)}>Destinos</a>
              <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
              <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
              <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Massive Background Typography */}
        <div className="absolute inset-0 flex flex-col justify-center items-center select-none pointer-events-none opacity-5 px-4 overflow-hidden">
          <div className="text-[15vw] md:text-[20vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap text-white">WANDER</div>
          <div className="text-[15vw] md:text-[20vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap -mt-[5vw] ml-[10vw] text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-white/0">BEYOND</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 justify-center lg:justify-start mb-6">
                <div className="h-[1px] w-12 bg-indigo-500"></div>
                <span className="text-indigo-400 text-xs uppercase tracking-[0.4em] font-black">Próxima Parada: Infinito</span>
              </div>
              <h1 className="text-7xl md:text-8xl lg:text-[110px] font-black leading-[0.85] tracking-tighter uppercase mb-10 text-white">
                ICELAND<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-300">UNBOUNDED</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed mx-auto lg:mx-0">
                Expedições customizadas por campos vulcânicos, lagoas glaciais e a dança silenciosa da aurora boreal. Descubra o extraordinário.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <button className="bg-white text-black px-12 py-5 rounded-full text-xs uppercase tracking-widest font-black hover:scale-105 transition-transform flex items-center gap-3 shadow-2xl">
                  Começar Jornada <ArrowRight className="w-4 h-4" />
                </button>
                <button className="bg-white/5 border border-white/10 px-12 py-5 rounded-full text-xs uppercase tracking-widest font-black hover:bg-white/10 transition-colors text-white">
                  Ver Itinerários
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="hidden lg:block lg:col-span-4 relative">
             <div className="aspect-[4/5] bg-gray-900 border border-white/10 rounded-3xl overflow-hidden relative group shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800"
                  alt="Featured Destination"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-left">
                  <div className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-400 mb-2">Destaque do Mês</div>
                  <h3 className="text-2xl font-black mb-4 uppercase text-white">The Arctic Traverse</h3>
                  <div className="flex justify-between items-center text-xs font-mono opacity-60 text-white">
                    <span>12 DIAS</span>
                    <span>WINTER SEASON</span>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 flex flex-col gap-1">
                  <div className="w-8 h-[1px] bg-white opacity-20"></div>
                  <div className="w-12 h-[1px] bg-white opacity-40"></div>
                  <div className="w-6 h-[1px] bg-white opacity-20"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Data Bar */}
        <div className="absolute bottom-0 left-0 w-full hidden md:grid grid-cols-4 h-24 border-t border-white/10 bg-black/40 backdrop-blur-sm px-6 items-center">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-indigo-400 font-black mb-1">Status do Voo</span>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-white uppercase">KFL → REY</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-indigo-400 font-black mb-1">Próxima Janela</span>
              <span className="text-lg font-black tracking-tight text-white uppercase">SETEMBRO 2026</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-indigo-400 font-black mb-1">Altitude Local</span>
              <span className="text-lg font-black tracking-tight text-white">2,110M</span>
            </div>
            <div className="flex justify-end">
               <button className="bg-white text-black px-8 py-3 text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-lg">
                  Agendar Call
               </button>
            </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="sobre" className="py-32 px-6 max-w-7xl mx-auto text-white">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <span className="text-indigo-500 text-xs uppercase tracking-[0.3em] font-black mb-6 block">Nosso Manifesto</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
              MUITO ALÉM DE ONDE IR, O QUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 italic">SENTIR</span>.
            </h2>
            <p className="text-white/40 leading-relaxed mb-10 text-xl font-light">
              No Sexto Andar, acreditamos que viajar é a forma mais pura de investir em si mesmo. Nossa missão é criar pontes entre você e as culturas mais ricas e os cenários mais intocados através de curadoria tecnológica e sensibilidade humana.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-10">
              <div>
                <p className="text-4xl font-black text-indigo-500">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-black mt-2">ANOS DE OPERAÇÃO</p>
              </div>
              <div>
                <p className="text-4xl font-black text-indigo-500">1.2k</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-black mt-2">EXPEDIÇÕES ATIVAS</p>
              </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-gray-900 group">
              <img 
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=800" 
                alt="Lifestyle"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white text-black p-8 rounded-2xl hidden lg:block shadow-2xl max-w-[280px]">
              <p className="text-xl font-black uppercase tracking-tighter italic">"A VIAGEM É O DESTINO EM SI."</p>
              <div className="w-12 h-[2px] bg-indigo-500 mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinos" className="py-32 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-8xl md:text-9xl font-black uppercase tracking-tighter opacity-10 -ml-2 mb-[-60px] pointer-events-none text-white select-none whitespace-nowrap">DISCOVER</h2>
              <div className="relative z-10">
                <span className="text-indigo-500 text-xs uppercase tracking-[0.3em] font-black mb-4 block">World Grid</span>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">Curadoria Técnica.</h2>
              </div>
            </div>
            <button className="text-white hover:text-indigo-400 transition-colors flex items-center gap-3 group text-[10px] uppercase tracking-[0.2em] font-black">
              MAPA COMPLETO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {destinations.map((dest, i) => (
              <motion.div 
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col justify-end p-8 border border-white/10 overflow-hidden rounded-2xl aspect-[3/4] bg-gray-900"
              >
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-20 group-hover:opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="relative z-10 text-left">
                  <div className="text-[9px] font-mono text-indigo-400 mb-2 font-bold uppercase tracking-widest">EST. PROTOCOL. {2026 - i * 2}</div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 group-hover:text-indigo-400 transition-colors text-white">{dest.name}</h3>
                  <p className="text-xs text-white/40 font-light leading-relaxed group-hover:text-white transition-colors">{dest.description}</p>
                </div>

                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs text-white">→</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-40 bg-white/2 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-indigo-500 text-[10px] bg-indigo-500/10 px-4 py-1 rounded-full uppercase tracking-[0.4em] font-black mb-6 inline-block">Active Protocol</span>
            <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-white">Especialidade Sexto Andar.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-0 border border-white/10 rounded-[2rem] overflow-hidden">
            {services.map((service, i) => (
              <div key={i} className="flex flex-col items-start p-12 hover:bg-white/5 transition-all border-r border-white/10 last:border-r-0">
                <div className="w-12 h-12 bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-10 rounded-xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-white">{service.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm font-light">
                  {service.description}
                </p>
                <div className="mt-12 w-8 h-[1px] bg-white/20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[4rem] overflow-hidden bg-white text-black p-12 md:p-32 text-center shadow-[0_0_100px_rgba(255,255,255,0.05)]">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-indigo-500 text-[10px] uppercase tracking-[0.4em] font-black mb-8 block">Final Destination</span>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
                START THE <br/> <span className="italic">EXPEDITION</span>.
              </h2>
              <p className="text-xl text-black/60 font-light mb-16 leading-relaxed">
                Nossos consultores estão prontos para transformar seus sonhos em protocolos inesquecíveis.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button className="bg-black text-white px-16 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl">
                  Falar com Consultor
                </button>
                <button className="bg-black/5 border border-black/10 text-black px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-black/10 transition-all">
                  Baixar Catálogo 2026
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-32 pb-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-20 mb-24">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-10">
                 <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-black rounded-sm">6</div>
                <span className="text-2xl font-black tracking-tighter uppercase text-white">SEXTO ANDAR™</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-10 font-light">
                Agência boutique especializada em curadoria de viagens de luxo e experiências culturais exclusivas com validação técnica global.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-white/20 hover:text-indigo-400 transition-colors uppercase font-black text-[10px] tracking-widest">IG</a>
                <a href="#" className="text-white/20 hover:text-indigo-400 transition-colors uppercase font-black text-[10px] tracking-widest">TW</a>
                <a href="#" className="text-white/20 hover:text-indigo-400 transition-colors uppercase font-black text-[10px] tracking-widest">BE</a>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-indigo-500">Navegação</h4>
              <ul className="flex flex-col gap-6 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                <li><a href="#destinos" className="hover:text-white transition-colors">Destinos</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Expedições</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-indigo-500">Alpha Access</h4>
              <ul className="flex flex-col gap-6 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ_SYS</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-indigo-500">Base Central</h4>
              <ul className="flex flex-col gap-6 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span>HQ: +55 (11) 9988-7766</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>ola@sextoandar.travel</span>
                </li>
              </ul>
              <div className="mt-10 h-[1px] w-full bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">
            <p>© 2026 SEXTO_ANDAR_SYSTEM — ALL PROTOCOLS RESERVED.</p>
            <div className="flex gap-10">
              <span className="flex items-center gap-2">IATA_ACC_SYS</span>
              <span className="flex items-center gap-2">SUST_P_2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

