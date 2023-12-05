import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";

const Blog = () => {
  return (
    <>
      <Meta title={"Blogi"} />
      <BreadCrumb title={"Blogi"} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Szukaj w/g kategorii</h3>
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
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6 mb-3">
                  <BlogCard />
                </div>
                <div className="col-6 mb-3">
                  <BlogCard />
                </div>
                <div className="col-6 mb-3">
                  <BlogCard />
                </div>
                <div className="col-6 mb-3">
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
