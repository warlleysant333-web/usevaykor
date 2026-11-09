import { Shield, Truck, Shirt, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/557999286610?text=Ol%C3%A1!%20Quero%20comprar%20uma%20camiseta%20Vaykor.';
const SHOPEE_URL = 'https://shopee.com.br/usevaykor?categoryId=100011&entryPoint=ShopByPDP&itemId=58222192212';

const HERO_IMAGE = '/image.png';

const benefits = [
  {
    icon: Shield,
    title: 'Fé, Família e Força',
    desc: 'Nossos valores impressos em cada detalhe. Mais do que uma camiseta, uma declaração de quem você é.',
  },
  {
    icon: Truck,
    title: 'Envios para todo o Brasil',
    desc: 'Entregamos em todo o território nacional com rastreamento e segurança do início ao fim.',
  },
  {
    icon: Shirt,
    title: 'Tecido Premium',
    desc: 'Alta durabilidade, toque macio e modelagem que mantém o caimento perfeito lavagem após lavagem.',
  },
];

const pillars = [
  { label: 'Fé', desc: 'Firmeza naquilo em que você acredita.' },
  { label: 'Família', desc: 'A base que sustenta cada passo.' },
  { label: 'Força', desc: 'A atitude para seguir adiante.' },
];

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="border-b border-white/5 bg-ink-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#top" className="flex items-center gap-3 group">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-olive-600 text-ink-900 font-display font-700 text-xl tracking-wide group-hover:bg-olive-500 transition-colors">
                V
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display font-700 text-xl sm:text-2xl tracking-[0.2em] text-white">
                  VAYKOR
                </span>
                <span className="hidden sm:block text-[10px] tracking-[0.3em] text-olive-300 mt-1">
                  VISTA SEUS VALORES
                </span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              <a href="#produto" className="hover:text-white transition-colors">Produto</a>
              <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
              <a href="#contato" className="hover:text-white transition-colors">Contato</a>
            </nav>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-whatsapp px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-whatsapp-dark transition-colors"
            >
              Comprar agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-olive-700/20 rounded-full blur-[120px] animate-glow" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-olive-600/40 bg-olive-900/30 px-4 py-1.5 text-xs font-medium tracking-wide text-olive-200">
            <span className="w-1.5 h-1.5 rounded-full bg-olive-400" />
            Vista Seus Valores
          </span>

          <h1 className="mt-6 font-display font-700 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Camisetas com <span className="text-gradient-olive">identidade, fé</span> e atitude
          </h1>

          <p className="mt-5 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            Três pilares que carregam cada coleção: <span className="text-olive-300 font-medium">Fé, Família e Força</span>. Tecido de alta qualidade, modelagem confortável e caimento perfeito para vestir o que você acredita.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="rounded-lg border border-white/10 bg-ink-700/60 px-4 py-2.5 text-left"
              >
                <p className="font-display font-600 tracking-wide text-white">{p.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-whatsapp px-7 py-4 text-base font-semibold text-ink-900 shadow-lg shadow-whatsapp/20 hover:bg-whatsapp-dark hover:scale-[1.02] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Comprar pelo WhatsApp
            </a>
            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-shopee px-7 py-4 text-base font-semibold text-white shadow-lg shadow-shopee/20 hover:bg-shopee-dark hover:scale-[1.02] transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              Comprar na Shopee
            </a>
          </div>
        </div>

        <div id="produto" className="relative animate-fade-in">
          <div className="absolute inset-0 bg-olive-600/10 blur-3xl rounded-[2rem]" />
          <div className="relative rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-ink-700 to-ink-800 p-3 shadow-2xl glow-olive animate-float">
            <div className="rounded-[1.4rem] overflow-hidden bg-ink-900">
              <img
                src={HERO_IMAGE}
                alt="Camiseta Vaykor — modelo usando a peça premium"
                className="w-full h-full object-cover aspect-[4/5]"
                loading="eager"
              />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-ink-900/90 backdrop-blur px-4 py-2 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-olive-400 animate-pulse" />
              <span className="text-xs font-medium text-gray-200 tracking-wide">Edição de lançamento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="diferenciais" className="relative py-20 sm:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-medium tracking-[0.3em] text-olive-400">DIFERENCIAIS</span>
          <h2 className="mt-3 font-display font-700 text-3xl sm:text-4xl tracking-tight">
            Mais do que vestir. <span className="text-gradient-olive">Representar.</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Cada peça é pensada para durar, transmitir e acompanhar — do dia a dia aos momentos que mais importam.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-ink-700/40 p-7 hover:border-olive-600/50 hover:bg-ink-700/70 transition-all"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-olive-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-olive-900/50 border border-olive-700/40 text-olive-300 group-hover:scale-110 group-hover:text-olive-200 transition-all">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display font-600 text-xl tracking-wide text-white">{title}</h3>
              <p className="mt-2.5 text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-800 to-ink-900" />
      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display font-700 text-3xl sm:text-5xl tracking-tight">
          Pronto para vestir seus valores?
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          Escolha onde é mais conveniente para você e garanta a sua.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-whatsapp px-8 py-4 text-base font-semibold text-ink-900 shadow-lg shadow-whatsapp/20 hover:bg-whatsapp-dark hover:scale-[1.02] transition-all"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Comprar pelo WhatsApp
          </a>
          <a
            href={SHOPEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-shopee px-8 py-4 text-base font-semibold text-white shadow-lg shadow-shopee/20 hover:bg-shopee-dark hover:scale-[1.02] transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            Comprar na Shopee
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="border-t border-white/5 bg-ink-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-olive-600 text-ink-900 font-display font-700 text-xl">
                V
              </span>
              <span className="font-display font-700 text-xl tracking-[0.2em]">VAYKOR</span>
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Camisetas com propósito. Vestir fé, família e força — todos os dias, em cada detalhe.
            </p>
          </div>

          <div>
            <h4 className="font-display font-600 tracking-wide text-sm text-olive-300">Links rápidos</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li><a href="#produto" className="hover:text-white transition-colors">Produto</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href={SHOPEE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Shopee</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-600 tracking-wide text-sm text-olive-300">Contato</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-olive-400" />
                contato@vaykor.com.br
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-olive-400" />
                (79) 9928-6610
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-olive-400" />
                Brasil
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-600 tracking-wide text-sm text-olive-300">Redes sociais</h4>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-ink-700/50 text-gray-300 hover:border-olive-600/50 hover:text-olive-300 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-ink-700/50 text-gray-300 hover:border-olive-600/50 hover:text-olive-300 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-ink-700/50 text-gray-300 hover:border-whatsapp/50 hover:text-whatsapp transition-all">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Vaykor. Todos os direitos reservados.</p>
          <p className="tracking-wide">Vista Seus Valores — Fé • Família • Força</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ShoppingBag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 11-8 0" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
