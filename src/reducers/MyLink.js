import _ from 'lodash';
import React, { Component } from "react";
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as basketActions from '../../actions/basketActions';

class MyLink extends Component {

    constructor(props) {
        super(props);
        console.log("In constructor ",props.linktext)
    }
 componentDidMount(){
  
 }

componentWillReceiveProps(){
    console.log("props",this.props);
}

    render() {
        console.log("LINK TEXT FROM",this.props.linktext);
        
        if (this.props.route === this.props.to || this.props.activeLink == this.props.linktext) {
            return <span>{this.props.linktext}</span>
        }
        return <Link onClick={() =>this.props.appAction(this.props.linktext)} to={this.props.to}>{this.props.linktext}</Link>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      activeLink : state.linktext
    };
  };

  
  const mapDispatchToProps = (dispatch) => {
      return {
        appAction: (linktext) => dispatch(basketActions.appAction(linktext))
      }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyLink);