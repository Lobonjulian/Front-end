import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Por favor ingresa un email válido');
      return;
    }

    setError('');
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-bg-100">
      <div className="container-page max-w-xl text-center">
        <h2 className="text-2xl font-semibold mb-6">Recibe novedades</h2>
        <p className="mb-6">
          Entérate de nuevos productos y eventos especiales.
        </p>

        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="
                flex-1
                px-4 py-3
                border
                border-text-200
                outline-none
              "
            />

            <button
              type="submit"
              className="
                px-6 py-3
                bg-primary-100
                text-white
                transition
                hover:opacity-90
              "
            >
              Suscribirme
            </button>
          </form>
        ) : (
          <p className="text-primary-100">¡Gracias por suscribirte!</p>
        )}

        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default NewsletterSection;
