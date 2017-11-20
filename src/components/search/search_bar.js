import _ from 'lodash';
import React, { Component } from "react";

class SearchBar extends Component {
	
  constructor(props) {
        super(props);

        this.setQuickFilter = _.debounce(
            (text) => {
                const { setQuickFilterText } = this.props;
                if (_.isFunction(setQuickFilterText)) {
                    setQuickFilterText(text);
                }
            }, 500);
    }
	
	

    handleSearchChange = (event) => {
        const text = event.target.value;
        this.setQuickFilter(text);
    }

  render() {
		const { quickSearchText } = this.props;
		
    return (
	<div className="col-xs-12">
		<div className="col-xs-8">
            <span><a href="#">Release Orders</a> | <a href="#">Track Submissions</a></span>
            </div>
		<div className="search-box-container col-xs-4" style={{paddingLeft: '55px'}}>
			<input type="text" placeholder="Search" style={{width: '70px', height: '20px', textAlign: 'right', border: 'none', background: 'transparent'}}  />
		</div>
	</div>
    );
  }
}

export default SearchBar;
