import { useTranslation } from 'react-i18next';
import ImageComparisonSlider from './ImageComparisonSlider';

const BeforeAfterSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'bathroom-renovation',
      beforeImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop',
      title: t('beforeAfter.projects.project1.title'),
      category: t('beforeAfter.projects.project1.category'),
    },
    {
      id: 'kitchen-remodel',
      beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
      title: t('beforeAfter.projects.project2.title'),
      category: t('beforeAfter.projects.project2.category'),
    },
    {
      id: 'deck-renovation',
      beforeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      title: t('beforeAfter.projects.project3.title'),
      category: t('beforeAfter.projects.project3.category'),
    },
    {
      id: 'exterior-painting',
      beforeImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      title: t('beforeAfter.projects.project4.title'),
      category: t('beforeAfter.projects.project4.category'),
    },
  ];

  return (
    <section id="projects-section" className="relative w-full overflow-visible bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-orange-600 h-0.5 w-16 sm:w-24"></div>
            <div className="text-orange-600 text-xl sm:text-xl italic font-bold whitespace-nowrap">
              {t('beforeAfter.badge')}
            </div>
            <div className="bg-orange-600 h-0.5 w-16 sm:w-24"></div>
          </div>
          <h2 className="text-[2.25rem] md:text-5xl lg:text-6xl font-bold mb-4">
            {t('beforeAfter.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('beforeAfter.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group">
              {/* Image Comparison */}
              <div className="mb-3 md:mb-4 overflow-hidden shadow-xl rounded-none">
                <ImageComparisonSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  altText={project.title}
                />
              </div>
              
              {/* Project Info */}
              <div className="px-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="/projects"
            className="group relative inline-flex items-center justify-center h-16 py-4 px-8 sm:px-12 bg-primary border-2 border-primary text-white text-sm font-semibold uppercase cursor-pointer overflow-hidden transition-all duration-300 hover:bg-black hover:border-black"
          >
            <div className="relative w-full flex items-center justify-center overflow-hidden h-6">
              <span className="relative whitespace-nowrap transition-all duration-300 group-hover:-translate-y-full block">
                {t('beforeAfter.cta')}
              </span>
              <span className="absolute whitespace-nowrap translate-y-full transition-all duration-300 group-hover:translate-y-0 block">
                {t('beforeAfter.cta')}
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
