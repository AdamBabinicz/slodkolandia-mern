import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { LuGitCompare } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 600,
    height: 450,
    zoomWidth: 600,
    img: "/images/assets/1.jpg",
  };

  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Dynamiczna nazwa produktu"} />
      <BreadCrumb title={"Dynamiczna nazwa produktu"} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="/images/assets/1.png"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src="/images/assets/1.png"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src="/images/assets/1.png"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src="/images/assets/1.png"
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">Namiot imprezowy dla 60 osób</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">1200 zł</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 recenzje )</p>
                </div>
                <a className="review-btn" href="#review">
                  Napisz recenzję
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Typ:</h3>
                  <p className="product-data">Rozrywka</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Marka:</h3>
                  <p className="product-data">Słodkolandia</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Kategoria:</h3>
                  <p className="product-data">Namioty</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tagi:</h3>
                  <p className="product-data">Namioty</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Dostępność:</h3>
                  <p className="product-data">W magazynie</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Rozmiar:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Kolor:</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Ilość:</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">
                      Dodaj do koszyka
                    </button>
                    <button className="button signup">Wynajmij teraz</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <LuGitCompare className="fs-5 me-2" />
                      Dodaj do porównania
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <MdFavoriteBorder className="fs-5 me-2" />
                      Dodaj do listy
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Rozmiar:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Transport:</h3>
                  <p className="product-data">
                    Przy zamówieniu powyżej 1000 zł <b>Gratis!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Link do produktu:</h3>
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      copyToClipboard(
                        "https://www.slodkolandia.cba.pl/img/n/17.jpg"
                      );
                    }}
                  >
                    Kopiuj link produktu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Opis</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                ullam quam aliquid natus voluptatum tempora quas quisquam,
                corporis deleniti, earum autem omnis est commodi dolor fuga.
                Similique perspiciatis consequatur eaque!
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Recenzje</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Opinie klientów</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Na podstawie 2 recenzji</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a href="" className="text-dark text-decoration-underline">
                      Napisz recenzję
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4> Napisz recenzję</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={true}
                      activeColor="#ffd700"
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
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Wyślij recenzję</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Nawigacja</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reprehenderit delectus, modi mollitia quam nihil fugiat
                    voluptatum tempore. Explicabo libero dolor repellendus
                    maiores animi, distinctio enim, odio tempore ducimus, sunt
                    quod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Nasze popularne produkty na wynajem
            </h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
