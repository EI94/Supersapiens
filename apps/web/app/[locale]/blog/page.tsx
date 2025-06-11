import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: locale === 'it' ? 'Blog - Supersapiens' : 'Blog - Supersapiens',
    description: locale === 'it' ? 'Articoli e approfondimenti su AI e innovazione' : 'Articles and insights on AI and innovation',
  };
}

const blogArticles = [
  {
    id: 1,
    category: 'Strategy',
    title: {
      en: 'Navigating the AI Landscape: A Strategic Guide for Businesses',
      it: 'Navigare nel Panorama AI: Una Guida Strategica per le Aziende'
    },
    description: {
      en: 'This article provides a comprehensive overview of AI strategies for businesses, covering key considerations, best practices, and real-world examples of successful implementations.',
      it: 'Questo articolo fornisce una panoramica completa delle strategie AI per le aziende, coprendo considerazioni chiave, best practices ed esempi reali di implementazioni di successo.'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRl1UEYb9hjg7YtltnBkBdjaIDuLM1NMZq1l92TksffdG7FnVbSE2eIqEomFd-2abhNwt1DPHYOxgb-tZZWYR-YpnoCrdbAg2LPhhius8Hkbwzh5jyhYw4tQhuK23EvFb4Vzgpd91hcGSqfh8JWzR662B6PSjc_93FpQ7z_S2rXcsN5LLUVyTdsPDzArqC_HQ6vUAZTQqkMSG78HVtbcyMIFe5Qi5iskPKahLTl8ZGOvOvez3i2Ut0xViZcq_oYXOiLVZIr8Vp6vtR'
  },
  {
    id: 2,
    category: 'Tech',
    title: {
      en: 'The Evolution of AI: From Theory to Practical Applications',
      it: "L'Evoluzione dell'AI: Dalla Teoria alle Applicazioni Pratiche"
    },
    description: {
      en: 'Explore the journey of AI from its theoretical origins to its current practical applications across various industries, highlighting key milestones and breakthroughs.',
      it: "Esplora il viaggio dell'AI dalle sue origini teoriche alle attuali applicazioni pratiche in vari settori, evidenziando tappe fondamentali e scoperte."
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL_0IjkZvWye4rTeD6IHQ7E80xrdQ42OWVPdMyb0N-hq49Su6PpbNaMRo2aRkJjVTNsHCH_A_M-eVo5zoHQLzShGDnUSVMtzeI7mUdacaSruwTlTJYKwVvI9Z5pg2RmBMtoHXeApIkBTwiCMboZiBUGSio76_v9JYNsVBNyiwWvUxdS9YXXIyRBbkDzSEbHhcvDmARK5y668bLEPVCDGi-W0YFCurc4AeQDXHLwNnJfascoNdOZzQw8i-8GMxYX30q3Ljz9jBkbP1J'
  },
  {
    id: 3,
    category: 'Culture',
    title: {
      en: 'AI and the Human Element: Fostering a Collaborative Culture',
      it: "AI e l'Elemento Umano: Promuovere una Cultura Collaborativa"
    },
    description: {
      en: 'Discover how to cultivate a collaborative culture that embraces AI, ensuring seamless integration and maximizing the benefits of AI technologies within your organization.',
      it: 'Scopri come coltivare una cultura collaborativa che abbraccia l\'AI, garantendo un\'integrazione senza soluzione di continuità e massimizzando i benefici delle tecnologie AI nella tua organizzazione.'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYyw7Nud30qlPHcys2CZY8UI3UerVqbkTc4YqSjFbGMSXW8E3Wgy28LGIvg2e4ZX-zBZpWXekOarVOs5-93uhm0VV0mSu-xfY9e1P5wIBR6L1wLMzy4lTlSJzw-vp0lmihTR4dlDBeTM5p2z0_iyDB9LG_k-4B2MAwees1XXJiXHGeOzKi1t3jv9hHPLPnSaLGubQMC3yxMBuciR0V3VqnSC3qgvyBGDNof6duR_U46cqJDkShcH9urw83RWKdBq0ys4WvvLx_tdIC'
  },
  {
    id: 4,
    category: 'Strategy',
    title: {
      en: 'Building a Future-Proof AI Strategy: Key Considerations',
      it: 'Costruire una Strategia AI a Prova di Futuro: Considerazioni Chiave'
    },
    description: {
      en: 'This article outlines essential considerations for developing an AI strategy that can adapt to future changes and advancements in technology, ensuring long-term success.',
      it: 'Questo articolo delinea considerazioni essenziali per sviluppare una strategia AI che può adattarsi ai cambiamenti futuri e ai progressi tecnologici, garantendo successo a lungo termine.'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAiftC8creRYdClLjwIPPWDyzSBKaA6-2OUn3vUobzdIgia8374ywvAIcF4-5mZSfTvpTlX0D09LzZ1RIVp1BgRscmXnpKa6zkUQZ4eDZ14BDYJMJ1-geoQZeK4mAENGBHTUmcB2lmwCTD326zHM4WIEu5N43SBXfbDkXQf0FifrQh3rdy4TbeJlSDrduITHP1DpsCBovTfXs9X1rwidKi8SO1Gmh4UhNgrtgIG-DToLZPfoXPKes6t57NFKlKZdrpizErXt9ZwJ8g'
    }
  },
  {
    id: 5,
    category: 'Tech',
    title: {
      en: 'Demystifying AI: A Technical Deep Dive into Core Concepts',
      it: 'Demistificare l\'AI: Un Approfondimento Tecnico sui Concetti Fondamentali'
    },
    description: {
      en: 'Gain a deeper understanding of AI with this technical deep dive into core concepts, including machine learning, neural networks, and natural language processing.',
      it: 'Ottieni una comprensione più profonda dell\'AI con questo approfondimento tecnico sui concetti fondamentali, inclusi machine learning, reti neurali e elaborazione del linguaggio naturale.'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwiSBNyJrjIs-LbY1AM4qxJU0xrdQ42OWVPdMyb0N-hq49Su6PpbNaMRo2aRkJjVTNsHCH_A_M-eVo5zoHQLzShGDnUSVMtzeI7mUdacaSruwTlTJYKwVvI9Z5pg2RmBMtoHXeApIkBTwiCMboZiBUGSio76_v9JYNsVBNyiwWvUxdS9YXXIyRBbkDzSEbHhcvDmARK5y668bLEPVCDGi-W0YFCurc4AeQDXHLwNnJfascoNdOZzQw8i-8GMxYX30q3Ljz9jBkbP1J'
  },
  {
    id: 6,
    category: 'Culture',
    title: {
      en: 'The Ethical Implications of AI: A Cultural Perspective',
      it: "Le Implicazioni Etiche dell'AI: Una Prospettiva Culturale"
    },
    description: {
      en: 'Examine the ethical considerations surrounding AI from a cultural perspective, addressing issues such as bias, privacy, and the impact on society.',
      it: "Esamina le considerazioni etiche che circondano l'AI da una prospettiva culturale, affrontando questioni come bias, privacy e impatto sulla società."
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCnyWd8KXwCKEoGY5DvU3-zQXCFk1vhg7RKjZPbunF34uIgrAonZJcBv2lanU3BFUn8Jv8-eCC8ZZ6SSpR3iS30oy4hi852baoIH8t9pchpqEFvbwhsBgsZBOzuJzYji6v0fPRFumR8SA6wtxUAGPXcGYrTKxWHSNu4_AO5aykGCq6eDQRWU0FpyK_Y9CpHTMYnOs2UL9XaG63Q5_SE2fT2RBpRw3ays-xTkulZxY_NAy41KkSKXKPAqerhlbXMJR_PEoygxAjeBmH'
    }
  }
];

const tags = [
  { key: 'strategy', label: { en: 'Strategy', it: 'Strategia' } },
  { key: 'tech', label: { en: 'Tech', it: 'Tecnologia' } },
  { key: 'culture', label: { en: 'Culture', it: 'Cultura' } },
  { key: 'innovation', label: { en: 'Innovation', it: 'Innovazione' } },
  { key: 'trends', label: { en: 'Trends', it: 'Tendenze' } }
];

export default function BlogPage({ params: { locale } }: Props) {
  const t = useTranslations('blog');

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#101a23] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223649] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Supersapiens</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Solutions</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Services</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Resources</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Company</a>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
            {/* Hero Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">{t('hero.title')}</p>
                <p className="text-[#90adcb] text-sm font-normal leading-normal">{t('hero.subtitle')}</p>
              </div>
            </div>

            {/* Blog Articles */}
            {blogArticles.map((article) => (
              <div key={article.id} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-lg">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#90adcb] text-sm font-normal leading-normal">
                        {t(`categories.${article.category.toLowerCase()}`)}
                      </p>
                      <p className="text-white text-base font-bold leading-tight">
                        {locale === 'it' ? article.title.it : article.title.en}
                      </p>
                      <p className="text-[#90adcb] text-sm font-normal leading-normal">
                        {locale === 'it' ? article.description.it : article.description.en}
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#223649] text-white text-sm font-medium leading-normal w-fit">
                      <span className="truncate">{t('readMore')}</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                    style={{ backgroundImage: `url("${article.image}")` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="layout-content-container flex flex-col w-[360px]">
            {/* Search */}
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-[#90adcb] flex border-none bg-[#223649] items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </div>
                  <input
                    placeholder={t('search.placeholder')}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#223649] focus:border-none h-full placeholder:text-[#90adcb] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    defaultValue=""
                  />
                </div>
              </label>
            </div>

            {/* Tags */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">{t('tags.title')}</h3>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {tags.map((tag) => (
                <div key={tag.key} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#223649] pl-4 pr-4">
                  <p className="text-white text-sm font-medium leading-normal">
                    {locale === 'it' ? tag.label.it : tag.label.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 