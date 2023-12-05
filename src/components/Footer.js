import React from "react";
import {
  FaLocationArrow,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaGoogle,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                {/* <img src="images/newsletter.png" alt="..." /> */}
                <FaLocationArrow className="text-white fs-2" />
                <h3 className="mb-0 text-white">
                  Zarejestruj się aby otrzymać newsletter
                </h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Twój adres mailowy"
                  aria-label="Twój adres mailowy"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subskybuj
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Kontakt z nami</h4>
              <div>
                <address className="text-white fs-6">
                  Biuro: 26-610 Radom,
                  <br /> ul. Żeromskiego 95/97
                </address>
                <a
                  href="tel:+48531890827"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +48 531 890 827
                </a>
                <a
                  href="mailto:                          mariusz1989poczta@wp.pl
"
                  className="mt-2 d-block mb-0 text-white"
                >
                  mariusz1989poczta@wp.pl
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a href="">
                    <FaTwitter className="text-white fs-4" />
                  </a>
                  <a href="">
                    <FaFacebookF className="text-white fs-4" />
                  </a>
                  <a href="">
                    <FaPinterestP className="text-white fs-4" />
                  </a>
                  <a href="">
                    <FaGoogle className="text-white fs-4" />
                  </a>
                  <a href="">
                    <FaYoutube className="text-white fs-4" />
                  </a>
                  <a href="">
                    <FaInstagram className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Informacje</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Polityka prywatności
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Regulamin
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Transport
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Warunki terminowe
                </Link>
                <Link className="text-white py-2 mb-1">Blogi</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Konto</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">O nas</Link>
                <Link className="text-white py-2 mb-1">Pytania</Link>
                <Link className="text-white py-2 mb-1">Kontakt</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Dobre linki</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Namioty</Link>
                <Link className="text-white py-2 mb-1">Stoły</Link>
                <Link className="text-white py-2 mb-1">Krzesła</Link>
                <Link className="text-white py-2 mb-1">Dmuchańce</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                Radom, 2023 - {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
