import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import "./contact.css";

const Contact = () => {
  const { t } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Banner Section */}
      <section
        style={{
          backgroundPosition: "50% 50%",
          backgroundImage:
            "url('https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6475edadca9bd5720955f13b_Inner%20Banner%20Bg.png')",
        }}
        className="bg-no-repeat bg-cover box-border text-black/[0.8] text-lg min-h-96 leading-5 pb-40 pt-48 relative w-full overflow-hidden bg-white"
        id="contact-hero-section"
      >
        <div className="h-auto px-4 w-full max-w-7xl m-auto">
          <div className="items-center flex-col h-auto justify-center text-center w-full flex">
            <div className="h-auto w-full max-w-xs">
              <h2 className="text-white text-3xl lg:text-[2.63rem] font-bold h-auto leading-tight w-full">
                {t('contact.hero.title')}
              </h2>
              <div
                className="items-center gap-x-[0.38rem] h-auto justify-center mt-4 w-full flex"
                id="contact-hero-breadcrumb"
              >
                <img
                  src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6475ef1ffbe005ec6bba0fab_Home%20Icon.svg"
                  className="h-5 mb-1 max-w-full align-middle w-4 inline-block"
                  alt="Home"
                />
                <Link to="/" className="text-white cursor-pointer font-semibold">
                  {t('contact.hero.breadcrumb.home')}
                </Link>
                <div className="text-white font-semibold">/</div>
                <Link
                  to="/contact"
                  className="text-orange-600 cursor-pointer font-semibold"
                >
                  {t('contact.hero.breadcrumb.current')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6475f5227c58655d7dddb7c2_Inner%20Banner%20Shape%231.png"
          className="hidden lg:block bottom-[0.13rem] h-96 max-w-full absolute right-[100.75rem] align-middle w-80"
          id="contact-hero-img-1"
          alt="Shape 1"
        />
        <img
          src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6475f5227df5050e2e513829_Inner%20Banner%20Shape%232.png"
          className="hidden lg:block h-72 left-[3.75rem] max-w-full absolute right-[98.00rem] top-[9.88rem] align-middle w-72 z-[1]"
          id="contact-hero-img-2"
          alt="Shape 2"
        />
      </section>

      {/* Contact Form Section */}
      <section
        style={{
          backgroundPosition: "50% 50%",
          backgroundImage:
            "url('https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64786bbfa27d0324116c7d29_Contact%20Us%20BG.png')",
        }}
        className="bg-no-repeat bg-cover box-border text-black/[0.8] text-lg min-h-screen leading-5 pb-24 pt-36 w-full bg-white"
        id="contact-form-section"
      >
        <div className="h-auto px-4 w-full max-w-7xl m-auto">
          <div
            className="items-start h-auto justify-between w-full flex flex-col lg:flex-row gap-8 lg:gap-12 m-auto"
            id="contact-content-wrapper"
          >
            {/* Left Content */}
            <div className="h-auto w-full lg:w-[55%] max-w-2xl" id="contact-left-content">
              <div className="h-auto w-full">
                <h2
                  className="text-neutral-900 text-3xl lg:text-5xl xl:text-[4.75rem] font-bold h-auto leading-tight mb-6 w-full"
                  id="contact-title"
                >
                  Let's Build Something Great Together.
                </h2>
                <p
                  className="h-auto leading-7 mb-9 w-full"
                  id="contact-description"
                >
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                  sed quia consequuntur magni dolores eosrt qui ratione voluptatem sequi
                  nesciunt. Neque porro.
                </p>
              </div>
              <div className="h-auto w-full" id="contact-info-list">
                <div className="flex-col h-auto gap-y-5 w-full flex">
                  <div className="items-center gap-x-5 h-auto w-full flex">
                    <div
                      className="items-center bg-orange-600 h-10 justify-center w-10 flex flex-shrink-0"
                      id="contact-icon-1"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64749958de4c4689b3a4679c_Contact%20Gmail%20Icon.svg"
                        className="h-6 max-w-full align-middle w-6 inline-block"
                        alt="Email"
                      />
                    </div>
                    <div className="h-auto flex-1">
                      <div className="text-lg lg:text-[1.75rem] font-medium h-auto leading-relaxed">
                        zohation@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="items-center gap-x-5 h-auto w-full flex">
                    <div
                      className="items-center bg-orange-600 h-10 justify-center w-10 flex flex-shrink-0"
                      id="contact-icon-2"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/647869d8faeae0708e3b43f3_Contact%20Icon2.svg"
                        className="h-7 max-w-full align-middle w-7 inline-block"
                        alt="Phone"
                      />
                    </div>
                    <div className="h-auto flex-1">
                      <div className="text-lg lg:text-[1.75rem] font-medium h-auto leading-relaxed">
                        (+008) 2165 35920
                      </div>
                    </div>
                  </div>
                  <div className="items-center gap-x-5 h-auto w-full flex">
                    <div
                      className="items-center bg-orange-600 h-10 justify-center w-10 flex flex-shrink-0"
                      id="contact-icon-3"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/647869d8c7b7fd5334b56f8c_Contact%20Icon3.svg"
                        className="h-7 max-w-full align-middle w-7 inline-block"
                        alt="Phone"
                      />
                    </div>
                    <div className="h-auto flex-1">
                      <div className="text-lg lg:text-[1.75rem] font-medium h-auto leading-relaxed">
                        (+880) 6599 02008
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="h-auto relative w-full lg:w-[42%] z-10" id="contact-right-form">
              <div
                className="h-auto py-9 px-6 lg:px-12 relative w-full bg-white z-20"
                id="contact-form-card"
              >
                <div className="h-auto mb-10 lg:mb-14 text-center w-full">
                  <h3
                    className="text-xl lg:text-[1.63rem] font-bold h-auto leading-tight mb-3.5 w-full"
                    id="contact-form-title"
                  >
                    Your Information
                  </h3>
                  <div className="bg-orange-600 h-0.5 w-28 m-auto"></div>
                </div>
                <div className="h-auto w-full">
                  <form className="flex-col h-auto gap-y-6 w-full flex">
                    <div className="h-auto w-full">
                      <label className="font-semibold block mb-3 w-full">Your Name</label>
                      <input
                        type="text"
                        placeholder="Nick Jonas Handerson"
                        className="cursor-text font-medium h-14 leading-6 px-5 w-full border-2 border-black/[0.15] border-solid"
                        id="contact-input-name"
                      />
                    </div>
                    <div className="h-auto w-full">
                      <label className="font-semibold block mb-3 w-full">Your Email</label>
                      <input
                        type="email"
                        placeholder="nickjonas@gmail.com"
                        className="cursor-text font-medium h-14 leading-6 px-5 w-full border-2 border-black/[0.15] border-solid"
                        id="contact-input-email"
                      />
                    </div>
                    <div className="h-auto w-full">
                      <label className="font-semibold block mb-3 w-full">Message</label>
                      <textarea
                        placeholder="Write your message"
                        className="text-zinc-800 cursor-text font-medium leading-6 min-h-[8.50rem] w-full py-3 px-5 resize-y border-2 border-black/[0.15] border-solid"
                        id="contact-textarea"
                      />
                    </div>
                    <div className="h-auto w-full">
                      <button
                        type="submit"
                        className="bg-orange-600 text-white cursor-pointer font-semibold h-14 py-5 px-9 text-center select-none w-full lg:w-44 hover:bg-orange-700 transition-colors"
                      >
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6474deecd4fa1e5c0c6dcfbb_Contact%20Us%20Card%20Border.png"
                  className="hidden lg:block bottom-[33.13rem] h-0.5 left-[15.00rem] max-w-full absolute right-[-11.63rem] top-[6.63rem] align-middle w-96 z-10"
                  id="contact-form-border-img"
                  alt="Border"
                />
              </div>
              <img
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64786f47502020857ffc5406_Contact%20Us%20Form%20Shape.png"
                className="hidden lg:block bottom-[18.25rem] h-80 left-[0.38rem] max-w-full absolute right-[11.50rem] top-[0.50rem] align-middle w-72 z-0"
                id="contact-form-img-1"
                alt="Shape"
              />
              <img
                src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64786f47ef6a326edc12fe4c_Contact%20Us%20Form%20Shape2.png"
                className="hidden lg:block bottom-[3.88rem] h-[39.13rem] max-w-full absolute right-[11.63rem] top-[-3.13rem] align-middle w-72 z-0"
                id="contact-form-img-2"
                alt="Shape 2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;

