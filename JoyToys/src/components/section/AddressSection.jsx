const AddressSection = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        {/* Texto de dirección */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Visítanos</h2>
          <p className="text-lg">
            Calle Imaginación 123
            <br />
            Barrio Creativo
            <br />
            Ciudad Juguete, CJ 10101
          </p>
        </div>

        {/* Mapa placeholder */}
        <div className="md:w-1/2 bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
          <span className="text-text-200">Mapa interactivo</span>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
