import React, { Component } from "react";
import PropTypes from 'prop-types';
import BasketListItem from "./basket_list_item";
import SubmissionsListItem from "./submissions_list_item"
import SubmissionsList from './submissions_list'
import { connect } from 'react-redux';
import * as basketActions from '../../actions/basketActions';
import Link from 'react-router-dom/Link';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

class SearchFilter extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.filter = this.props.filter;
    console.log("LINK TEXT : - ",this.props.linktext);
    if(this.props.linktext == 'Release Orders'){
      this.items  = this.props.baskets
    }else{
      this.items = this.props.submissions;
    }
    this.filterCount = {
      buy : (this.props.filteredBasket.filter(item => item.side == 'Buy')).length,
      sell :(this.props.filteredBasket.filter(item => item.side == 'Sell')).length
    }
  }

  componentDidMount() {
    
    if(this.props.filterCount){
       this.filterCount =  this.props.filterCount;
    }
    if(this.props.filter){
      this.filter = this.props.filter;
    }
  }

   filterBySide = (side) => {
     let security = this.props.filter && this.props.filter.security ? this.props.filter.security : '';
     let filter={side : side,security:security,timeframe:'ALL'};
     this.filter = filter;
     this.items = this.items.filteredBasket ? this.items.filteredBasket : this.items
     this.props.applyFilter(this.items,filter);
   }


  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      // console.log('histoprevPathry::' + JSON.stringify(this.props.location))
    }
  }


  

  render() {
    const { match, location, history } = this.props;
    console.log("PROPS",this.props);
    return (
      <div>
        <div>
          <div className="col-xs-12" style={{ marginBottom: '5px', marginLeft: '10px' }}>
            <div onClick={() => this.filterBySide('Buy')} className={this.filter && this.filter.side == 'Buy' ? 'activeFilter btn col-xs-6' : 'inactiveFilter btn col-xs-6'} style={{ lineHeight: '50px', width: '190px', textAlign: 'center' }}>
              <label >Buy <span className="badge filterBadge">{this.filterCount.buy}</span></label>
            </div>
            <div onClick={() => this.filterBySide('Sell')} className= {this.filter && this.filter.side =='Sell' ? 'activeFilter btn col-xs-6' : ' inactiveFilter btn col-xs-6'} style={{lineHeight: '50px', width: '190px', textAlign: 'center' }}>
              <label >Sell <span className="badge filterBadge">{this.filterCount.sell}</span></label>
            </div>
          </div>
          <div className="col-xs-12" style={{ marginBottom: '5px', marginLeft: '10px' }}>
            <div className='inactiveFilter btn col-xs-6' style={{ lineHeight: '50px', width: '190px', textAlign: 'center' }}>
              <label><Link to="/securitiesSearch" style={{color:'#333'}}>{this.filter && this.filter.security ? this.props.security : 'Security'}</Link></label>
            </div>
            <div className='inactiveFilter btn col-xs-6' style={{ lineHeight: '50px', width: '190px', textAlign: 'center' }}>
              <label >Timeframe-All</label>
            </div>
          </div>
        </div>
        <ul className="col-md-8 list-group">
        {this.props.filteredBasket.map((v, i) => {
          return (
            this.props.linktext == 'Release Orders'  ?
            <BasketListItem
            key={v.id}
            basket={v}/> : 
            <SubmissionsListItem
            key={v.id}
            submission={v}
          />
          )
        })
        }
      </ul> 
        
      </div>
    );
  }
}
//export default withRouter(SearchFilter);


const mapStateToProps = (state, ownProps) => {
  return {
      linktext : state.linktext,
      filter : state.linktext =='Release Orders' ? (state.baskets && state.baskets.filter ? state.baskets.filter:{}) : (state.submissions && state.submissions.filter ? state.submissions.filter:{}),
      filteredBasket : state.linktext =='Release Orders' ? (state.baskets.filteredBasket  || state.baskets) : (state.submissions.filteredBasket || state.submissions),
      baskets : state.baskets,
      submissions : state.submissions,
      filterCount : state.baskets.filterCount,
       
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    applyFilter: (filteredBasket,filter) => dispatch(basketActions.applyFilter(filteredBasket,filter))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchFilter));