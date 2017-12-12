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
      let filter = this.props.filter || {};
      filter.security = symbol;
      this.props.applyFilter(this.props.filteredBasket,filter);
      this.props.history.push('/app/filter'); 
  }
  componentDidMount() {
    let items;
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
            <div className="navbar-header col-xs-12">
                <header>
                <div className="row" style={{ marginBottom: '10px' }}>
                <div className="col-xs-12">
                    <div className="bs-component">
                        <nav className="navbar navbar-ilp">
                            <div className="container-fluid" style={{ marginLeft: '15px' }}>
                                <div className="navbar-header">
                                    <a href="#" className="navbar-brand">
                                        <i style={{fontSize: '17px' }}></i>
                                          Select a security
                                    </a>
                                    <Link to="/app/filter" href="#" className="navbar-brand" >
                                        <i style={{fontSize: '17px' }}></i>
                                        CLOSE
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
                </header>
            </div>
            <main className="main-section">
            <div className="col-xs-12">
                <SearchInput className="search-input col-xs-12" onChange={this.searchUpdated} />
            </div>
            </main>
        </div>
        <div className="row">
                <li className="list-group-item  col-xs-12" style={{ width: '90%', marginLeft: '11px', marginBottom: '8px', borderLeftStyle: 'solid'}}>
                    
                    {filteredSecurities.map(security => {
                    return (
                        <div className="col-xs-12 securitySearchDiv" key={security.symbol} onClick={()=>this.selectSecurity(security.symbol)}>
                            <img className='col-xs-4' src={svgs("./" + security.flag.toLowerCase() + ".svg")}/>
                            <div className="col-xs-8" style={{display:'inline-block' }}>{security.symbol}</div>    
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
    applyFilter: (filteredBasket,filter) => dispatch(basketActions.applyFilter(filteredBasket,filter))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SecuritySearch));

