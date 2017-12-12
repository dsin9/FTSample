import React from "react";

const svgs = require.context('../../../node_modules/svg-country-flags/svg/', true, /\.svg$/)
const keys = svgs.keys();

const BasketListItem = ({ basket }) => {
  if (!basket) {
    return (<h3>Loading...</h3>)
  }
  return (
    <li className="list-group-item  col-xs-12" style={{ width: '90%', marginLeft: '11px', marginBottom: '8px', borderLeftStyle: 'solid', borderLeftWidth: (basket.complianceStatus) ? '10px' : '0px', borderLeftColor: basket.complianceStatus }}>
      <div className="basket-list media" style={{ marginLeft: '-12px' }}>
        <div className="media-body">
          <div className="col-xs-6">
            <span style={{ marginLeft: (basket.complianceStatus) ? '0px' : '10px', color: (basket.side == 'Buy') ? 'Blue' : 'Red', marginRight: '3px' }}>{basket.side}</span>
            &nbsp;<img src={svgs("./" + basket.flag.toLowerCase() + ".svg")} style={{ width: '30px' }} />
            &nbsp;<span style={{ marginLeft: '5px' }}>{basket.symbol}</span>
            &nbsp;{basket.remainingSize}
            &nbsp;<span style={{ marginRight: '3px' }}>{basket.measure}</span>
          </div>
          {basket.side2 != undefined &&
            <div className="col-xs-6" style={{ display: basket.side2 != undefined ? 'block' : 'none' }}>
              <span style={{ marginLeft: '-5px' }}>vs.</span>
              &nbsp;<span style={{ color: (basket.side2 == 'Buy') ? 'Blue' : 'Red', marginRight: '3px' }}>{basket.side2}</span>
              &nbsp;<img src={svgs("./" + basket.flag2.toLowerCase() + ".svg")} style={{ width: '30px' }} />
              &nbsp;<span>{basket.symbol2}</span>
              &nbsp;{basket.remainingSize2}
              &nbsp;{basket.measure2}
            </div>
          }
        </div>
      </div>
    </li>
  );
};

export default BasketListItem;
