import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="wmc-page-header-dark col-xs-12">
                <div className="container-fluid">
                    <div className="row" style={{paddingTop: '12px'}}>
						<i className="fa fa-bars" style={{marginRight: '12px', marginLeft: '12px'}} aria-hidden="true"></i>
						<span>FTR - Release Orders</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
