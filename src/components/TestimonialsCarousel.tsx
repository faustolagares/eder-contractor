import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";

interface Testimonial {
  id: number;
  rating: number;
  text: string;
  author: {
    name: string;
    location: string;
    image: string;
  };
}

const TestimonialsCarousel = () => {
  const { t } = useTranslation();
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5.0,
      text: t('testimonials.reviews.review1.text'),
      author: {
        name: t('testimonials.reviews.review1.author'),
        location: t('testimonials.reviews.review1.location'),
        image: "https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6471f646cafccad926f2b4eb_Testimonial%20Author%20Image1.png",
      },
    },
    {
      id: 2,
      rating: 5.0,
      text: t('testimonials.reviews.review2.text'),
      author: {
        name: t('testimonials.reviews.review2.author'),
        location: t('testimonials.reviews.review2.location'),
        image: "https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6471f64636ce059b65b78070_Testimonial%20Author%20Image2.png",
      },
    },
    {
      id: 3,
      rating: 5.0,
      text: t('testimonials.reviews.review3.text'),
      author: {
        name: t('testimonials.reviews.review3.author'),
        location: t('testimonials.reviews.review3.location'),
        image: "https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6471f64636ce059b65b780bf_Testimonial%20Author%20Image3.png",
      },
    },
    {
      id: 4,
      rating: 5.0,
      text: t('testimonials.reviews.review4.text'),
      author: {
        name: t('testimonials.reviews.review4.author'),
        location: t('testimonials.reviews.review4.location'),
        image: "https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6471f646cafccad926f2b4eb_Testimonial%20Author%20Image1.png",
      },
    },
    {
      id: 5,
      rating: 5.0,
      text: t('testimonials.reviews.review5.text'),
      author: {
        name: t('testimonials.reviews.review5.author'),
        location: t('testimonials.reviews.review5.location'),
        image: "https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6471f64636ce059b65b78070_Testimonial%20Author%20Image2.png",
      },
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      className="relative bg-white py-40 overflow-visible w-full"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/64744581d636aeb010753bc3_Testimonial%20Bg%20Hv2.png')",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto px-4 mb-14">
        <div className="text-center w-full mx-auto mb-14 max-lg:max-w-[700px] max-md:max-w-[480px] max-md:mb-[50px] max-sm:mb-10">
          <div className="flex items-center justify-center gap-4 mb-6 max-md:mb-[15px] max-sm:mb-[10px]">
            <div className="bg-orange-600 h-0.5 w-24 max-sm:w-[50px]"></div>
            <div className="text-orange-600 text-xl font-bold">{t('testimonials.badge')}</div>
            <div className="bg-orange-600 h-0.5 w-24 max-sm:w-[50px]"></div>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[4.75rem] leading-tight lg:leading-[5.38rem] font-bold max-w-full lg:max-w-[730px] mx-auto">
            {t('testimonials.title')}
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full pb-32 max-lg:pb-[120px] max-sm:pb-[110px]">
        <div className="w-full max-w-7xl mx-auto px-4 lg:pl-4 lg:pr-0">
          <div className="w-full lg:w-[102.25rem] ml-auto overflow-hidden">
            <div ref={emblaRef}>
              <div className="flex gap-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_auto] w-[536px] max-w-full"
                  >
                    <div className="bg-white py-12 px-10 max-lg:p-[35px] max-md:p-[25px] max-sm:px-[15px]">
                      {/* Rating */}
                      <div className="flex items-center gap-[10px] mb-8 max-lg:mb-[25px] max-md:mb-5">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <img
                              key={star}
                              src="https://cdn.prod.website-files.com/646ef7a4c51366af95b5a706/6471e8cb3090a633cfb6f1b5_Testimonial%20Review%20Image.png"
                              alt="Star"
                              className="w-7 h-7 max-md:w-[25px] max-md:h-[25px] max-sm:w-5 max-sm:h-5"
                            />
                          ))}
                        </div>
                        <div className="text-[1.38rem] leading-7 font-semibold">
                          {testimonial.rating}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="leading-7 mb-6 h-40 overflow-hidden max-lg:mb-5 max-md:mb-5">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.author.image}
                          alt={testimonial.author.name}
                          className="w-16 h-16 rounded-full max-md:w-[45px] max-md:h-[45px] max-sm:w-10 max-sm:h-10"
                        />
                        <div>
                          <div className="text-xl font-semibold mb-2 max-sm:mb-[5px]">
                            {testimonial.author.name}
                          </div>
                          <div className="text-black/70">
                            {testimonial.author.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-134px] bg-orange-600 flex items-center justify-center h-12 w-48 pt-3 z-[2] max-lg:bottom-[-119px] max-md:bottom-[-95px] max-sm:bottom-[-109px]">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-4 h-4 rounded-full mx-1 mb-2 cursor-pointer transition-all ${
                index === selectedIndex
                  ? "bg-neutral-800"
                  : "bg-neutral-800/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
