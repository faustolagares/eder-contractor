import { Facebook, Twitter, Linkedin, MessageCircle, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/' },
  { name: 'Twitter', icon: Twitter, url: 'http://twitter.com/' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'Skype', icon: MessageCircle, url: 'https://skype.com/' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/' }
];

const navigationColumn1 = [
  { label: 'Home 01', url: '/' },
  { label: 'Home 02', url: '/' },
  { label: 'About Us', url: '/' },
  { label: 'Services', url: '/' },
  { label: 'Service Single', url: '/' },
  { label: 'Shop', url: '/' },
  { label: 'Shop Single', url: '/' }
];

const navigationColumn2 = [
  { label: 'Blog', url: '/' },
  { label: 'Blog Details', url: '/' },
  { label: 'Project', url: '/' },
  { label: 'Project Single', url: '/' },
  { label: 'Contact Us', url: '/' }
];

const utilityLinks = [
  { label: 'Style Guide', url: '/' },
  { label: 'Protected Password', url: '/' },
  { label: '404 Not Found', url: '/404' },
  { label: 'License', url: '/' },
  { label: 'Changelog', url: '/' }
];

const contactInfo = [
  { icon: Mail, text: 'zohation@gmail.com', type: 'email' },
  { icon: Phone, text: '(+008) 2165 35920', type: 'phone' },
  { icon: Phone, text: '(+880) 6599 02008', type: 'phone' },
  { icon: MapPin, text: 'Sydney, Australia', type: 'location' }
];

const Footer = () => {
  const [email, setEmail] = useState('');

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
            <h1 className="text-white text-[4.75rem] leading-[5.38rem] font-bold max-lg:max-w-[650px] max-lg:mx-auto max-md:max-w-[480px] max-md:text-[3.5rem] max-md:leading-[4rem] max-sm:max-w-[320px] max-sm:text-[2.5rem] max-sm:leading-[3rem]">
              Subscribe Newsletter For Latest Updates
            </h1>
          </div>
          <div className="w-[38%] max-lg:w-full max-lg:max-w-[440px]">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex items-center border-2 border-white/[0.15] max-sm:flex-col">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-300/[0.03] text-white/80 placeholder:text-white/80 h-16 px-7 w-full focus:outline-none max-sm:h-[50px] max-md:px-[25px]"
                  required
                />
                <input
                  type="submit"
                  value="Subscribe Now"
                  className="bg-orange-600 text-white font-semibold h-16 py-3 px-10 w-48 cursor-pointer hover:bg-orange-700 transition-colors duration-200 max-sm:w-full max-sm:h-[50px]"
                />
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
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/646f0323522f1b87570de476_Logo.png"
                alt="Logo"
                className="h-8 w-44"
              />
            </a>
            <p className="text-white/80 leading-7 mb-7 max-md:max-w-[420px] max-md:mb-5 max-sm:max-w-[275px]">
              Officia deserunt mollitia animi, id est laborum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
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
                  <h3 className="text-white text-3xl font-medium leading-10 mb-4 max-md:mb-[10px] max-sm:mb-[7px]">
                    Navigation
                  </h3>
                  <div className="bg-orange-600 h-0.5 w-20"></div>
                </div>
                <div className="flex justify-between gap-5">
                  <div className="flex flex-col gap-[1.63rem]">
                    {navigationColumn1.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="text-white/85 hover:text-orange-600 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col gap-[1.63rem]">
                    {navigationColumn2.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="text-white/85 hover:text-orange-600 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Utility Links */}
              <div>
                <div className="mb-10 max-md:mb-[35px] max-sm:mb-[30px]">
                  <h3 className="text-white text-3xl font-medium leading-10 mb-4 max-md:mb-[10px] max-sm:mb-[7px]">
                    Utility Pages
                  </h3>
                  <div className="bg-orange-600 h-0.5 w-20"></div>
                </div>
                <div className="flex flex-col gap-[1.63rem]">
                  {utilityLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="text-white/85 hover:text-orange-600 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <div className="mb-10 max-md:mb-[35px] max-sm:mb-[30px]">
                  <h3 className="text-white text-3xl font-medium leading-10 mb-4 max-md:mb-[10px] max-sm:mb-[7px]">
                    Contact Us
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
            Designed by{' '}
            <a
              href="https://zohaflow.webflow.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              Zohaflow
            </a>
            {' '}- Powered by{' '}
            <a
              href="https://webflow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              Webflow
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
