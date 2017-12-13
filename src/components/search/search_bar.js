import _ from 'lodash';
import React, { Component } from "react";
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as basketActions from '../../actions/basketActions';
import MyLink from './MyLink';

class SearchBar extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }
    clearFilters(){
        if(this.props.location.pathname=='/app/filter' && !this.props.filter){
            this.props.applyFilter(this.props.filteredBasket,{});
            this.props.updateCount(this.props.filteredBasket,{});
        }else{
            this.props.history.push('/app/filter');
        }
    }

    render() {
        const { match, location, history } = this.props;
        return (
            <div className="col-xs-12" style={{ marginBottom: '10px', marginTop: '-10px', marginLeft: '-6px',color:'#666666' }}>
                <ul className="col-md-8 list-group">
                    <li className="list-group-item  col-xs-12">
                        <div className="basket-list media">
                            <div className="media-body">
                                <div className="col-xs-8">
                                    <MyLink to='/releaseOrder' linktext='Release Orders' route={this.props.location.pathname}>Release Orders</MyLink>&nbsp;|&nbsp;
                                    <MyLink to='/trackSubmission' linktext='Track Submissions' route={this.props.location.pathname}>Track Submissions</MyLink>
                                </div>
                                <div className="search-box-container col-xs-4" style={{ paddingLeft: '50px' }}>
                                    <label onClick={()=>this.clearFilters()}>
                                        <input type="text" placeholder="Search" disabled={'disabled'} style={{ width: '70px', height: '20px', textAlign: 'right', border: 'none', background: 'transparent',fontWeight:'normal' }} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        filteredBasket : state.linktext =='Release Orders' ? state.baskets : state.submissions,
        filter : state.filter
    };
  };

  
  const mapDispatchToProps = (dispatch) => {
    return {
    applyFilter: (filteredBasket,filter) => dispatch(basketActions.applyFilter(filteredBasket,filter)),
    updateCount : (filteredBasket,filter) => dispatch(basketActions.updateCount(filteredBasket,filter))    
    }
  };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
