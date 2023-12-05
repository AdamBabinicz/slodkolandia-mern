import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="..." />
        <div className="blog-content">
          <p className="date">23.11.2023 r.</p>
          <h5 className="title">Jakiś artykuł</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
            illum consequatur!
          </p>
          <Link className="button" to="/blog/:id">
            Więcej
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
