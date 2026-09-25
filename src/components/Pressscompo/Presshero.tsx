import React from 'react';

interface PressHeroProps {
  title?: string;
  subtitle?: string;
  bannerImgSrc?: string;
}

export const PressHero: React.FC<PressHeroProps> = ({
  title = "In the Press",
  subtitle = "Company announcements and latest media coverage",
  bannerImgSrc = "https://www.phonepe.com/press/_astro/press-banner.nJzXonhL.png",
}) => {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F194C] leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[#5A5A72] font-normal max-w-md leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Right Column: Hero Graphic */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={bannerImgSrc}
            alt="Press illustration featuring kettle, tea glass, and newspaper"
            className="w-full max-w-[360px] sm:max-w-[420px] md:max-w-[480px] h-auto object-contain"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default PressHero;