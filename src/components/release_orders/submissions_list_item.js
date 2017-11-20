import React from "react";

const SubmissionsListItem = ({ basket, trackSubmissions }) => {
  // const imageUrl = basket.snippet.thumbnails.default.url;

  return (
    <li onClick={() => trackSubmissions(basket)} className="list-group-item">
      <div className="basket-list media">
        {/* <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div> */}
        <div className="media-body">
          <div className="media-heading">{basket.intentSummary}</div>
        </div>
      </div>
    </li>
  );
};

export default SubmissionsListItem;
