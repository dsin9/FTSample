import React from "react";

const BasketDetail = ({ basket }) => {
  if (!basket) {
    return <div>Loading...</div>;
  }

  // const basketId = basket.id.basketId;
  // const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="basket-detail col-md-6">
      {/* <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div> */}
      <div className="details">
        <div>{basket.intentSummary} ({basket.noOfOrders} Orders)</div>
        <div>{basket.instruction}</div>
        <div>{basket.createdBy}</div>
        <div>{basket.intentOwner}</div>
        <div>{basket.age}</div>
        <div>(Compliance: {basket.lastComplianceCheck})</div>
      </div>
    </div>
  );
};

export default BasketDetail;
