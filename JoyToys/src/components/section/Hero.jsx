const Hero = ({ title, imageSrc, imageAlt = title }) => {
  return (
    <section className="w-full">
      <div className="container-page pb-10">
        <h1 className="text-4xl md:text-6xl max-w-3xl text-accent-100 leading-tight">
          {title}
        </h1>
      </div>

      <div className="w-full">
      <img src={imageSrc} alt={imageAlt} className="w-full h-[60vh] object-contain" />
      </div>
    </section>
  );
};

export default Hero;
