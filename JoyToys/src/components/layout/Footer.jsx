import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 text-center text-text-200">
        <p>© 2026 Joy Toys. Todos los derechos reservados.</p>
        <nav className="mt-2">
          <a href="/aviso" className="mx-2 hover:underline">
            Aviso de privacidad
          </a>
          <a href="/terminos" className="mx-2 hover:underline">
            Términos de uso
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
