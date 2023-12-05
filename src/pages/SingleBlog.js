import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamiczna nazwa bloga"} />
      <BreadCrumb title={"Dynamiczna nazwa bloga"} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <FaLongArrowAltLeft className="fs-4" />
                Powrót do blogów
              </Link>
              <h3 className="title">Lorem ipsum dolor sit.</h3>
              <img
                src="/images/blog-1.jpg"
                className="img-fluid w-100 my-4"
                alt="..."
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae iste facilis dolorum accusantium? Porro suscipit
                deserunt cumque eaque molestiae inventore ea quod nesciunt
                tempora veritatis consectetur ab error, consequuntur repellat,
                quos explicabo consequatur minima sequi nobis neque a molestias
                sunt. Fugiat neque totam accusamus vero cumque quas provident,
                delectus nam.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
