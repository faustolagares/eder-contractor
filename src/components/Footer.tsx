import { Facebook, Twitter, Linkedin, MessageCircle, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/' },
  { name: 'Twitter', icon: Twitter, url: 'http://twitter.com/' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'Skype', icon: MessageCircle, url: 'https://skype.com/' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/' }
];

const navigationLinks = [
  { labelKey: 'header.nav.home', url: '/' },
  { labelKey: 'header.nav.about', url: '/about-us' },
  { labelKey: 'header.nav.services', url: '/services' },
  { labelKey: 'header.nav.projects', url: '/projects' },
  { labelKey: 'header.nav.contact', url: '/contact' }
];

const contactInfo = [
  { icon: Mail, text: 'hello@edercontractor.com', type: 'email' },
  { icon: Phone, text: '(404) 563-1575', type: 'phone' },
  { icon: MapPin, text: 'Goose Creek, SC', type: 'location' }
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="bg-black text-white/85 pt-32 max-lg:pt-[100px] max-md:pt-20 max-sm:pt-[60px] overflow-visible">
      <div className="max-w-[82.5rem] mx-auto px-4">
        {/* Newsletter Section */}
        <div className="flex items-center justify-between border-b-2 border-white/[0.2] pb-12 mb-16 max-lg:flex-col max-lg:justify-center max-md:mb-[60px] max-md:pb-10 max-sm:pb-[30px]">
          <div className="w-[52%] max-lg:w-full max-lg:mb-8">
            <h1 className="text-white text-[4.75rem] leading-[5.38rem] font-bold max-lg:max-w-[650px] max-md:max-w-[480px] max-md:text-[3.5rem] max-md:leading-[4rem] max-sm:max-w-[320px] max-sm:text-[2.5rem] max-sm:leading-[3rem]">
              {t('footer.newsletter.title')}
            </h1>
          </div>
          <div className="w-[38%] max-lg:w-full max-lg:max-w-[440px]">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex items-center border-2 border-white/[0.15] max-sm:flex-col">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-300/[0.03] text-white/80 placeholder:text-white/80 h-16 px-7 w-full focus:outline-none max-sm:h-[50px] max-md:px-[25px]"
                  required
                />
                <button
                  type="submit"
                  className="group relative flex items-center justify-center bg-orange-600 text-white font-semibold h-16 py-4 px-6 sm:px-10 w-full sm:w-auto sm:min-w-[220px] cursor-pointer overflow-hidden transition-all duration-300 hover:bg-black border-2 border-orange-600 hover:border-black max-sm:h-[50px]"
                >
                  <div className="relative w-full flex items-center justify-center overflow-hidden h-6 max-sm:h-5">
                    <span className="relative whitespace-nowrap transition-all duration-300 group-hover:-translate-y-full block">
                      {t('footer.newsletter.button')}
                    </span>
                    <span className="absolute whitespace-nowrap translate-y-full transition-all duration-300 group-hover:translate-y-0 block">
                      {t('footer.newsletter.button')}
                    </span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex justify-between pb-16 gap-5 max-lg:flex-col max-md:pb-[60px]">
          {/* Brand Column */}
          <div className="w-[31%] max-lg:w-full max-lg:max-w-[440px] max-lg:mx-auto">
            <a href="/" className="inline-block mb-8 max-md:mb-[25px]">
              <img 
                src="/assets/logos/eder-contractor-logo-white-symbol.png" 
                alt="Eder Contractor" 
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-white/80 leading-7 mb-7 max-md:max-w-[420px] max-md:mb-5 max-sm:max-w-[275px]">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4 max-lg:justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border-2 border-white/[0.2] text-white text-xl hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 max-md:w-[45px] max-md:h-[45px] max-sm:w-10 max-sm:h-10"
                    aria-label={social.name}
                  >
                    <Icon size={20} className="max-sm:w-4 max-sm:h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Grid */}
          <div className="w-[63%] max-lg:w-full">
            <div className="grid grid-cols-[1.5fr_1fr_1.2fr] gap-x-[5.63rem] gap-y-4 max-md:grid-cols-[1.3fr_1fr] max-sm:grid-cols-1">
              {/* Navigation Links */}
              <div>
                <div className="mb-10 max-md:mb-[35px] max-sm:mb-[30px]">
                  <h3 className="text-white text-[2.25rem] font-medium leading-10 mb-4 max-md:mb-[10px] max-sm:mb-[7px]">
                    {t('footer.navigation.title')}
                  </h3>
                  <div className="bg-orange-600 h-0.5 w-20"></div>
                </div>
                <div className="flex flex-col gap-[1.63rem]">
                  {navigationLinks.map((link) => (
                    <a
                      key={link.labelKey}
                      href={link.url}
                      className="text-white/85 hover:text-orange-600 transition-colors duration-200"
                    >
                      {t(link.labelKey)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <div className="mb-10 max-md:mb-[35px] max-sm:mb-[30px]">
                  <h3 className="text-white text-[2.25rem] font-medium leading-10 mb-4 max-md:mb-[10px] max-sm:mb-[7px]">
                    {t('footer.contactTitle')}
                  </h3>
                  <div className="bg-orange-600 h-0.5 w-20"></div>
                </div>
                <div className="flex flex-col gap-[0.63rem]">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div key={index} className="flex items-center gap-[0.88rem]">
                        <div className="w-7 h-7 flex items-center justify-center bg-orange-600">
                          <Icon size={16} className="text-white" />
                        </div>
                        <div className="text-white/85">{contact.text}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t-2 border-white/[0.2] py-7 text-center max-md:py-5">
          <div className="text-white">
            {t('footer.copyright', { designer: 'Fausto Lagares', platform: 'NexLink' })}
            {' '}
            <a
              href="https://www.nexlink.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              NexLink
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
