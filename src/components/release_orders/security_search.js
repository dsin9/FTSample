import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as securityActions from '../../actions/securityActions';
import { withRouter } from 'react-router';
import SearchInput, {createFilter} from 'react-search-input';
import Link from 'react-router-dom/Link';
import * as basketActions from '../../actions/basketActions';

const KEYS_TO_FILTERS = ['symbol']

const svgs = require.context('../../../node_modules/svg-country-flags/svg/', true, /\.svg$/)
const keys = svgs.keys();

class SecuritySearch extends Component {


    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }

  constructor(props, context) {
    super(props, context);
    this.state = {
        searchTerm: ''
      }
      this.searchUpdated = this.searchUpdated.bind(this)

      if(this.props.linktext == 'Release Orders'){
        this.items  = this.props.baskets
      }else{
        this.items = this.props.submissions;
      }
  }
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
  selectSecurity(symbol){
      let filter = typeof this.props.filter == 'function' ? {}: this.props.filter;
      filter.security = symbol;
      filter.side = filter.side ? filter.side : '';
      filter.timeframe = filter.timeframe ? filter.timeframe : '';
      this.props.applyFilter(this.items,filter);
      this.props.updateCount(this.items,filter);
      this.props.history.push('/app/filter'); 
  }
  componentDidMount() {
    this.props.fetchSecurities(this.items);
  }

  componentWillReceiveProps() {
    
  }

  render() {
    console.log("Security props",this.props);
    
    const filteredSecurities = this.props.securities.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
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
                                        Select a security
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
            <div className="col-xs-12" style={{backgroundColor:'white',height:'40px'}}>
                <SearchInput className="search-input col-xs-12" onChange={this.searchUpdated} />
            </div>
        </div>
        <div className="row">
                <li className="list-group-item  col-xs-12" style={{position:'relative',display:'block',padding:'10px 15px',border:'none',background:'none'}}>
                    
                    {filteredSecurities.map(security => {
                    return (
                        <div className="col-xs-12 securitySearchDiv" key={security.symbol} onClick={()=>this.selectSecurity(security.symbol)}>
                            <img className='col-xs-4' src={svgs("./" + security.flag.toLowerCase() + ".svg")}/>
                            <div className="col-xs-8" style={{display:'inline-block',marginTop:'3px' }}>{security.symbol}</div>    
                        </div>
                        )
                    })}
                </li>
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    securities: state.securities,
    filter : state.linktext =='Release Orders' ? (state.baskets && state.baskets.filter ? state.baskets.filter:{}) : (state.submissions && state.submissions.filter ? state.submissions.filter:{}),
    baskets : state.baskets,
    submissions : state.submissions,
    linktext : state.linktext,
    filteredBasket : state.linktext =='Release Orders' ? (state.baskets.filteredBasket  || state.baskets) : (state.submissions.filteredBasket || state.submissions)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSecurities: (items) => dispatch(securityActions.fetchSecurities(items)),
    applyFilter: (filteredBasket,filter) => dispatch(basketActions.applyFilter(filteredBasket,filter)),
    updateCount : (filteredBasket,filter) => dispatch(basketActions.updateCount(filteredBasket,filter))    
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SecuritySearch));

