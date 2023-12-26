import React from "react";

const NewsCard = () => {
  return (
    <div className="card col-xl-4 col-sd-12 p-2 m-3" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary justify-content-end">
          Read more
        </a>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  );
};

export default NewsCard;
