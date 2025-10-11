import './hero.css';

const Index = () => {
  return (
    <>
    <section
      className="relative w-full h-[60.13rem] overflow-hidden bg-white bg-cover bg-no-repeat bg-center pt-48"
      style={{ backgroundImage: "url('https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473383e6d3931efc97be3a8_Banner%20Bg%20Hv2.png')" }}
      id="section-1"
    >
      <div className="h-[48.25rem] w-[84.38rem] px-4 m-auto">
        <div className="flex justify-between w-[82.50rem] h-[48.25rem]" id="div-1">
          {/* Left Content */}
          <div 
            className="w-[71%] min-[1920px]:w-[42.81rem] h-[48.25rem] overflow-hidden" 
            id="div-2"
          >
            <div className="w-[40.13rem] h-96 pt-16" id="div-3">
              <div className="flex items-center gap-x-4 w-[40.13rem] h-5" id="div-4">
                <div className="w-24 h-0.5 bg-primary" id="div-5"></div>
                <div className="w-52 h-5 text-primary text-xl font-bold italic">Construction Template</div>
              </div>
              
              <h2 
                className="w-[40.13rem] h-36 mt-9 mb-7 text-white text-[4.13rem] leading-[4.75rem] font-bold"
                id="h2-1"
              >
                We Take Your Dream Home &amp; Make It Real
              </h2>
              
              <p 
                className="w-[37.25rem] h-14 mb-10 text-white/70 leading-7"
                id="p-1"
              >
                Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias amet
              </p>
              
              <div className="flex gap-x-[0.63rem] w-[40.13rem] h-16" id="div-6">
                <div className="w-44 h-16 inline-block">
                  <a 
                    href="#contact" 
                    className="group relative flex flex-col items-center justify-center w-44 h-16 py-[19px] px-[38px] bg-primary border border-primary text-black text-sm font-semibold uppercase cursor-pointer overflow-hidden"
                    id="a-1"
                  >
                    <div className="relative flex items-center justify-center h-5 overflow-hidden">
                      <div className="relative h-5 transition-all duration-300 group-hover:-translate-y-full">Contact Us</div>
                      <div className="absolute h-5 left-0 translate-y-full transition-all duration-300 group-hover:translate-y-0">Contact Us</div>
                    </div>
                  </a>
                </div>
                
                <div className="w-44 h-16 inline-block">
                  <a 
                    href="#about" 
                    className="group relative flex flex-col items-center justify-center w-44 h-16 py-[19px] px-[38px] text-white border border-white/30 text-sm font-semibold uppercase cursor-pointer overflow-hidden transition-all duration-[450ms] hover:border-primary"
                    id="a-2"
                  >
                    <div className="relative flex items-center justify-center h-5 overflow-hidden">
                      <div className="relative h-5 transition-all duration-300 group-hover:-translate-y-full">Learn More</div>
                      <div className="absolute h-5 left-0 translate-y-full transition-all duration-300 group-hover:translate-y-0">Learn More</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div 
            className="w-3/4 min-[1920px]:w-[45.13rem] min-[1920px]:-mr-28 h-[48.25rem]" 
            id="div-7"
          >
            <div className="relative w-full h-[48.25rem]">
              <div 
                className="absolute top-[-8.13rem] bottom-[-8.13rem] left-[60.50rem] right-[9.75rem] w-[35%] min-[1920px]:w-[32.19rem] min-[1920px]:right-[17.06rem] h-[79.75rem] bg-primary/30 -z-10"
                id="div-9"
              ></div>
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473477da8934fab32a6c309_Hero%20Image.png" 
                srcSet="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473477da8934fab32a6c309_Hero%20Image-p-500.png 500w, https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473477da8934fab32a6c309_Hero%20Image.png 722w"
                alt="Construction hero"
                className="relative inline-block w-full h-[48.25rem] align-middle overflow-clip"
              />
              
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64734822033acf2e5696c183_Hero%20Image%20Shape1.png" 
                alt="Shape decoration"
                className="absolute top-[2.75rem] bottom-[1.00rem] left-[10.25rem] w-[76%] min-[1920px]:w-[32.25rem] min-[1920px]:right-[-2.81rem] h-[44.63rem] max-w-full align-middle inline-block overflow-clip z-[10]"
                id="img-1"
              />
              
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64734822821a39916e686b22_Hero%20Image%20Shape2.png" 
                alt="Shape decoration"
                className="absolute top-[4.88rem] bottom-[-7.00rem] left-[8.00rem] right-[8.63rem] w-[61%] min-[1920px]:w-96 h-[50.50rem] max-w-full align-middle inline-block overflow-clip z-[1]"
                id="img-2"
              />
              
              <div 
                className="absolute top-[20.63rem] bottom-[16.88rem] right-[31.75rem] w-44 h-44 flex items-center justify-center rounded-full z-[3]"
                id="div-8"
              >
                <img 
                  src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473545f75f136c55e4f381f_Hero%20Circel%20Image.png" 
                  alt="Circle decoration"
                  className="inline-block w-32 h-32 max-w-full align-middle overflow-clip"
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
        className="relative w-full h-80 overflow-visible bg-stone-50 pt-12 pb-20"
        id="features-section"
      >
        <div className="h-60 w-[84.38rem] px-4 m-auto">
          <div className="relative w-[82.50rem] h-60 -mt-16 min-[1920px]:-mt-24" id="features-div-1">
            <div 
              className="grid auto-cols-fr grid-cols-[1fr_1fr_1fr] grid-rows-[auto] gap-4 w-[82.50rem] h-60" 
              id="features-div-2"
            >
              {/* Card 1 - Best House Renovation */}
              <div 
                className="bg-white w-96 h-60 p-6 col-span-1 row-span-1 min-[1920px]:pt-8 min-[1920px]:pr-9 min-[1920px]:pb-8 min-[1920px]:pl-9" 
                id="features-div-3"
              >
                <div className="flex items-center gap-x-3 w-96 h-9 mb-8" id="features-div-4">
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
                <div className="w-96 h-32">
                  <h3 className="w-96 h-9 text-2xl font-semibold leading-[2.13rem] mb-4">
                    Best House Renovation
                  </h3>
                  <p className="w-96 h-20 text-black/60 leading-[1.63rem]">
                    Constructor explains how you can enjoy high end flooring trends like textured wood and realistic stones with new laminate flooring.
                  </p>
                </div>
              </div>

              {/* Card 2 - Effective Teamwork */}
              <div 
                className="bg-white w-96 h-60 p-6 col-span-1 row-span-1 min-[1920px]:pt-8 min-[1920px]:pr-9 min-[1920px]:pb-8 min-[1920px]:pl-9" 
                id="features-div-5"
              >
                <div className="flex items-center gap-x-3 w-96 h-10 mb-8" id="features-div-6">
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
                <div className="w-96 h-32">
                  <h3 className="w-96 h-9 text-2xl font-semibold leading-[2.13rem] mb-4">
                    Effective Teamwork
                  </h3>
                  <p className="w-96 h-20 text-black/60 leading-[1.63rem]">
                    As the general contractor, we first create the highest level of trust and integrity with our clients. We value the success of your project.
                  </p>
                </div>
              </div>

              {/* Card 3 - Quality Always Matters */}
              <div 
                className="bg-white w-96 h-60 p-6 col-span-1 row-span-1 min-[1920px]:pt-8 min-[1920px]:pr-9 min-[1920px]:pb-8 min-[1920px]:pl-9" 
                id="features-div-7"
              >
                <div className="flex items-center gap-x-3 w-96 h-10 mb-8" id="features-div-8">
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
                <div className="w-96 h-32">
                  <h3 className="w-96 h-9 text-2xl font-semibold leading-[2.13rem] mb-4">
                    Quality Always Matters
                  </h3>
                  <p className="w-96 h-20 text-black/60 leading-[1.63rem]">
                    Constructor explains how you can enjoy high end flooring trends like textured wood and realistic stones with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section 
        className="relative w-full h-[68.50rem] overflow-visible bg-white py-40"
        id="about-section"
      >
        <div className="h-[48.50rem] w-[84.38rem] px-4 m-auto">
          <div className="flex items-center gap-x-10 w-[82.50rem] h-[48.50rem]" id="about-div-1">
            {/* Left - Image Gallery */}
            <div className="relative w-[65%] min-[1920px]:w-[39.38rem] min-[1920px]:h-[48.44rem] h-[48.50rem]" id="about-div-2">
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473592a821a39916e73809b_Hv2%20About%20Us%20Image1.png" 
                alt="About Us"
                className="absolute bottom-[15.25rem] right-[22.13rem] w-96 h-[33.25rem] max-w-full align-middle inline-block overflow-clip z-[1] min-[1920px]:w-96"
                style={{ willChange: 'transform' }}
                id="about-img-1" 
              />
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6473592a4eeb1ff94a516f73_Hv2%20About%20Us%20Image2.png" 
                alt="About Us"
                className="absolute top-[16.63rem] left-[23.13rem] w-96 h-[31.88rem] max-w-full align-middle inline-block overflow-clip z-[1]"
                style={{ willChange: 'transform' }}
                id="about-img-2" 
              />
              <img 
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64735a161b9079853db0787e_About%20Us%20Image%20Shape.png" 
                alt="Shape decoration"
                className="absolute top-[0.38rem] bottom-[2.88rem] left-[14.75rem] right-[1.63rem] w-[32.00rem] h-[45.38rem] max-w-full align-middle inline-block overflow-clip"
                style={{ willChange: 'transform' }}
                id="about-img-3" 
              />
              
              <div 
                className="absolute top-[16.13rem] bottom-[29.13rem] left-[16.25rem] right-[21.25rem] w-44 h-12 py-4 px-8 z-[1] inline-block" 
                id="about-div-3"
              >
                <div className="w-28 h-5 text-2xl font-semibold">Since 1995</div>
              </div>
              
              <div 
                className="absolute top-[-1.13rem] bottom-[43.38rem] left-[43.25rem] right-[-1.25rem] w-24 h-24 flex items-center justify-center rounded-full z-[1] min-[1920px]:w-48 min-[1920px]:h-48 min-[1920px]:top-[-1.13rem] min-[1920px]:right-[-2.81rem]" 
                style={{ willChange: 'transform' }}
                id="about-div-4"
              >
                <img 
                  src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/646f61b01e3793b7399b7d8c_About%20Us%20Circel%20Image.png" 
                  alt="Circular decoration"
                  className="w-20 h-20 max-w-full align-middle inline-block overflow-clip min-[1920px]:w-36"
                  id="about-img-4" 
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="w-[43%] min-[1920px]:w-[35.63rem] h-[37.13rem]" id="about-div-5">
              <div className="w-[31.88rem] h-96 mb-5" id="about-div-6">
                <div className="flex items-center gap-x-4 w-[31.88rem] h-5" id="about-div-7">
                  <div className="w-24 h-0.5 bg-orange-600" id="about-div-8"></div>
                  <div className="w-20 h-5 text-orange-600 text-xl italic font-bold">About Us</div>
                </div>
                <h2 className="w-[31.88rem] h-52 mt-8 mb-3 text-6xl font-bold leading-[4.38rem]" id="about-h2-1">
                  Making your vision come true at the basics.
                </h2>
                <p className="w-[30.63rem] h-20 leading-7" id="about-p-1">
                  We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies. Our portfolio includes dozen
                </p>
              </div>

              {/* Statistics */}
              <div className="flex items-center gap-x-[3.13rem] w-[31.88rem] h-28 mb-10" id="about-div-9">
                <div className="w-48 h-28">
                  <div className="flex items-center justify-start w-48 h-20 overflow-hidden" id="about-div-10">
                    <div className="w-12 h-[58.50rem]" style={{ overflow: 'visible' }}>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">2</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">6</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">7</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">8</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">3</h2>
                    </div>
                    <div className="w-12 h-[58.50rem]" style={{ overflow: 'visible' }}>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">1</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">1</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">9</h2>
                    </div>
                    <div className="w-12 h-[58.50rem]" style={{ overflow: 'visible' }}>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">2</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">6</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">7</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">8</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">5</h2>
                    </div>
                    <div className="w-12 h-24 pt-1.5 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem] flex items-center justify-center">+</div>
                  </div>
                  <div className="w-48 h-5 mt-3">
                    <div className="w-48 h-5 font-medium">Projects Completed</div>
                  </div>
                </div>

                <div className="w-36 h-28">
                  <div className="flex items-center justify-start w-36 h-20 overflow-hidden" id="about-div-11">
                    <div className="w-12 h-[58.50rem]" style={{ overflow: 'visible' }}>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">2</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">2</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">5</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">6</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">7</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">8</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">2</h2>
                    </div>
                    <div className="w-12 h-[58.50rem]" style={{ overflow: 'visible' }}>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">1</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">1</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">9</h2>
                    </div>
                    <div className="w-12 h-[58.50rem]" style={{ overflow: 'visible' }}>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">2</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">3</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">4</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">6</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">7</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">8</h2>
                      <h2 className="relative w-12 h-20 text-orange-600 text-[4.75rem] leading-none font-bold leading-[5.38rem]">0</h2>
                    </div>
                  </div>
                  <div className="w-36 h-5 mt-3">
                    <div className="w-36 h-5 font-medium">Satisfied Clients</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="w-48 h-16 inline-block">
                <a 
                  href="#about" 
                  className="relative inline-block w-48 h-16 py-5 px-10 font-semibold border-2 border-black border-solid overflow-hidden cursor-pointer"
                  id="about-a-1"
                >
                  <div className="relative flex items-center justify-center w-32 h-5 overflow-hidden">
                    <div className="relative w-32 h-5" style={{ overflow: 'visible' }}>More About Us</div>
                    <div className="absolute w-32 h-5" style={{ overflow: 'visible' }}>More About Us</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="box-border text-black/[0.8] text-lg leading-5 pb-40 bg-white" id="services-section">
        <div className="px-4 m-auto">
          <div className="items-center justify-between mb-16 flex" id="div-1">
            <div id="div-2">
              <div className="items-center gap-x-4 flex" id="div-3">
                <div className="bg-orange-600 h-0.5 w-24" id="div-4"></div>
                <div className="text-orange-600 text-xl italic font-bold">Our Services</div>
              </div>
              <h2 className="text-[4.75rem] leading-none font-bold leading-[5.38rem] mt-7" id="h2-1">We Offer a Wide Range Of Service</h2>
            </div>
            <div className="h-16 w-56">
              <div className="h-16 w-56 inline-block">
                <a href="https://zohation.webflow.io/services" style={{ overflowBlock: 'hidden', overflowInline: 'hidden' }} className="items-center bg-orange-600 cursor-pointer flex-col font-semibold h-16 justify-center max-w-full py-5 px-10 relative w-56 flex border-2 border-orange-600 border-solid overflow-hidden" id="a-1">
                  <div className="items-center h-5 justify-center relative w-36 flex overflow-hidden">
                    <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="h-5 relative w-36">View All Services</div>
                    <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="h-5 absolute w-36">View All Services</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              {/* Services Grid */}
              <div className="auto-cols-fr grid-cols-[1fr_1fr_1fr] grid-rows-[auto] gap-6 grid bg-white" id="div-1">
                {/* Service Card 1 - Project Management */}
                <div className="w-96">
                  <div
                    id="div-2"
                    className="group relative w-96 border-2 border-zinc-300 overflow-hidden pb-[30px] px-6 pt-[100px] bg-white transition-all duration-300"
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
                    {/* Icons */}
                    <div id="div-3" className="relative z-10 flex-col h-16 mb-12 w-full overflow-hidden">
                      <img className="h-16 max-w-full w-16 transition-opacity duration-300 group-hover:opacity-0" src="https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/6473879a1abb27b86b6cbaee_Services%20Image1.svg" alt="" />
                      <img className="h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0" src="https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647388776fc6bf5f6fd3908a_Services%20Image2.svg" alt="" />
                    </div>
                    {/* Content */}
                    <div className="relative z-10 flex flex-col w-full overflow-hidden">
                      <div className="w-full">
                        <a href="https://zohation.webflow.io/services/project-management" className="block mb-4 h-10 w-full text-3xl font-semibold leading-10 text-black transition-colors duration-300 group-hover:text-white">
                          Project Management
                        </a>
                        <p id="p-1" className="mb-5 h-14 w-full leading-7 text-black/80 transition-colors duration-300 group-hover:text-white/80">
                          Dignissimos ducimus qui blanditiis lorem sit praesentium voluptatum deleniti atque
                        </p>
                        <a href="https://zohation.webflow.io/services/project-management" className="flex h-9 w-full items-center gap-x-4 font-semibold text-black transition-colors duration-300 group-hover:text-white">
                          <div className="w-24 h-6 pb-1 border-b-2 border-black transition-colors duration-300 group-hover:border-white">Learn More</div>
                          <div id="div-4" className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600">
                            <img className="inline-block h-2.5 w-3 align-middle" src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6471aa245f4bcd52c7751c1f_Services%20Link%20Block%20Arrow.png" alt="" />
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* Number badge */}
                    <div className="absolute right-[23.75rem] bottom-[23.13rem] inline-block z-20 w-11 h-11 p-3 bg-zinc-100 text-center italic font-semibold">01</div>
                  </div>
                </div>

                {/* Service Card 2 - General Constructing */}
                <div className="w-96">
                  <div
                    id="div-5"
                    className="group relative w-96 border-2 border-zinc-300 overflow-hidden pb-[30px] px-6 pt-[100px] bg-white transition-all duration-300"
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
                    <div id="div-6" className="relative z-10 flex-col h-16 mb-12 w-full overflow-hidden">
                      <img className="h-14 max-w-full w-12 transition-opacity duration-300 group-hover:opacity-0" src="https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647388838341277e72b4fca7_Services%20Image3.svg" alt="" />
                      <img className="h-14 w-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0" src="https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647388864e7dfa2006d9a931_Services%20Image4.svg" alt="" />
                    </div>
                    <div className="relative z-10 flex flex-col w-full overflow-hidden">
                      <div className="w-full">
                        <a href="https://zohation.webflow.io/services/general-constructing" className="block mb-4 h-10 w-full text-3xl font-semibold leading-10 text-black transition-colors duration-300 group-hover:text-white">
                          General Constructing
                        </a>
                        <p id="p-2" className="mb-5 h-14 w-full leading-7 text-black/80 transition-colors duration-300 group-hover:text-white/80">
                          Dignissimos ducimus qui blanditiis lorem sit praesentium voluptatum deleniti atque
                        </p>
                        <a href="https://zohation.webflow.io/services/general-constructing" className="flex h-9 w-full items-center gap-x-4 font-semibold text-black transition-colors duration-300 group-hover:text-white">
                          <div className="w-24 h-6 pb-1 border-b-2 border-black transition-colors duration-300 group-hover:border-white">Learn More</div>
                          <div id="div-7" className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600">
                            <img className="inline-block h-2.5 w-3 align-middle" src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6471aa245f4bcd52c7751c1f_Services%20Link%20Block%20Arrow.png" alt="" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="absolute right-[23.63rem] bottom-[23.13rem] inline-block z-20 w-12 h-11 p-3 bg-zinc-100 text-center italic font-semibold">02</div>
                  </div>
                </div>

                {/* Service Card 3 - Project Development */}
                <div className="w-96">
                  <div
                    id="div-8"
                    className="group relative w-96 border-2 border-zinc-300 overflow-hidden pb-[30px] px-6 pt-[100px] bg-white transition-all duration-300"
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
                    <div id="div-9" className="relative z-10 flex-col h-16 mb-12 w-full overflow-hidden">
                      <img className="h-20 max-w-full w-28 transition-opacity duration-300 group-hover:opacity-0" src="https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/6473889963040bdcf0d61a1e_Services%20Image5.svg" alt="" />
                      <img className="h-20 w-28 opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0" src="https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/6473889b8bf42042655898a6_Services%20Image6.svg" alt="" />
                    </div>
                    <div className="relative z-10 flex flex-col w-full overflow-hidden">
                      <div className="w-full">
                        <a href="https://zohation.webflow.io/services/project-development" className="block mb-4 h-10 w-full text-3xl font-semibold leading-10 text-black transition-colors duration-300 group-hover:text-white">
                          Project Development
                        </a>
                        <p id="p-3" className="mb-5 h-14 w-full leading-7 text-black/80 transition-colors duration-300 group-hover:text-white/80">
                          Dignissimos ducimus qui blanditiis lorem sit praesentium voluptatum deleniti atque
                        </p>
                        <a href="https://zohation.webflow.io/services/project-development" className="flex h-9 w-full items-center gap-x-4 font-semibold text-black transition-colors duration-300 group-hover:text-white">
                          <div className="w-24 h-6 pb-1 border-b-2 border-black transition-colors duration-300 group-hover:border-white">Learn More</div>
                          <div id="div-10" className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600">
                            <img className="inline-block h-2.5 w-3 align-middle" src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6471aa245f4bcd52c7751c1f_Services%20Link%20Block%20Arrow.png" alt="" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="absolute right-[23.50rem] bottom-[23.13rem] inline-block z-20 w-12 h-11 p-3 bg-zinc-100 text-center italic font-semibold">03</div>
                  </div>
                </div>

                {/* Service Card 4 - Virtual Design & Build */}
                <div className="w-96">
                  <div
                    id="div-11"
                    className="group relative w-96 border-2 border-zinc-300 overflow-hidden pb-[30px] px-6 pt-[100px] bg-white transition-all duration-300"
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
                    <div id="div-12" className="relative z-10 flex-col h-16 mb-12 w-full overflow-hidden">
                      <img className="h-20 max-w-full w-20 transition-opacity duration-300 group-hover:opacity-0" src="https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647388acf753275fb1299cd9_Services%20Image7.svg" alt="" />
                      <img className="h-20 w-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0" src="https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647388b06d3931efc9b587d3_Services%20Image8.svg" alt="" />
                    </div>
                    <div className="relative z-10 flex flex-col w-full overflow-hidden">
                      <div className="w-full">
                        <a href="https://zohation.webflow.io/services/virtual-design-build" className="block mb-4 h-10 w-full text-3xl font-semibold leading-10 text-black transition-colors duration-300 group-hover:text-white">
                          Virtual Design &amp; Build
                        </a>
                        <p id="p-4" className="mb-5 h-14 w-full leading-7 text-black/80 transition-colors duration-300 group-hover:text-white/80">
                          Dignissimos ducimus qui blanditiis lorem sit praesentium voluptatum deleniti atque
                        </p>
                        <a href="https://zohation.webflow.io/services/virtual-design-build" className="flex h-9 w-full items-center gap-x-4 font-semibold text-black transition-colors duration-300 group-hover:text-white">
                          <div className="w-24 h-6 pb-1 border-b-2 border-black transition-colors duration-300 group-hover:border-white">Learn More</div>
                          <div id="div-13" className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600">
                            <img className="inline-block h-2.5 w-3 align-middle" src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6471aa245f4bcd52c7751c1f_Services%20Link%20Block%20Arrow.png" alt="" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="absolute right-[23.50rem] bottom-[23.13rem] inline-block z-20 w-12 h-11 p-3 bg-zinc-100 text-center italic font-semibold">04</div>
                  </div>
                </div>

                {/* Service Card 5 - Build Preconstruction */}
                <div className="w-96">
                  <div
                    id="div-14"
                    className="group relative w-96 border-2 border-zinc-300 overflow-hidden pb-[30px] px-6 pt-[100px] bg-white transition-all duration-300"
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
                    <div id="div-15" className="relative z-10 flex-col h-16 mb-12 w-full overflow-hidden">
                      <img className="h-16 max-w-full w-16 transition-opacity duration-300 group-hover:opacity-0" src="https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647388b989a246e55ee8188e_Services%20Image9.svg" alt="" />
                      <img className="h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0" src="https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647388bd1599f3a16bd5955d_Services%20Image10.svg" alt="" />
                    </div>
                    <div className="relative z-10 flex flex-col w-full overflow-hidden">
                      <div className="w-full">
                        <a href="https://zohation.webflow.io/services/build-preconstruction" className="block mb-4 h-10 w-full text-3xl font-semibold leading-10 text-black transition-colors duration-300 group-hover:text-white">
                          Build Preconstruction
                        </a>
                        <p id="p-5" className="mb-5 h-14 w-full leading-7 text-black/80 transition-colors duration-300 group-hover:text-white/80">
                          Dignissimos ducimus qui blanditiis lorem sit praesentium voluptatum deleniti atque
                        </p>
                        <a href="https://zohation.webflow.io/services/build-preconstruction" className="flex h-9 w-full items-center gap-x-4 font-semibold text-black transition-colors duration-300 group-hover:text-white">
                          <div className="w-24 h-6 pb-1 border-b-2 border-black transition-colors duration-300 group-hover:border-white">Learn More</div>
                          <div id="div-16" className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600">
                            <img className="inline-block h-2.5 w-3 align-middle" src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6471aa245f4bcd52c7751c1f_Services%20Link%20Block%20Arrow.png" alt="" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="absolute right-[23.50rem] bottom-[23.13rem] inline-block z-20 w-12 h-11 p-3 bg-zinc-100 text-center italic font-semibold">05</div>
                  </div>
                </div>

                {/* Service Card 6 - Property Maintenance */}
                <div className="w-96">
                  <div
                    id="div-17"
                    className="group relative w-96 border-2 border-zinc-300 overflow-hidden pb-[30px] px-6 pt-[100px] bg-white transition-all duration-300"
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
                    <div id="div-18" className="relative z-10 flex-col h-16 mb-12 w-full overflow-hidden">
                      <img className="h-16 max-w-full w-16 transition-opacity duration-300 group-hover:opacity-0" src="https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647388c64e7dfa2006da3644_Services%20Image11.svg" alt="" />
                      <img className="h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute top-0" src="https://cdn.prod.website-files.com/647197b25f4bcd52c76a7335/647388c96fc6bf5f6fd3d2a2_Services%20Image12.svg" alt="" />
                    </div>
                    <div className="relative z-10 flex flex-col w-full overflow-hidden">
                      <div className="w-full">
                        <a href="https://zohation.webflow.io/services/property-maintenance" className="block mb-4 h-10 w-full text-3xl font-semibold leading-10 text-black transition-colors duration-300 group-hover:text-white">
                          Property Maintenance
                        </a>
                        <p id="p-6" className="mb-5 h-14 w-full leading-7 text-black/80 transition-colors duration-300 group-hover:text-white/80">
                          Dignissimos ducimus qui blanditiis lorem sit praesentium voluptatum deleniti atque
                        </p>
                        <a href="https://zohation.webflow.io/services/property-maintenance" className="flex h-9 w-full items-center gap-x-4 font-semibold text-black transition-colors duration-300 group-hover:text-white">
                          <div className="w-24 h-6 pb-1 border-b-2 border-black transition-colors duration-300 group-hover:border-white">Learn More</div>
                          <div id="div-19" className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600">
                            <img className="inline-block h-2.5 w-3 align-middle" src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6471aa245f4bcd52c7751c1f_Services%20Link%20Block%20Arrow.png" alt="" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="absolute right-[23.50rem] bottom-[23.13rem] inline-block z-20 w-12 h-11 p-3 bg-zinc-100 text-center italic font-semibold">06</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Number Talks Section */}
      <section className="w-full overflow-hidden bg-[url('https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6474705a0cfc7c59037c45f6_Number%20Talks%20Bg.png')] bg-no-repeat bg-cover py-20 md:py-32 lg:py-40 relative" id="section-1">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12" id="div-1">
            <div className="w-full lg:w-[47%]" id="div-2">
              <div className="w-full">
                <div className="flex items-center gap-x-4 mb-7" id="div-3">
                  <div className="bg-orange-600 h-0.5 w-24" id="div-4"></div>
                  <div className="text-orange-600 text-xl italic font-bold whitespace-nowrap">Number Talks</div>
                </div>
                <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6" id="h2-1">Zohation will help you get things complete reality.</h2>
                <p className="text-white/[0.8] leading-7 mb-9 max-w-lg" id="p-1">We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master</p>
                <div className="inline-block">
                  <a href="https://zohation.webflow.io/contact-us" className="items-center text-white cursor-pointer flex-col font-semibold justify-center py-5 px-10 flex border-2 border-white/[0.3] border-solid overflow-hidden hover:bg-white/10 transition-colors" id="a-1">
                    <div className="items-center justify-center relative flex overflow-hidden">
                      <div className="relative">Get a Quote</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[46%]" id="div-5">
              <div className="w-full">
                <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="box-border text-black/[0.8] text-lg auto-cols-fr grid-cols-[1fr_1fr] grid-rows-[auto] w-full leading-5 grid gap-6 md:gap-8" id="div-1">
                  <div className="items-center bg-[#8B4513]/90 flex-col justify-center py-12 md:py-16 w-full min-h-[200px] md:min-h-[240px] flex col-span-1 row-span-1">
                    <div style={{ overflowBlock: 'hidden', overflowInline: 'hidden' }} className="items-center h-20 justify-start w-44 flex overflow-hidden" id="div-2">
                      <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="h-[68.75rem] w-14">
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">0</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">0</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">2</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">4</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">5</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">6</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">7</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                      </div>
                      <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="h-[68.75rem] w-14">
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">0</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">1</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">5</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">4</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">4</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">1</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">3</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">9</h2>
                      </div>
                      <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="items-center text-orange-600 text-[5.63rem] leading-none font-semibold h-28 justify-center leading-[6.25rem] pt-1.5 w-14">+</div>
                    </div>
                    <div className="h-5 mt-1.5 w-40"><div className="text-white font-medium h-5 w-40">Projects Completed</div></div>
                  </div>
                  <div className="items-center bg-[#8B4513]/90 flex-col justify-center py-12 md:py-16 w-full min-h-[200px] md:min-h-[240px] flex col-span-1 row-span-1">
                    <div style={{ overflowBlock: 'hidden', overflowInline: 'hidden' }} className="items-center h-20 justify-start w-48 flex overflow-hidden" id="div-3">
                      <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="h-[68.75rem] w-14">
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">0</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">1</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">2</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">3</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">9</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">4</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">5</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">6</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">7</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">9</h2>
                      </div>
                      <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="h-[68.75rem] w-14">
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">0</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">9</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">1</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">5</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">4</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">7</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">3</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">4</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">1</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">7</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">6</h2>
                      </div>
                      <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="items-center text-orange-600 text-[5.63rem] leading-none font-semibold h-28 justify-center leading-[6.25rem] pt-1.5 w-20">%</div>
                    </div>
                    <div className="h-5 mt-1.5 w-32"><div className="text-white font-medium h-5 w-32">Satisfied Clients</div></div>
                  </div>
                  <div className="items-center bg-[#8B4513]/90 flex-col justify-center py-12 md:py-16 w-full min-h-[200px] md:min-h-[240px] flex col-span-1 row-span-1">
                    <div style={{ overflowBlock: 'hidden', overflowInline: 'hidden' }} className="items-center h-20 justify-start w-44 flex overflow-hidden" id="div-4">
                      <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="h-[68.75rem] w-14">
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">0</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">0</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">2</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">4</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">5</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">6</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">7</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">1</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">2</h2>
                      </div>
                      <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="h-[68.75rem] w-14">
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">0</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">5</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">1</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">5</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">4</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">4</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">1</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">3</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">9</h2>
                      </div>
                      <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="items-center text-orange-600 text-[5.63rem] leading-none font-semibold h-28 justify-center leading-[6.25rem] pt-1.5 w-14">+</div>
                    </div>
                    <div className="h-5 mt-1.5 w-36"><div className="text-white font-medium h-5 w-36">Years Experience</div></div>
                  </div>
                  <div className="items-center bg-[#8B4513]/90 flex-col justify-center py-12 md:py-16 w-full min-h-[200px] md:min-h-[240px] flex col-span-1 row-span-1">
                    <div style={{ overflowBlock: 'hidden', overflowInline: 'hidden' }} className="items-center h-20 justify-start w-44 flex overflow-hidden" id="div-5">
                      <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="h-[68.75rem] w-14">
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">0</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">0</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">2</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">4</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">5</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">6</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">7</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                      </div>
                      <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="h-[68.75rem] w-14">
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">0</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">1</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">5</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">4</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">8</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">4</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">1</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">3</h2>
                        <h2 className="text-orange-600 text-[5.63rem] leading-none font-semibold h-24 leading-[6.25rem] relative w-14">9</h2>
                      </div>
                      <div style={{ overflowBlock: 'visible', overflowInline: 'visible' }} className="items-center text-orange-600 text-[5.63rem] leading-none font-semibold h-28 justify-center leading-[6.25rem] pt-1.5 w-14">+</div>
                    </div>
                    <div className="h-5 mt-1.5 w-40"><div className="text-white font-medium h-5 w-40">Projects Completed</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6475eb82854f05ea66083715_Number%20Talks%20Section%20Shape2.png" className="hidden lg:block absolute bottom-0 right-32 w-64 h-16 pointer-events-none" id="img-1" />
        <img src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6475eaeb86e51dd65fe0599b_Number%20Talks%20Section%20Shape1.png" className="hidden lg:block absolute bottom-0 right-0 w-40 h-20 pointer-events-none z-[1]" id="img-2" />
      </section>
    </>
  );
};

export default Index;
