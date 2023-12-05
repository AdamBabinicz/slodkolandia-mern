import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { MdOutlineSmartphone } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Kontakt z nami"} />
      <BreadCrumb title={"Kontakt z nami"} />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.173519783135!2d21.164759976344126!3d51.399866318553755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718f76aaaaaaaab%3A0xe5f5c98b6b743863!2sS%C5%81ODKOLANDIA%20wita!5e0!3m2!1spl!2spl!4v1701101787688!5m2!1spl!2spl"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Kontakt</h3>
                <p>* mapa przedstawia adres biura</p>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Imię i nazwisko"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Numer telefonu"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      readOnly
                      style={{ resize: "none" }}
                      placeholder="Komentarz"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Wyślij</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Skontaktuj się z nami</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoHomeOutline className="fs-5" />
                      <address className="mb-0">
                        26-610 Radom, Żeromskiego 95/97
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <MdOutlineSmartphone className="fs-5" />
                      <a href="tel:+48531890827">+48 531 890 827</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <TfiEmail className="fs-5" />
                      <a href="mailto:mariusz1989poczta@wp.pl">
                        mariusz1989poczta@wp.pl
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoMdInformationCircleOutline className="fs-5" />
                      <p className="mb-0">Pon - Sob 8.00 - 17.00</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
