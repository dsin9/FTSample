import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render() {
        const { match, location, history } = this.props;
        return (
            <div className="row" style={{ marginBottom: '10px' }}>
                <div className="col-xs-12">
                    <div className="bs-component">
                        <nav className="navbar navbar-ilp">
                            <div className="container-fluid" style={{ marginLeft: '15px' }}>
                                <div className="navbar-header">
                                    <a href="#" className="navbar-brand">
                                        <i className="navbar-brand fa fa-bars" style={{fontSize: '17px' }}></i>
                                        {this.props.linktext}
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        linktext : state.linktext
                
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
     
    }
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
