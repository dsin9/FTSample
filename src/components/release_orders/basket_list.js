import React, { Component } from "react";
import PropTypes from 'prop-types';
import BasketListItem from "./basket_list_item";
import { connect } from 'react-redux';
import * as basketActions from '../../actions/basketActions';

class BasketList extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchBaskets();
  }

  componentWillReceiveProps() {
    window.previousLocation = this.props.location;
  }

  render() {
    const { label, goBack } = this.props;
    console.log('goBack:'+goBack)
    return (
      <ul className="col-md-8 list-group">
        {this.props.baskets.map((v, i) => {
          return (
            <BasketListItem
              key={v.id}
              basket={v}
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
    baskets: state.baskets
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBaskets: () => dispatch(basketActions.fetchBaskets())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketList);
