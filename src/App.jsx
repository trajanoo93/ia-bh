import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bot, Zap, Brain, MessageSquare, ChevronRight, Code2, Cpu } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-void-900/50 border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-tr from-cyber-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tighter text-white">
          IA <span className="text-cyber-500">BH</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#solucoes" className="hover:text-cyber-500 transition-colors">Soluções</a>
        <a href="#tecnologia" className="hover:text-cyber-500 transition-colors">Tecnologia</a>
        <a href="#sobre" className="hover:text-cyber-500 transition-colors">Sobre Nós</a>
        <button className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all text-white">
          Área do Cliente
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyber-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyber-500 animate-pulse"></span>
          <span className="text-sm text-cyber-500 tracking-widest font-semibold uppercase">A Revolução Chegou a BH</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
        >
          Inteligência <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-500 to-purple-600">
            Além do Código
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformamos empresas de Belo Horizonte com agentes de IA autônomos e soluções personalizadas que não apenas atendem, mas entendem o seu cliente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-cyber-500 text-void-900 font-bold rounded-xl overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative flex items-center gap-2">
              Falar com Especialista <ChevronRight className="w-5 h-5" />
            </span>
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-medium transition-all">
            Ver Demonstração
          </button>
        </motion.div>
      </div>

      {/* Grid Floor Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-void-900 to-transparent z-20"></div>
      <div 
        className="absolute bottom-0 left-0 right-0 h-[50vh] opacity-20 transform perspective-[1000px] rotate-x-[60deg]"
        style={{
            backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyber-500/50 transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="w-14 h-14 bg-void-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
      <Icon className="w-7 h-7 text-cyber-500" />
    </div>
    
    <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </motion.div>
);

const Features = () => (
  <section className="py-32 relative z-10" id="solucoes">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard 
          icon={Bot} 
          title="Atendimento IA 24/7" 
          desc="Seus clientes nunca mais ficarão esperando. Nossos agentes conversam, negociam e fecham vendas automaticamente no WhatsApp e Instagram."
          delay={0.1}
        />
        <FeatureCard 
          icon={Code2} 
          title="Soluções Customizadas" 
          desc="Não vendemos caixas fechadas. Desenvolvemos o cérebro digital específico para a dor da sua operação, seja no varejo ou indústria."
          delay={0.2}
        />
        <FeatureCard 
          icon={Zap} 
          title="Automação de Processos" 
          desc="Integre seu CRM, ERP e planilhas. A IA BH conecta seus dados e toma decisões inteligentes baseadas nas suas regras de negócio."
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

const TechTicker = () => (
  <div className="w-full py-10 border-y border-white/5 bg-black/20 overflow-hidden flex relative z-10">
    <motion.div 
      className="flex gap-16 whitespace-nowrap"
      animate={{ x: [0, -1000] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="text-2xl font-bold text-gray-500/50 flex items-center gap-4"><Cpu /> OPENAI GPT-4</span>
          <span className="text-2xl font-bold text-gray-500/50 flex items-center gap-4"><Bot /> LLAMA 3</span>
          <span className="text-2xl font-bold text-gray-500/50 flex items-center gap-4"><Code2 /> PYTHON</span>
          <span className="text-2xl font-bold text-gray-500/50 flex items-center gap-4"><Zap /> LANGCHAIN</span>
          <span className="text-2xl font-bold text-gray-500/50 flex items-center gap-4"><Brain /> NEURAL NETWORKS</span>
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const CtaSection = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-cyber-500/5"></div>
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">Pronto para colocar sua empresa no <span className="text-cyber-500">próximo nível?</span></h2>
      <p className="text-xl text-gray-400 mb-12">Agende uma consultoria gratuita e descubra onde a IA pode economizar tempo e multiplicar lucros no seu negócio.</p>
      
      <form className="max-w-md mx-auto flex flex-col gap-4">
        <input 
          type="email" 
          placeholder="Seu melhor e-mail corporativo" 
          className="w-full px-6 py-4 bg-void-800 border border-white/10 rounded-xl focus:border-cyber-500 focus:outline-none focus:ring-1 focus:ring-cyber-500 transition-all text-white"
        />
        <button className="w-full py-4 bg-cyber-500 hover:bg-cyber-600 text-void-900 font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
          Solicitar Acesso Antecipado
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/10 bg-void-900 text-center text-gray-500">
    <p>&copy; 2026 IA BH - Inteligência Artificial. Todos os direitos reservados.</p>
  </footer>
);

function App() {
  return (
    <div className="bg-void-900 min-h-screen text-white selection:bg-cyber-500 selection:text-void-900">
      <Navbar />
      <Hero />
      <TechTicker />
      <Features />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;