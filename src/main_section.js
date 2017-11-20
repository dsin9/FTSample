import React, { Component } from 'react';
import SearchBar from './components/search/search_bar';
import BasketList from "./components/release_orders/basket_list";

class MainSection extends Component {

    constructor(props) {
        super(props);

        const baskets = [
            {
                id: 2000,
                side: "Buy",
                flag: "Euro",
	            symbol: "RXZ7",
	            size: 0.2,
	            measure: "CTD",
	            complianceStatus: "yellow"
            },
            {
                id: 2001,
                side: "Buy",
                flag: "Euro",
	            symbol: "RXZ7",
	            size: 0.2,
	            measure: "CTD",
	            complianceStatus: "yellow"
            },
            {
                id: 2003,
                side: "Buy",
                flag: "Euro",
	            symbol: "RXZ7",
	            size: 0.2,
	            measure: "CTD",
	            complianceStatus: "yellow"
            },
            {
                id: 2004,
                side: "Buy",
                flag: "Euro",
	            symbol: "RXZ7",
	            size: 0.2,
	            measure: "CTD",
	            complianceStatus: "yellow"
            }
        ];

        this.state = {
            baskets: baskets,
            selectedBasket: baskets[0]
        };
    }

    render() {
        // const { activeTab, isLoading } = this.props;

        return (
            <div>
                <SearchBar />
                <BasketList
                    baskets={this.state.baskets}
                />
            </div>
        );
    }
}

export default MainSection;
