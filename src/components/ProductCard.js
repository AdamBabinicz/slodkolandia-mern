import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="/images/wish.svg" alt="..." />
            </button>
          </div>
          <div className="product-image">
            <img src="/images/assets/14.png" className="img-fluid" alt="..." />
            <img src="/images/assets/13.png" className="img-fluid" alt="..." />
          </div>
          <div className="product-details">
            <h6 className="brand">Słodkolandia</h6>
            <h5 className="product-title">Zjeżdżalnia dmuchana "Kubuś"</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              fuga aliquam doloremque voluptate?
            </p>
            <p className="price">1200 zł</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="/images/prodcompare.svg" alt="..." />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="..." />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="..." />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}
      >
        <Link to="/" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="/images/wish.svg" alt="..." />
            </button>
          </div>
          <div className="product-image">
            <img src="/images/assets/14.png" className="img-fluid" alt="..." />
            <img src="/images/assets/13.png" className="img-fluid" alt="..." />
          </div>
          <div className="product-details">
            <h6 className="brand">Słodkolandia</h6>
            <h5 className="product-title">Zjeżdżalnia dmuchana "Kubuś"</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              cumque, animi itaque veniam.
            </p>
            <p className="price">1200 zł</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="/images/prodcompare.svg" alt="..." />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/view.svg" alt="..." />
              </button>
              <button className="border-0 bg-transparent">
                <img src="/images/add-cart.svg" alt="..." />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
