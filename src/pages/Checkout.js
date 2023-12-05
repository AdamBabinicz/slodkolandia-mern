import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Słodkolandia wita:</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Koszyk wynajmu
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Informacje
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Transport
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Płatność
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Informacje kontaktowe</h4>
              <p className="user-details total">
                Swędzipełk Nironowiczkiewiczkowski (puaro@vp.pl)
              </p>
              <h4 className="mb-3">Adres do dostawy</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    name=""
                    className="form-control form-select"
                    id=""
                    defaultValue
                  >
                    <option value="" disabled>
                      Wybierz Kraj
                    </option>
                    {/* <option value="polska">Polska</option>
                      <option value="niemcy">Niemcy</option> */}
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Imię"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Nazwisko"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Adres"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Ulica, nr domu, nr mieszkania"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Miasto"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Wybierz województwo
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Kod"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <IoMdArrowRoundBack className="me-2" /> Powrót do koszyka
                    </Link>
                    <Link to="/cart" className="button">
                      Kontynuuj wynajem
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img
                      className="img-fluid"
                      src="/images/watch.jpg"
                      alt="..."
                    />
                  </div>
                  <div>
                    <h5 className="total-price">tekst</h5>
                    <p className="total-price">s / #tekst</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">100 zł</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Suma częściowa</p>
                <p className="total-price">1000 zł</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Transport</p>
                <p className="mb-0 total-price">20 zł</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Razem</h4>
              <h5 className="total-price">1000 zł</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
