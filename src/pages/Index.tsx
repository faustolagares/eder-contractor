import { useEffect } from "react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";
import './hero.css';
import './number-talks.css';

const Index = () => {
  const { t } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
    <Header />
    <section
      className="relative w-full min-h-screen lg:h-[60.13rem] overflow-hidden bg-white bg-cover bg-no-repeat bg-center pt-20 sm:pt-24 lg:pt-32"
      style={{ backgroundImage: "url('https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473383e6d3931efc97be3a8_Banner%20Bg%20Hv2.png')" }}
      id="section-1"
    >
      <div className="min-h-[48.25rem] w-full max-w-7xl px-4 m-auto">
        <div className="flex flex-col lg:flex-row justify-between w-full min-h-[48.25rem] gap-8 lg:gap-0" id="div-1">
          {/* Left Content */}
          <div 
            className="w-full lg:w-[71%] min-[1920px]:w-[42.81rem] min-h-[48.25rem] overflow-hidden flex flex-col justify-center" 
            id="div-2"
          >
            <div className="w-full max-w-2xl lg:max-w-[40.13rem] pt-8 lg:pt-16" id="div-3">
              <div className="flex items-center gap-x-4 w-full h-5 mb-6" id="div-4">
                <div className="w-16 sm:w-24 h-0.5 bg-primary" id="div-5"></div>
                <div className="text-primary text-lg sm:text-xl font-bold italic">{t('hero.badge')}</div>
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
                    className="group relative flex items-center justify-center w-full sm:w-auto sm:min-w-[176px] h-16 py-4 px-6 sm:py-[19px] sm:px-[38px] bg-primary border-2 border-primary text-black text-sm font-semibold uppercase cursor-pointer overflow-hidden"
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
            className="w-full lg:w-3/4 min-[1920px]:w-[45.13rem] min-[1920px]:-mr-28 min-h-[48.25rem] flex items-center justify-center lg:justify-end" 
            id="div-7"
          >
            <div className="relative w-full max-w-lg lg:max-w-none h-[48.25rem]">
              <div 
                className="hidden lg:block absolute top-[-8.13rem] bottom-[-8.13rem] left-[60.50rem] right-[9.75rem] w-[35%] min-[1920px]:w-[32.19rem] min-[1920px]:right-[17.06rem] h-[79.75rem] bg-primary/30 -z-10"
                id="div-9"
              ></div>
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473477da8934fab32a6c309_Hero%20Image.png" 
                srcSet="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473477da8934fab32a6c309_Hero%20Image-p-500.png 500w, https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473477da8934fab32a6c309_Hero%20Image.png 722w"
                alt="Construction hero"
                className="absolute bottom-0 w-full h-[48.25rem] overflow-clip object-cover"
              />
              
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64734822033acf2e5696c183_Hero%20Image%20Shape1.png" 
                alt="Shape decoration"
                className="hidden lg:block absolute top-[2.75rem] bottom-[1.00rem] left-[10.25rem] w-[76%] min-[1920px]:w-[32.25rem] min-[1920px]:right-[-2.81rem] h-[44.63rem] max-w-full overflow-clip z-[10]"
                id="img-1"
              />
              
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64734822821a39916e686b22_Hero%20Image%20Shape2.png" 
                alt="Shape decoration"
                className="hidden lg:block absolute top-[4.88rem] bottom-[-7.00rem] left-[8.00rem] right-[8.63rem] w-[61%] min-[1920px]:w-96 h-[50.50rem] max-w-full overflow-clip z-[1]"
                id="img-2"
              />
              
              <div 
                className="absolute top-[20.63rem] bottom-[16.88rem] right-[31.75rem] w-32 h-32 lg:w-44 lg:h-44 flex items-center justify-center rounded-full z-[3]"
                id="div-8"
              >
                <img 
                  src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473545f75f136c55e4f381f_Hero%20Circel%20Image.png" 
                  alt="Circle decoration"
                  className="w-24 h-24 lg:w-32 lg:h-32 max-w-full overflow-clip"
                  id="img-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

      {/* Features Section */}
      <section 
        className="relative w-full h-auto overflow-visible bg-stone-50 pt-12 pb-20"
        id="features-section"
      >
        <div className="h-auto w-full max-w-7xl px-4 m-auto">
          <div className="relative w-full h-auto -mt-16 min-[1920px]:-mt-24" id="features-div-1">
            <div 
              className="grid auto-cols-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[auto] gap-4 w-full h-auto" 
              id="features-div-2"
            >
              {/* Card 1 - Best House Renovation */}
              <div 
                className="bg-white w-full h-auto p-6 col-span-1 row-span-1 min-[1920px]:pt-8 min-[1920px]:pr-9 min-[1920px]:pb-8 min-[1920px]:pl-9" 
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
                  <h3 className="w-full h-auto text-xl lg:text-2xl font-semibold leading-tight mb-4">
                    {t('features.feature1.title')}
                  </h3>
                  <p className="w-full h-auto text-black/60 leading-relaxed">
                    {t('features.feature1.description')}
                  </p>
                </div>
              </div>

              {/* Card 2 - Effective Teamwork */}
              <div 
                className="bg-white w-full h-auto p-6 col-span-1 row-span-1 min-[1920px]:pt-8 min-[1920px]:pr-9 min-[1920px]:pb-8 min-[1920px]:pl-9" 
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
                  <h3 className="w-full h-auto text-xl lg:text-2xl font-semibold leading-tight mb-4">
                    {t('features.feature2.title')}
                  </h3>
                  <p className="w-full h-auto text-black/60 leading-relaxed">
                    {t('features.feature2.description')}
                  </p>
                </div>
              </div>

              {/* Card 3 - Quality Always Matters */}
              <div 
                className="bg-white w-full h-auto p-6 col-span-1 row-span-1 min-[1920px]:pt-8 min-[1920px]:pr-9 min-[1920px]:pb-8 min-[1920px]:pl-9" 
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
                  <h3 className="w-full h-auto text-xl lg:text-2xl font-semibold leading-tight mb-4">
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
        className="relative w-full h-auto overflow-visible bg-white py-20 lg:py-40"
        id="about-section"
      >
        <div className="h-auto w-full max-w-7xl px-4 m-auto">
          <div className="flex flex-col lg:flex-row items-center gap-x-10 w-full h-auto" id="about-div-1">
            {/* Left - Image Gallery */}
            <div className="relative w-full lg:w-[65%] min-[1920px]:w-[39.38rem] min-[1920px]:h-[48.44rem] h-[48.50rem] mb-8 lg:mb-0" id="about-div-2">
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473592a821a39916e73809b_Hv2%20About%20Us%20Image1.png" 
                alt="About Us"
                className="absolute bottom-[15.25rem] right-[22.13rem] w-96 h-[33.25rem] max-w-full overflow-clip z-[1] min-[1920px]:w-96 hidden md:block"
                style={{ willChange: 'transform' }}
                id="about-img-1" 
              />
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473592a4eeb1ff94a516f73_Hv2%20About%20Us%20Image2.png" 
                alt="About Us"
                className="absolute top-[16.63rem] left-[23.13rem] w-96 h-[31.88rem] max-w-full overflow-clip z-[1] hidden md:block"
                style={{ willChange: 'transform' }}
                id="about-img-2" 
              />
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64735a161b9079853db0787e_About%20Us%20Image%20Shape.png" 
                alt="Shape decoration"
                className="absolute top-[0.38rem] bottom-[2.88rem] left-[14.75rem] right-[1.63rem] w-[32.00rem] h-[45.38rem] max-w-full overflow-clip hidden md:block"
                style={{ willChange: 'transform' }}
                id="about-img-3" 
              />
              
              <div 
                className="absolute top-[16.13rem] bottom-[29.13rem] left-[16.25rem] right-[21.25rem] w-44 h-12 py-4 px-8 z-[1] hidden md:block" 
                id="about-div-3"
              >
                <div className="w-28 h-5 text-2xl font-semibold">Since 1995</div>
              </div>
              
              <div 
                className="absolute top-[-1.13rem] bottom-[43.38rem] left-[43.25rem] right-[-1.25rem] w-24 h-24 items-center justify-center rounded-full z-[1] min-[1920px]:w-48 min-[1920px]:h-48 min-[1920px]:top-[-1.13rem] min-[1920px]:right-[-2.81rem] hidden md:block" 
                style={{ willChange: 'transform' }}
                id="about-div-4"
              >
                <img 
                  src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/646f61b01e3793b7399b7d8c_About%20Us%20Circel%20Image.png" 
                  alt="Circular decoration"
                  className="w-20 h-20 max-w-full overflow-clip min-[1920px]:w-36"
                  id="about-img-4" 
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="w-full lg:w-[43%] min-[1920px]:w-[35.63rem] h-auto" id="about-div-5">
              <div className="w-full max-w-prose lg:max-w-[31.88rem] h-auto mb-5" id="about-div-6">
                <div className="flex items-center gap-x-4 w-full h-5 mb-6" id="about-div-7">
                  <div className="w-16 sm:w-24 h-0.5 bg-orange-600" id="about-div-8"></div>
                  <div className="text-orange-600 text-lg sm:text-xl italic font-bold">{t('about.badge')}</div>
                </div>
                <h2 className="w-full h-auto mt-6 lg:mt-8 mb-3 text-fluid-lg font-bold" id="about-h2-1">
                  {t('about.title')}
                </h2>
                <p className="w-full h-auto leading-7 text-fluid-base" id="about-p-1">
                  {t('about.description')}
                </p>
              </div>

              {/* Statistics */}
              <div className="flex flex-col sm:flex-row items-center gap-x-[3.13rem] w-full max-w-[31.88rem] h-auto mb-10" id="about-div-9">
                <div className="w-full sm:w-48 h-auto mb-6 sm:mb-0">
                  <div className="flex items-center justify-center sm:justify-start w-full h-20 overflow-hidden" id="about-div-10">
                    <div className="w-12 h-[58.50rem]" style={{ overflow: 'visible' }}>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">2</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">6</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">7</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">8</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">3</h2>
                    </div>
                    <div className="w-12 h-[58.50rem]" style={{ overflow: 'visible' }}>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">1</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">1</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">9</h2>
                    </div>
                    <div className="w-12 h-[58.50rem]" style={{ overflow: 'visible' }}>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">2</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">6</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">7</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">8</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">5</h2>
                    </div>
                    <div className="w-12 h-24 pt-1.5 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold flex items-center justify-center">+</div>
                  </div>
                  <div className="w-full h-5 mt-3">
                    <div className="w-full h-5 font-medium text-center sm:text-left">{t('about.stats.projects')}</div>
                  </div>
                </div>

                <div className="w-full sm:w-36 h-auto">
                  <div className="flex items-center justify-center sm:justify-start w-full h-20 overflow-hidden" id="about-div-11">
                    <div className="w-12 h-[58.50rem]" style={{ overflow: 'visible' }}>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">2</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">2</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">6</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">7</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">8</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">2</h2>
                    </div>
                    <div className="w-12 h-[58.50rem]" style={{ overflow: 'visible' }}>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">1</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">1</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">9</h2>
                    </div>
                    <div className="w-12 h-[58.50rem]" style={{ overflow: 'visible' }}>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">2</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">6</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">7</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">8</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-4xl sm:text-5xl lg:text-[4.75rem] leading-none font-bold">0</h2>
                    </div>
                  </div>
                  <div className="w-full h-5 mt-3">
                    <div className="w-full h-5 font-medium text-center sm:text-left">{t('about.stats.experience')}</div>
                  </div>
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
      <section style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="box-border text-black/[0.8] text-lg leading-5 pb-20 lg:pb-40 bg-white" id="services-section">
        <div className="w-full max-w-7xl px-4 m-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-8 lg:gap-0" id="div-1">
            <div className="w-full lg:w-auto" id="div-2">
              <div className="items-center gap-x-4 flex mb-6" id="div-3">
                <div className="bg-orange-600 h-0.5 w-16 sm:w-24" id="div-4"></div>
                <div className="text-orange-600 text-lg sm:text-xl italic font-bold">{t('services.badge')}</div>
              </div>
              <h2 className="text-fluid-lg leading-none font-bold mt-4 lg:mt-7" id="h2-1">{t('services.title')}</h2>
            </div>
            <div className="w-full sm:w-auto">
              <a 
                href="/services" 
                className="group relative flex items-center justify-center w-full sm:w-auto sm:min-w-[200px] h-16 py-4 px-6 sm:py-[19px] sm:px-[38px] bg-primary border-2 border-primary text-black text-sm font-semibold uppercase cursor-pointer overflow-hidden transition-all duration-300 hover:bg-black hover:border-black hover:text-white"
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
              <div className="auto-cols-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[auto] gap-6 grid bg-white" id="div-1">
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
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
                    id="div-8"
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
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
                      <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-white transition-colors duration-300 mb-4">
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
        className="bg-[url('https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6474705a0cfc7c59037c45f6_Number%20Talks%20Bg.png')] bg-no-repeat bg-cover bg-center box-border text-black/80 text-lg min-h-[49.63rem] leading-5 py-40 relative w-full bg-white overflow-visible" 
        id="section-1"
      >
        <div className="h-auto px-4 w-[84.38rem] m-auto">
          <div className="items-center h-auto justify-between w-[82.50rem] flex gap-5" id="div-1">
            <div className="h-auto w-[47%] min-[1920px]:w-[38.75rem]" id="div-2">
              <div className="h-auto w-[38.75rem]">
                <div className="items-center gap-x-4 h-auto w-[38.75rem] flex mb-4" id="div-3">
                  <div className="bg-orange-600 h-0.5 w-24" id="div-4"></div>
                  <div className="text-orange-600 text-xl italic font-bold whitespace-nowrap">{t('numberTalks.badge')}</div>
                    </div>
                <h2 className="text-white text-[4.75rem] leading-[1.1] font-bold mb-4 w-[38.75rem]" id="h2-1">
                  {t('numberTalks.title')}
                </h2>
                <p className="text-white/80 leading-7 mb-8 w-[30.63rem]" id="p-1">
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
            <div className="h-auto w-[46%] min-[1920px]:w-[38.13rem]" id="div-5">
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

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;
