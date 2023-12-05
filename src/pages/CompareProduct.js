import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Porównaj produkty"} />
      <BreadCrumb title={"Porównaj produkty"} />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="..."
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="..." />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>
                <h6 className="price mb-3 mt-3">100 zł</h6>
                <div>
                  <div className="product-detail">
                    <h5>Marka:</h5>
                    <p>Lorem</p>
                  </div>
                  <div className="product-detail">
                    <h5>Typ:</h5>
                    <p>Namiot</p>
                  </div>
                  <div className="product-detail">
                    <h5>Dostępność:</h5>
                    <p>W magazynie</p>
                  </div>
                  <div className="product-detail">
                    <h5>Kolor:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Rozmiar:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="..."
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="..." />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>
                <h6 className="price mb-3 mt-3">100 zł</h6>
                <div>
                  <div className="product-detail">
                    <h5>Marka:</h5>
                    <p>Lorem</p>
                  </div>
                  <div className="product-detail">
                    <h5>Typ:</h5>
                    <p>Namiot</p>
                  </div>
                  <div className="product-detail">
                    <h5>Dostępność:</h5>
                    <p>W magazynie</p>
                  </div>
                  <div className="product-detail">
                    <h5>Kolor:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Rozmiar:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
