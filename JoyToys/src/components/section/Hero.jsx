const Hero = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="max-w-3xl mx-auto text-4xl font-bold text-accent-100 leading-relaxed">
        Joy Toys es una tienda cuidadosamente seleccionada de juguetes
        educativos, creativos y de desarrollo infantil abierta todo el año en la
        calle alegría 123
      </h1>
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Niños jugando con juguetes educativos de Joy Toys"
        className="w-full h-auto rounded-lg"
      />
    </section>
  );
};

export default Hero;
