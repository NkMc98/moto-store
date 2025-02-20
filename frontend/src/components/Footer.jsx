import React from "react";
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-400 py-4 text-center mt-10">
        <p>&copy; {new Date().getFullYear()} MotoStore - Todos los derechos reservados.</p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="https://facebook.com" className="hover:text-white">Facebook</a>
          <a href="https://instagram.com" className="hover:text-white">Instagram</a>
          <a href="https://twitter.com" className="hover:text-white">Twitter</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  