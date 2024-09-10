
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/5493515497313"
      className="fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="block md:hidden">
        <FaWhatsapp size={30} />
      </div>
      <div className="hidden md:block">
        <FaWhatsapp size={50} />
      </div>
    </a>
  );
};

export default WhatsappButton;