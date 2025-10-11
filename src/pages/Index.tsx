import './hero.css';

const Index = () => {
  return (
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
                    <div className="relative flex items-center justify-center w-24 h-5 overflow-hidden">
                      <div className="relative w-24 h-5 transition-all duration-300 group-hover:-translate-y-full">Contact Us</div>
                      <div className="absolute w-24 h-5 right-[0.13rem] translate-y-full transition-all duration-300 group-hover:translate-y-0">Contact Us</div>
                    </div>
                  </a>
                </div>
                
                <div className="w-44 h-16 inline-block">
                  <a 
                    href="#about" 
                    className="group relative flex flex-col items-center justify-center w-44 h-16 py-[19px] px-[38px] text-white border border-white/30 text-sm font-semibold uppercase cursor-pointer overflow-hidden transition-all duration-[450ms] hover:border-primary"
                    id="a-2"
                  >
                    <div className="relative flex items-center justify-center w-24 h-5 overflow-hidden">
                      <div className="relative w-24 h-5 transition-all duration-300 group-hover:-translate-y-full">Learn More</div>
                      <div className="absolute w-24 h-5 right-[0.13rem] translate-y-full transition-all duration-300 group-hover:translate-y-0">Learn More</div>
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
  );
};

export default Index;
