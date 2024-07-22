import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 footer">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()}{" "}
          Muthamizharasi
        </p>
      </div>
    </footer>
  );
};

export default Footer;