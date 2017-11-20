import React from "react";
// import CFlag from '../gb.svg';

const BasketListItem = ({ basket }) => {

  return (
    <li className="list-group-item  col-xs-12">
      <div className="basket-list media">
        <div className="media-body">
          <div className="media-heading">{basket.side}&nbsp;{basket.symbol}&nbsp;{basket.size}&nbsp;{basket.measure}</div>
        </div>
      </div>
    </li>
  );
};

export default BasketListItem;
