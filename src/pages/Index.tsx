import { useEffect } from "react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import './hero.css';
import './number-talks.css';

const Index = () => {
  const { t } = useTranslation();
  
  // Scroll animation hooks for About section images
  const { transform: transform1, elementRef: ref1 } = useScrollAnimation<HTMLImageElement>({ speed: 0.15 });
  const { transform: transform2, elementRef: ref2 } = useScrollAnimation<HTMLImageElement>({ speed: -0.15 });
  const { transform: transform3, elementRef: ref3 } = useScrollAnimation<HTMLImageElement>({ speed: 0.05 });
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <Header />
    <section
      className="relative w-full min-h-screen overflow-hidden bg-white bg-cover bg-no-repeat bg-center pt-28 md:pt-24 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32"
      style={{ backgroundImage: "url('https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473383e6d3931efc97be3a8_Banner%20Bg%20Hv2.png')" }}
      id="section-1"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-12" id="div-1">
          {/* Left Content */}
          <div 
            className="w-full lg:w-3/5 flex flex-col justify-center space-y-6 md:space-y-8" 
            id="div-2"
          >
            <div className="w-full pt-[60px] md:pt-0" id="div-3">
              <div className="flex items-center gap-x-4 w-full h-5 mb-6" id="div-4">
                <div className="w-16 sm:w-24 h-0.5 bg-primary" id="div-5"></div>
                <div className="text-primary text-xl sm:text-xl font-bold italic">{t('hero.badge')}</div>
              </div>
              
              <h2 
                className="w-full mt-6 lg:mt-9 mb-6 lg:mb-7 text-white text-fluid-xl font-bold"
                id="h2-1"
              >
                {t('hero.title')}
              </h2>
              
              <p 
                className="w-full mb-8 lg:mb-10 text-white/70 text-fluid-base"
                id="p-1"
              >
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-x-[0.63rem] w-full" id="div-6">
                <div className="w-full sm:w-auto inline-block">
                  <a 
                    href="#contact" 
                    className="group relative flex items-center justify-center w-full sm:w-auto sm:min-w-[176px] h-16 py-4 px-6 sm:py-[19px] sm:px-[38px] bg-primary border-2 border-primary text-white text-sm font-semibold uppercase cursor-pointer overflow-hidden"
                    id="a-1"
                  >
                    <div className="relative w-full flex items-center justify-center overflow-hidden h-6">
                      <span className="relative whitespace-nowrap transition-all duration-300 group-hover:-translate-y-full block">
                        {t('hero.cta.primary')}
                      </span>
                      <span className="absolute whitespace-nowrap translate-y-full transition-all duration-300 group-hover:translate-y-0 block">
                        {t('hero.cta.primary')}
                      </span>
                    </div>
                  </a>
                </div>
                
                <div className="w-full sm:w-auto inline-block">
                  <a 
                    href="#about" 
                    className="group relative flex items-center justify-center w-full sm:w-auto sm:min-w-[176px] h-16 py-4 px-6 sm:py-[19px] sm:px-[38px] text-white border-2 border-white/30 text-sm font-semibold uppercase cursor-pointer overflow-hidden transition-all duration-[450ms] hover:border-primary"
                    id="a-2"
                  >
                    <div className="relative w-full flex items-center justify-center overflow-hidden h-6">
                      <span className="relative whitespace-nowrap transition-all duration-300 group-hover:-translate-y-full block">
                        {t('hero.cta.secondary')}
                      </span>
                      <span className="absolute whitespace-nowrap translate-y-full transition-all duration-300 group-hover:translate-y-0 block">
                        {t('hero.cta.secondary')}
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div 
            className="flex w-full lg:w-2/5 items-center justify-center" 
            id="div-7"
          >
            <div className="relative w-full h-[600px]">
              <div 
                className="absolute inset-0 bg-primary/30 -z-10"
                id="div-9"
              ></div>
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473477da8934fab32a6c309_Hero%20Image.png" 
                srcSet="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473477da8934fab32a6c309_Hero%20Image-p-500.png 500w, https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473477da8934fab32a6c309_Hero%20Image.png 722w"
                alt="Construction hero"
                className="absolute bottom-0 w-full h-full object-contain"
                fetchPriority="high"
                width="722"
                height="600"
              />
              
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64734822033acf2e5696c183_Hero%20Image%20Shape1.png" 
                alt="Shape decoration"
                className="absolute inset-0 w-full h-full object-contain z-[10]"
                loading="lazy"
                id="img-1"
              />
              
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64734822821a39916e686b22_Hero%20Image%20Shape2.png" 
                alt="Shape decoration"
                className="absolute inset-0 w-full h-full object-contain z-[1]"
                loading="lazy"
                id="img-2"
              />
            </div>
          </div>
        </div>
      </div>

    </section>

      {/* Features Section */}
      <section 
        className="relative w-full overflow-visible bg-stone-50 py-12 sm:py-16 md:py-20"
        id="features-section"
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="relative w-full -mt-16 sm:-mt-20 md:-mt-24" id="features-div-1">
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full" 
              id="features-div-2"
            >
              {/* Card 1 - Best House Renovation */}
              <div 
                className="bg-white w-full p-6 md:p-8" 
                id="features-div-3"
              >
                <div className="flex items-center gap-x-3 w-full h-9 mb-8" id="features-div-4">
                  <div className="w-6 h-5">
                    <div className="inline-block w-6 h-5 font-medium">01/</div>
                  </div>
                  <div className="w-8 h-9">
                    <img 
                      src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/646f4afe705cac1607e0c8b1_Features%20Image.png" 
                      alt="Renovation icon"
                      className="inline-block w-8 h-9 max-w-full align-middle overflow-clip" 
                      id="features-img-1" 
                    />
                  </div>
                </div>
                <div className="w-full h-auto">
                  <h3 className="w-full h-auto text-2xl lg:text-2xl font-semibold leading-tight mb-4">
                    {t('features.feature1.title')}
                  </h3>
                  <p className="w-full h-auto text-black/60 leading-relaxed">
                    {t('features.feature1.description')}
                  </p>
                </div>
              </div>

              {/* Card 2 - Effective Teamwork */}
              <div 
                className="bg-white w-full p-6 md:p-8" 
                id="features-div-5"
              >
                <div className="flex items-center gap-x-3 w-full h-10 mb-8" id="features-div-6">
                  <div className="w-7 h-5">
                    <div className="inline-block w-7 h-5 font-medium">02/</div>
                  </div>
                  <div className="w-16 h-10">
                    <img 
                      src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/646f4d4042d2221571a6079a_Features%20Image2.png" 
                      alt="Teamwork icon"
                      className="inline-block w-16 h-10 max-w-full align-middle overflow-clip" 
                      id="features-img-2" 
                    />
                  </div>
                </div>
                <div className="w-full h-auto">
                  <h3 className="w-full h-auto text-2xl lg:text-2xl font-semibold leading-tight mb-4">
                    {t('features.feature2.title')}
                  </h3>
                  <p className="w-full h-auto text-black/60 leading-relaxed">
                    {t('features.feature2.description')}
                  </p>
                </div>
              </div>

              {/* Card 3 - Quality Always Matters */}
              <div 
                className="bg-white w-full p-6 md:p-8" 
                id="features-div-7"
              >
                <div className="flex items-center gap-x-3 w-full h-10 mb-8" id="features-div-8">
                  <div className="w-7 h-5">
                    <div className="inline-block w-7 h-5 font-medium">03/</div>
                  </div>
                  <div className="w-12 h-10">
                    <img 
                      src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/646f4d40ec2bd2dac74a6b30_Features%20Image3.png" 
                      alt="Quality icon"
                      className="inline-block w-12 h-10 max-w-full align-middle overflow-clip" 
                      id="features-img-3" 
                    />
                  </div>
                </div>
                <div className="w-full h-auto">
                  <h3 className="w-full h-auto text-2xl lg:text-2xl font-semibold leading-tight mb-4">
                    {t('features.feature3.title')}
                  </h3>
                  <p className="w-full h-auto text-black/60 leading-relaxed">
                    {t('features.feature3.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section 
        className="relative w-full overflow-visible bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
        id="about-section"
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 w-full" id="about-div-1">
            {/* Left - Image Gallery */}
            <div className="relative w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px]" id="about-div-2">
              {/* Mobile Image */}
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473592a821a39916e73809b_Hv2%20About%20Us%20Image1.png" 
                alt="About Us"
                className="w-full h-full object-cover md:hidden"
              />
              <img 
                ref={ref1}
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473592a821a39916e73809b_Hv2%20About%20Us%20Image1.png" 
                alt="About Us"
                className="absolute bottom-[10.8rem] right-[13.38rem] w-96 h-[33.25rem] max-w-full overflow-clip z-[1] min-[1920px]:w-96 hidden md:block"
                style={{ 
                  willChange: 'transform',
                  transform: `translateY(${transform1}px)`
                }}
                id="about-img-1" 
              />
              <img 
                ref={ref2}
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473592a4eeb1ff94a516f73_Hv2%20About%20Us%20Image2.png" 
                alt="About Us"
                className="absolute top-[9.4rem] left-[14.38rem] w-96 h-[31.88rem] max-w-full overflow-clip z-[1] hidden md:block"
                style={{ 
                  willChange: 'transform',
                  transform: `translateY(${transform2}px)`
                }}
                id="about-img-2" 
              />
              <img 
                ref={ref3}
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64735a161b9079853db0787e_About%20Us%20Image%20Shape.png" 
                alt="Shape decoration"
                className="absolute top-[-0.85rem] bottom-[2.88rem] left-[6.00rem] right-[1.63rem] w-[32.00rem] h-[45.38rem] max-w-full overflow-clip hidden md:block"
                style={{ 
                  willChange: 'transform',
                  transform: `translateY(${transform3}px)`
                }}
                id="about-img-3" 
              />
            </div>

            {/* Right - Content */}
            <div className="w-full lg:w-1/2" id="about-div-5">
              <div className="w-full max-w-prose lg:max-w-[31.88rem] h-auto mb-5" id="about-div-6">
                <div className="flex items-center gap-x-4 w-full h-5 mb-6" id="about-div-7">
                  <div className="w-16 sm:w-24 h-0.5 bg-orange-600" id="about-div-8"></div>
                  <div className="text-orange-600 text-xl sm:text-xl italic font-bold">{t('about.badge')}</div>
                </div>
                <h2 className="w-full h-auto mt-6 lg:mt-8 mb-3 text-fluid-lg font-bold" id="about-h2-1">
                  {t('about.title')}
                </h2>
                <p className="w-full h-auto leading-7 text-fluid-base" id="about-p-1">
                  {t('about.description')}
                </p>
              </div>

              {/* Statistics */}
              <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 w-full mb-10">
                {/* Projects Completed */}
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-3">
                    <h2 className="text-orange-600 text-5xl sm:text-6xl lg:text-7xl font-bold">300+</h2>
                  </div>
                  <p className="text-gray-700 font-medium text-lg">{t('about.stats.projects')}</p>
                </div>

                {/* Years Experience */}
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-3">
                    <h2 className="text-orange-600 text-5xl sm:text-6xl lg:text-7xl font-bold">10</h2>
                  </div>
                  <p className="text-gray-700 font-medium text-lg">{t('about.stats.experience')}</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="w-full sm:w-auto inline-block">
                <a 
                  href="#about" 
                  className="group relative flex items-center justify-center w-full sm:w-auto sm:min-w-[176px] h-16 py-4 px-6 sm:py-[19px] sm:px-[38px] border-2 border-black text-black text-sm font-semibold uppercase cursor-pointer overflow-hidden transition-all duration-[450ms] hover:bg-black hover:text-white"
                  id="about-a-1"
                >
                  <div className="relative w-full flex items-center justify-center overflow-hidden h-6">
                    <span className="relative whitespace-nowrap transition-all duration-300 group-hover:-translate-y-full block">
                      {t('about.cta')}
                    </span>
                    <span className="absolute whitespace-nowrap translate-y-full transition-all duration-300 group-hover:translate-y-0 block">
                      {t('about.cta')}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative overflow-visible bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32" id="services-section">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-8 lg:gap-0" id="div-1">
            <div className="w-full lg:w-auto" id="div-2">
              <div className="items-center gap-x-4 flex mb-6" id="div-3">
                <div className="bg-orange-600 h-0.5 w-16 sm:w-24" id="div-4"></div>
                <div className="text-orange-600 text-xl sm:text-xl italic font-bold">{t('services.badge')}</div>
              </div>
              <h2 className="text-fluid-lg leading-none font-bold mt-4 lg:mt-7" id="h2-1">{t('services.title')}</h2>
            </div>
            <div className="w-full sm:w-auto">
              <a 
                href="/services" 
                className="group relative flex items-center justify-center w-full sm:w-auto sm:min-w-[200px] h-16 py-4 px-6 sm:py-[19px] sm:px-[38px] bg-primary border-2 border-primary text-white text-sm font-semibold uppercase cursor-pointer overflow-hidden transition-all duration-300 hover:bg-black hover:border-black hover:text-white"
                id="services-a-1"
              >
                <div className="relative w-full flex items-center justify-center overflow-hidden h-6">
                  <span className="relative whitespace-nowrap transition-all duration-300 group-hover:-translate-y-full block">
                    {t('services.cta')}
                  </span>
                  <span className="absolute whitespace-nowrap translate-y-full transition-all duration-300 group-hover:translate-y-0 block">
                    {t('services.cta')}
                  </span>
                  </div>
                </a>
            </div>
          </div>
          <div>
            <div>
              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="div-1">
                {/* Service Card 1 - Full Renovation */}
                <div className="w-full">
                  <div
                    id="div-2"
                    className="group relative w-full border-2 border-zinc-300 overflow-hidden pb-8 px-6 pt-6 bg-white transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col"
                  >
                    {/* Background image (hidden until hover) */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647199e2cff90af9f078ee2c_Services%20Image1.png')",
                      }}
                    />
                    {/* Gradient overlay (appears on hover) */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 55.01%, rgb(0,0,0))",
                      }}
                    />
                    {/* Number Badge - Positioned top-left */}
                    <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-orange-600 text-white text-3xl font-bold z-10">
                      01
                    </div>
                    {/* Content - Aligned to bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-3xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                        {t('services.list.renovation.title')}
                      </h3>
                      <p className="text-black/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {t('services.list.renovation.description')}
                      </p>
                          </div>
                  </div>
                </div>

                {/* Service Card 2 - Resurfacing & Refinishing */}
                <div className="w-full">
                  <div
                    id="div-5"
                    className="group relative w-full border-2 border-zinc-300 overflow-hidden pb-8 px-6 pt-6 bg-white transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647199b8d67da0f056afeb0b_Services%20Image2.png')",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 55.01%, rgb(0,0,0))",
                      }}
                    />
                    {/* Number Badge - Positioned top-left */}
                    <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-orange-600 text-white text-3xl font-bold z-10">
                      02
                    </div>
                    {/* Content - Aligned to bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-3xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                        {t('services.list.resurfacing.title')}
                      </h3>
                      <p className="text-black/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {t('services.list.resurfacing.description')}
                      </p>
                          </div>
                  </div>
                </div>

                {/* Service Card 3 - Interior & Exterior Painting */}
                <div className="w-full">
                  <div
                    id="service-card-3"
                    className="group relative w-full border-2 border-zinc-300 overflow-hidden pb-8 px-6 pt-6 bg-white transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/64719998cff90af9f078c56e_Services%20Image3.png')",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 55.01%, rgb(0,0,0))",
                      }}
                    />
                    {/* Number Badge - Positioned top-left */}
                    <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-orange-600 text-white text-3xl font-bold z-10">
                      03
                    </div>
                    {/* Content - Aligned to bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-3xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                        {t('services.list.painting.title')}
                      </h3>
                      <p className="text-black/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {t('services.list.painting.description')}
                      </p>
                          </div>
                  </div>
                </div>

                {/* Service Card 4 - Mold Remediation */}
                <div className="w-full">
                  <div
                    id="div-11"
                    className="group relative w-full border-2 border-zinc-300 overflow-hidden pb-8 px-6 pt-6 bg-white transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647199734d2274576971fab2_Services%20Image4.png')",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 55.01%, rgb(0,0,0))",
                      }}
                    />
                    {/* Number Badge - Positioned top-left */}
                    <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-orange-600 text-white text-3xl font-bold z-10">
                      04
                    </div>
                    {/* Content - Aligned to bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-3xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                        {t('services.list.mold.title')}
                      </h3>
                      <p className="text-black/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {t('services.list.mold.description')}
                      </p>
                          </div>
                  </div>
                </div>

                {/* Service Card 5 - Fire Damage Renovation */}
                      <div className="w-full">
                  <div
                    id="div-14"
                    className="group relative w-full border-2 border-zinc-300 overflow-hidden pb-8 px-6 pt-6 bg-white transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647198395f4bcd52c76aaf43_Services%20Image5.png')",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 55.01%, rgb(0,0,0))",
                      }}
                    />
                    {/* Number Badge - Positioned top-left */}
                    <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-orange-600 text-white text-3xl font-bold z-10">
                      05
                    </div>
                    {/* Content - Aligned to bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-3xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                        {t('services.list.fire.title')}
                      </h3>
                      <p className="text-black/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {t('services.list.fire.description')}
                      </p>
                          </div>
                  </div>
                </div>

                {/* Service Card 6 - Bathroom Remodeling */}
                <div className="w-full">
                  <div
                    id="div-17"
                    className="group relative w-full border-2 border-zinc-300 overflow-hidden pb-8 px-6 pt-6 bg-white transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647198089f823085580e5686_Services%20Image6.png')",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 55.01%, rgb(0,0,0))",
                      }}
                    />
                    {/* Number Badge - Positioned top-left */}
                    <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-orange-600 text-white text-3xl font-bold z-10">
                      06
                    </div>
                    {/* Content - Aligned to bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-3xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                        {t('services.list.bathroom.title')}
                      </h3>
                      <p className="text-black/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {t('services.list.bathroom.description')}
                      </p>
                          </div>
                      </div>
                    </div>

                {/* Service Card 7 - Deck Renovation */}
                <div className="w-full">
                  <div
                    className="group relative w-full border-2 border-zinc-300 overflow-hidden pb-8 px-6 pt-6 bg-white transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647199e2cff90af9f078ee2c_Services%20Image1.png')",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 55.01%, rgb(0,0,0))",
                      }}
                    />
                    {/* Number Badge - Positioned top-left */}
                    <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-orange-600 text-white text-3xl font-bold z-10">
                      07
                  </div>
                    {/* Content - Aligned to bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-3xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                        {t('services.list.deck.title')}
                      </h3>
                      <p className="text-black/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {t('services.list.deck.description')}
                      </p>
                </div>
              </div>
            </div>

                {/* Service Card 8 - Pressure Washing */}
                      <div className="w-full">
                  <div
                    className="group relative w-full border-2 border-zinc-300 overflow-hidden pb-8 px-6 pt-6 bg-white transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647199b8d67da0f056afeb0b_Services%20Image2.png')",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 55.01%, rgb(0,0,0))",
                      }}
                    />
                    {/* Number Badge - Positioned top-left */}
                    <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-orange-600 text-white text-3xl font-bold z-10">
                      08
          </div>
                    {/* Content - Aligned to bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-3xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                        {t('services.list.pressure.title')}
                      </h3>
                      <p className="text-black/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {t('services.list.pressure.description')}
                      </p>
        </div>
                </div>
                    </div>

                {/* Service Card 9 - Custom Cabinet Creation */}
                <div className="w-full">
                  <div
                    className="group relative w-full border-2 border-zinc-300 overflow-hidden pb-8 px-6 pt-6 bg-white transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/64719998cff90af9f078c56e_Services%20Image3.png')",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 55.01%, rgb(0,0,0))",
                      }}
                    />
                    {/* Number Badge - Positioned top-left */}
                    <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-orange-600 text-white text-3xl font-bold z-10">
                      09
                    </div>
                    {/* Content - Aligned to bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-3xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                        {t('services.list.cabinet.title')}
                      </h3>
                      <p className="text-black/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {t('services.list.cabinet.description')}
                      </p>
                </div>
              </div>
            </div>

                {/* Service Card 10 - Cabinet Painting */}
                <div className="w-full">
                  <div
                    className="group relative w-full border-2 border-zinc-300 overflow-hidden pb-8 px-6 pt-6 bg-white transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647199734d2274576971fab2_Services%20Image4.png')",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 55.01%, rgb(0,0,0))",
                      }}
                    />
                    {/* Number Badge - Positioned top-left */}
                    <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-orange-600 text-white text-3xl font-bold z-10">
                      10
                      </div>
                    {/* Content - Aligned to bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-3xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                        {t('services.list.cabinetPaint.title')}
                      </h3>
                      <p className="text-black/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {t('services.list.cabinetPaint.description')}
                      </p>
                      </div>
                    </div>
                  </div>

                {/* Service Card 11 - Wallpaper Install & Removal */}
                      <div className="w-full">
                  <div
                    className="group relative w-full border-2 border-zinc-300 overflow-hidden pb-8 px-6 pt-6 bg-white transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647198395f4bcd52c76aaf43_Services%20Image5.png')",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 55.01%, rgb(0,0,0))",
                      }}
                    />
                    {/* Number Badge - Positioned top-left */}
                    <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-orange-600 text-white text-3xl font-bold z-10">
                      11
                      </div>
                    {/* Content - Aligned to bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-3xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                        {t('services.list.wallpaper.title')}
                      </h3>
                      <p className="text-black/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {t('services.list.wallpaper.description')}
                      </p>
                      </div>
                    </div>
                  </div>

                {/* Service Card 12 - Commercial Projects */}
                <div className="w-full">
                  <div
                    className="group relative w-full border-2 border-zinc-300 overflow-hidden pb-8 px-6 pt-6 bg-white transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        backgroundImage: "url('https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647198089f823085580e5686_Services%20Image6.png')",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: "linear-gradient(rgba(0,0,0,0) 12%, rgba(0,0,0,0.89) 55.01%, rgb(0,0,0))",
                      }}
                    />
                    {/* Number Badge - Positioned top-left */}
                    <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center bg-orange-600 text-white text-3xl font-bold z-10">
                      12
                      </div>
                    {/* Content - Aligned to bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end">
                      <h3 className="text-3xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
                        {t('services.list.commercial.title')}
                      </h3>
                      <p className="text-black/60 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                        {t('services.list.commercial.description')}
                      </p>
                      </div>
                    </div>
                    </div>
                  </div>
                      </div>
                      </div>
                    </div>
      </section>

      {/* Number Talks Section */}
      <section 
        className="bg-[url('https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6474705a0cfc7c59037c45f6_Number%20Talks%20Bg.png')] bg-no-repeat bg-cover bg-center relative w-full overflow-visible py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32" 
        id="section-1"
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12" id="div-1">
            <div className="w-full lg:w-1/2" id="div-2">
              <div className="w-full">
                <div className="flex items-center gap-x-4 mb-6" id="div-3">
                  <div className="bg-orange-600 h-0.5 w-16 sm:w-24" id="div-4"></div>
                  <div className="text-orange-600 text-lg sm:text-xl italic font-bold whitespace-nowrap">{t('numberTalks.badge')}</div>
                </div>
                <h2 className="text-white text-fluid-lg font-bold mb-6" id="h2-1">
                  {t('numberTalks.title')}
                </h2>
                <p className="text-white/80 leading-7 mb-8 text-fluid-base" id="p-1">
                  {t('numberTalks.description')}
                </p>
                <div className="inline-block">
                  <a 
                    href="/contact" 
                    className="items-center text-white cursor-pointer flex-col font-semibold h-16 justify-center py-5 px-10 relative min-w-[200px] w-auto flex border-2 border-white/30 border-solid overflow-hidden" 
                    id="a-1"
                  >
                    <div className="items-center h-5 justify-center relative w-full flex overflow-hidden">
                      <div className="h-5 relative whitespace-nowrap">{t('numberTalks.cta')}</div>
                      <div className="h-5 absolute whitespace-nowrap">{t('numberTalks.cta')}</div>
                  </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2" id="div-5">
              {/* Espaço vazio - grid removido */}
            </div>
          </div>
        </div>
        <img 
          src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6475eb82854f05ea66083715_Number%20Talks%20Section%20Shape2.png" 
          className="bottom-[-0.13rem] h-16 max-w-full absolute right-[90.50rem] top-[45.50rem] align-middle w-96 inline-block overflow-clip" 
          id="img-1" 
        />
        <img 
          src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6475eaeb86e51dd65fe0599b_Number%20Talks%20Section%20Shape1.png" 
          className="h-20 max-w-full absolute right-[106.75rem] top-[45.00rem] align-middle w-52 z-[1] inline-block overflow-clip" 
          id="img-2" 
        />
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* Before/After Section */}
      <BeforeAfterSection />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;
