import React, { Component } from "react";
import PropTypes from 'prop-types';
import BasketList from "./basket_list";
import SubmissionsList from './submissions_list';
import { connect } from 'react-redux';
import * as basketActions from '../../actions/basketActions';
import {Route, withRouter} from 'react-router-dom';

class FtrLanding extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.fetchPreferences();
    }

    render() {
        console.log('this.props.preferences.landingPage:'+this.props.preferences.landingPage)
        if(this.props.preferences.landingPage === 'Release Orders') {
            this.props.history.push("/releaseOrder");
        }
        if(this.props.preferences.landingPage === 'Track Submissions') {
            this.props.history.push("/trackSubmission");
        }
        return (
            <div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        preferences: state.preferences
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPreferences: () => dispatch(basketActions.fetchPreferences())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FtrLanding));
