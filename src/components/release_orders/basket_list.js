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

<<<<<<< HEAD
  selectGrid(e) {
    console.log(e.target)
  }

=======
>>>>>>> 26b92826ed5a929320daaad4f0042f92b1226908
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
<<<<<<< HEAD
              onClick={this.selectGrid}
=======
>>>>>>> 26b92826ed5a929320daaad4f0042f92b1226908
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
