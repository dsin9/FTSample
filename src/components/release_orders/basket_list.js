import React from "react";
import BasketListItem from "./basket_list_item";

const BasketList = props => {
  const basketItems = props.baskets.map(basket => {
    return (
      <BasketListItem
        key={basket.id}
        basket={basket}
      />
    );
  });

  return (
    <ul className="col-md-8 list-group">
      {basketItems}
    </ul>
  );
};

export default BasketList;
