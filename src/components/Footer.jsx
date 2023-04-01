import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="coordinate">
        <div className="email__container footer__element">
          <a href="mailto:emilien.gerbouin@gmail.com" className="email__link"> emilien.gerbouin@gmail.com </a>
        </div>
        <div className="phone__container footer__element">
          <a href="tel:0767901035" className="phoneNumber">07.67.90.10.35</a>
        </div>
        <div className="localisation__container footer__element">
          <p className="localisation">France</p>
        </div>
      </div>
      <p className="copyright">© 2023 - Emilien Gerbouin - Tous droits réservés</p>
    </div>
  );
};

export default Footer;