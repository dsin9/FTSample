import React, { Component } from 'react';
import SearchBar from './components/search/search_bar';
import BasketList from "./components/release_orders/basket_list";

class MainSection extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-xs-12">
                <SearchBar />
            </div>

        );
    }
}

export default MainSection;
