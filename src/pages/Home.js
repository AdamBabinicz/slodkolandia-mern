import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { FaTents } from "react-icons/fa6";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/assets/6.jpg"
                alt="..."
                className="img-fluid rounded-3"
              />
              <div className="main-banner-content position-absolute">
                <h4>biały</h4>
                <h5>Namiot imprezowy</h5>
                <p>dla 60 osób</p>
                <Link className="button">Wynajmij teraz!</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/assets/5.jpg"
                  alt="..."
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>biały</h4>
                  <h5>Stół kateringowy</h5>
                  <p>dla 6 osób</p>
                  {/* <Link className="button">Wynajmij reraz!</Link> */}
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/assets/9.jpg"
                  alt="..."
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>biały</h4>
                  <h5>Krzesło</h5>
                  <p>dla 1 osoby</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/assets/10.jpg"
                  alt="..."
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>różnokolorowy</h4>
                  <h5>Dmuchaniec</h5>
                  <p>dla dzieci</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/assets/11.jpg"
                  alt="..."
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>&nbsp;</h4>
                  <h5>Wata cukrowa, popcorn</h5>
                  <p>dla dzieci i dorosłych</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="..." />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-around flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>
                    <b>Namioty</b>
                  </h6>
                  <p>2 produkty</p>
                </div>
                <img
                  src="images/assets/1.png"
                  alt="..."
                  className="img-fluid rounded-3 cat"
                />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>
                    <b>Stoły</b>
                  </h6>
                  <p>10 produktów</p>
                </div>
                <img
                  src="images/assets/3.png"
                  alt="..."
                  className="img-fluid rounded-3 cat"
                />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>
                    <b>Krzesła</b>
                  </h6>
                  <p>60 produktów</p>
                </div>
                <img
                  src="images/assets/2.png"
                  alt="..."
                  className="img-fluid rounded-3 cat"
                />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>
                    <b>Dmuchańce</b>
                  </h6>
                  <p>3 produkty</p>
                </div>
                <img
                  src="images/assets/4.png"
                  alt="..."
                  className="img-fluid rounded-3 cat"
                />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>
                    <b>Urządzenia do waty&nbsp;cukrowej</b>
                  </h6>
                  <p>2 produkty</p>
                </div>
                <img
                  src="images/assets/12.png"
                  alt="..."
                  className="img-fluid rounded-3 cat"
                />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>
                    <b>Urządzenia do popcornu</b>
                  </h6>
                  <p>2 produkty</p>
                </div>
                <img
                  src="images/assets/5.png"
                  alt="..."
                  className="img-fluid rounded-3 cat"
                />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>
                    <b>Fontanna czekoladowa</b>
                  </h6>
                  <p>1 produkt</p>
                </div>
                <img
                  src="images/assets/11.png"
                  alt="..."
                  className="img-fluid rounded-3 cat"
                />
              </div>
              {/* <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Dmuchańce</h6>
                    <p>3 produkty</p>
                  </div>
                  <img src="images/camera.jpg" alt="..." />
                </div> */}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Wyróżnione dmuchańce na wynajem</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/assets/3.jpg"
                className="img-fluid rounded-3"
                alt="..."
              />
              <div className="famous-content position-absolute">
                <h5>Namiot biały</h5>
                <h6>Na 60 osób.</h6>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/assets/12.jpg"
                className="img-fluid rounded-3"
                alt="..."
              />
              <div className="famous-content position-absolute">
                <h5>Stoły</h5>
                <h6>Jeden dla 6 osób.</h6>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/assets/16.jpg"
                className="img-fluid rounded-3"
                alt="..."
              />
              <div className="famous-content position-absolute">
                <h5>Dmuchaniec "Kubuś"</h5>
                <h6>Zjeżdżalnia duża (5x8x6,5).</h6>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/assets/17.jpg"
                className="img-fluid rounded-3"
                alt="..."
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Urządzenie do popcornu</h5>
                <h6 className="text-dark">Świeży, smaczny popcorn.</h6>
                <p className="text-dark">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Urządzenia gastronomiczne na wynajem
            </h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4">
                  <FaTents className="fs-2" />
                  &nbsp; Wynajmujemy fabrycznie nowe produkty i urządzenia wraz
                  z obsługą. Posiadamy certyfikaty na dmuchańce oraz
                  ubezpieczenie OC.
                </div>
              </Marquee>
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
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Ostatnie blogi</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
