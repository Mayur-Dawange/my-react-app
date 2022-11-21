import React from "react";
import "./Servicecard.scss";
import clovenIcon from "../../assets/img/cloven-icon.png";

const Servicecard = (props) => {
  return (
    <div className="col-lg-4 col-md-7 col-sm-9">
      <div className="project-case-item mt-30">
        <div className="project-case-thumb">
          <img
            src={props.cardimg}
            alt="service-cards"
            height="260px"
            className="service-card-img"
          />
          <img src={clovenIcon} className="clovenIcon" alt="" />
        </div>
        <div className="project-case-content text-center">
          <img
            src="https://webtend.net/demo/html/cloven/assets/images/project-shadow.png"
            alt="shadowimage"
          />
          <h4 className="title font-weight-600">{props.cardtitle}</h4>
          <span>{props.cardsubtitle}</span>
          <p>{props.cardsrtdesc}</p>
          <button className="btn btn-primary">
            View Details <i className="fal fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Servicecard;
