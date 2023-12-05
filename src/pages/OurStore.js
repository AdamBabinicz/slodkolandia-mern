import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Wynajem"} />
      <BreadCrumb title={"Wynajem"} />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Wynajmuj w/g kategorii</h3>
              <div>
                <ul className="ps-0">
                  <li>Namioty</li>
                  <li>Stoły</li>
                  <li>Krzesła</li>
                  <li>Dmuchańce</li>
                  <li>Urządzenia</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filtruj w/g</h3>
              <div>
                <h5 className="sub-title">Dostępność</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label htmlFor="" className="form-check-label">
                    W magazynie (1)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label htmlFor="" className="form-check-label">
                    Obecnie brak na stanie (0)
                  </label>
                </div>
                <h5 className="sub-title">Cena</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input type="text" className="form-control" />
                    <label
                      htmlFor="floatingInput"
                      id="floatingInput"
                      placeholder="Od"
                    >
                      Od
                    </label>
                  </div>
                  <div className="form-floating">
                    <input type="text" className="form-control" />
                    <label
                      htmlFor="floatingInput"
                      id="floatingInput1"
                      placeholder="Do"
                    >
                      Do
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Kolory</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Rozmiar</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Tagi produktów</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Namiot
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Stół
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Krzesło
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Dmuchaniec
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Urządzenie
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Losowy produkt</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/assets/1.png"
                      alt="..."
                      className="img-fluid px-3"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Namiot imprezowy</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>1200 zł</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/assets/3.png"
                      alt="..."
                      className="img-fluid px-3"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Stół kateringowy</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>25 zł</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block">Sortuj&nbsp;w/g:</p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Wyróżniony</option>
                    <option value="best-selling">Najlepsza cena</option>
                    <option value="title-ascending">Alfabetycznie, A-Z</option>
                    <option value="title-descending">Alfabetycznie, Z-A</option>
                    <option value="price-ascending">
                      Cena, od najniższej do najwyższej
                    </option>
                    <option value="price-descending">
                      Cena, od najwyzszej do najniższej
                    </option>
                    <option value="created-ascending">
                      Data, od najstarszej do najnowszej
                    </option>
                    <option value="created-descending">
                      Data, od najnowszej do najstarszej
                    </option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 produkty</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="..."
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="..."
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="..."
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
