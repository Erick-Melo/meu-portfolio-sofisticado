const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto dark:bg-gray-900">
      <p>
        &copy; {new Date().getFullYear()} Erick-Melo. Todos os direitos
        reservados.
      </p>
      <p className="text-sm text-gray-400">
        Feito com React, Vite, Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
