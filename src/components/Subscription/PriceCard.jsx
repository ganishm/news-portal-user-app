import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const PriceCard = ({ details }) => {
  return (
    <div className="col-lg-4 col-md-8">
      <div className="card mb-5 mb-lg-0  border border-primary">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{details.title}</h5>
          <h6 className="card-price text-center">${details.pack}<span className="period">/month</span></h6>
          <hr />
            <ul className="fa-ul">
              {details.features.map((item) => {
                return (
                  <li className={item.value ? '' : 'text-muted'}>
                    <span className="fa-li">
                      {item.value ? (
                        <FontAwesomeIcon icon={faCheck} />
                      ) : (
                        <FontAwesomeIcon icon={faXmark} />
                      )}
                    </span>
                    {item.access}
                  </li>
                );
              })}
            </ul>
            <div className="d-grid">
              <button className="btn btn-primary text-uppercase">Subcribe</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;