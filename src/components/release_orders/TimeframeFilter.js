import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as timeframeActions from '../../actions/timeframeActions';
import { withRouter } from 'react-router';
import Link from 'react-router-dom/Link';
import * as basketActions from '../../actions/basketActions';

const KEYS_TO_FILTERS = ['symbol']

const svgs = require.context('../../../node_modules/svg-country-flags/svg/', true, /\.svg$/)
const keys = svgs.keys();

class TimeframeFilter extends Component {


    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }

  constructor(props, context) {
    super(props, context);
     if(this.props.linktext == 'Release Orders'){
        this.items  = this.props.baskets
      }else{
        this.items = this.props.submissions;
      }
  }
  selectTimeframe(timeframe){
    let filter = typeof this.props.filter == 'function' ? {}: this.props.filter;
      filter.timeframe = timeframe;
      filter.security = filter.security ? filter.security : '';
      filter.side = filter.side ? filter.side : '';
      this.props.applyFilter(this.items,filter);
      this.props.updateCount(this.items,filter);
      this.props.history.push('/app/filter'); 
  }
  componentDidMount() {
    this.props.fetchTimeframes(this.props.linktext);
  }

  componentWillReceiveProps() {
    
  }

  render() {
    console.log("Security props",this.props);
      return (
        <div className="container-fluid" style={{ marginLeft: '-10px', marginRight: '-35px' }}>
        <div className="row">
            <header>
                <div className="col-xs-12">
                    <div className="bs-component">
                        <nav className="navbar navbar-ilp">
                            <div className="container-fluid" style={{ marginLeft: '15px' }}>
                                <div className="navbar-header">
                                    <a href="#" className="navbar-brand">
                                        <i style={{fontSize: '17px' }}></i>
                                        Select a Timeframe
                                    </a>
                                    
                                <Link to="/app/filter" style={{float: 'right',marginRight: '20px',marginTop: '7px'}}>
                                    <button type="button" className="btn btn-sm" style={{backgroundColor: 'black',color:'#fff',fontSize:'17px'}}>
                                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                    </button></Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
        <div className="row" style={{marginTop:'5px',marginLeft:'30px'}}>
                {
                    this.props.timeframes.map((timeframe,index) => {
                    return (
                        <div className="col-xs-5 timeframeSelect" key={index} onClick={()=>this.selectTimeframe(timeframe)}>
                              {timeframe}
                        </div>
                        )
                })}
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    timeframes: state.timeframes,
    filter : state.linktext =='Release Orders' ? (state.baskets && state.baskets.filter ? state.baskets.filter:{}) : (state.submissions && state.submissions.filter ? state.submissions.filter:{}),
    baskets : state.baskets,
    submissions : state.submissions,
    linktext : state.linktext,
    filteredBasket : state.linktext =='Release Orders' ? (state.baskets.filteredBasket  || state.baskets) : (state.submissions.filteredBasket || state.submissions)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTimeframes: (items) => dispatch(timeframeActions.fetchTimeframes(items)),
    applyFilter: (filteredBasket,filter) => dispatch(basketActions.applyFilter(filteredBasket,filter)),
    updateCount : (filteredBasket,filter) => dispatch(basketActions.updateCount(filteredBasket,filter))    
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimeframeFilter));

