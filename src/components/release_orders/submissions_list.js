import React, { Component } from "react";
import PropTypes from 'prop-types';
import SubmissionsListItem from "./submissions_list_item";
import { connect } from 'react-redux';
import * as basketActions from '../../actions/basketActions';

class SubmissionsList extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchSubmissions();
  }


  render() {
    return (
      <ul className="col-md-8 list-group">
        {this.props.submissions.map((v, i) => {
          return (
            <SubmissionsListItem
              key={v.id}
              submission={v}
            />
          )
        })
        }
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    submissions: state.submissions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSubmissions: () => dispatch(basketActions.fetchSubmissions())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionsList);