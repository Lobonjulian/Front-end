const Newsletter = () => {
  return (
    <section className="py-16 bg-bg-100">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Recibe novedades</h2>
        <p className="mb-6">
          Entérate de nuevos productos y eventos especiales.
        </p>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-100"
          />
          <button className="px-6 py-3 bg-primary-100 text-white font-accent rounded-lg hover:bg-primary-200 transition-colors whitespace-nowrap">
            Suscribirse →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
