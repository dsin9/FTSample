import React from "react";
import SubmissionsListItem from "./basket_list_item";

const SubmissionsList = props => {
  const submissionItems = props.baskets.map(basket => {
    return (
      <SubmissionsListItem
        trackSubmissions={props.trackSubmissions}
        key={basket.id}
        basket={basket}
      />
    );
  });

  return (
    <ul className="col-md-8 list-group">
      {submissionItems}
    </ul>
  );
};

export default SubmissionsList;
