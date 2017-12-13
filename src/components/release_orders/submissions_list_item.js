import React from "react";

const svgs = require.context('../../../node_modules/svg-country-flags/svg/', true, /\.svg$/)
const keys = svgs.keys();

const SubmissionsListItem = ({ submission }) => {

  return (
    <li className="list-group-item  col-xs-12" style={{ width: '90%', marginLeft: '11px', marginBottom: '8px' }}>
      <div className="basket-list media" style={{ marginLeft: '-22px', marginBottom: '10px' }}>
        <div className="media-body">
          <div className="row" style={{ width: '110%' }}>
            <div className={ submission.side2 != undefined ? 'col-xs-7' : 'col-xs-8' }>
              <span style={{ marginLeft: '10px', color: (submission.side == 'Buy') ? 'Blue' : 'Red', marginRight: '3px' }}>{submission.side}</span>
              <img src={svgs("./" + submission.flag.toLowerCase() + ".svg")} style={{ width: '25px' }} />
              <span style={{ marginLeft: '3px', marginRight: '3px' }}>{submission.symbol}</span>
              <span style={{ marginRight: '3px' }}>{submission.size}</span>
              <span style={{ marginRight: '3px' }}>{submission.measure}</span>
              <span>|{submission.status}</span>
            </div>
            {submission.side2 != undefined &&
              <div className="col-xs-5" style={{ display: submission.side2 != undefined ? 'block' : 'none' }}>
                <span style={{ marginLeft: '-15px', marginRight: '3px' }}>vs.</span>
                <span style={{ color: (submission.side2 == 'Buy') ? 'Blue' : 'Red', marginRight: '3px' }}>{submission.side2}</span>
                <img src={svgs("./" + submission.flag2.toLowerCase() + ".svg")} style={{ width: '25px' }} />
                <span style={{ marginLeft: '3px', marginRight: '3px' }}>{submission.symbol2}</span>
                <span style={{ marginRight: '3px' }}>{submission.remainingSize2}</span>
                <span style={{ marginRight: '3px' }}>{submission.measure2}</span>
                <span>|{submission.status2}</span>
              </div>
            }
          </div>
          <div className="row" style={{ lineHeight: '40px', width: '150%' }}>
          <div className="col-xs-8">
            <span style={{ marginLeft: '15px' }}>% Executed:{submission.pctExecuted}</span>
            <span>,&nbsp;Avg. Price:{submission.avgPrice}</span>
            </div>
            {
              (submission.status !== 'Completed') &&
              <button type="button" className="btn btn-primary" style={{ height: '25px', lineHeight: '10px', marginLeft: '300px', marginTop: '-90px', marginBottom: '-10px' }}>Cancel</button>
            }
          </div>
          <div className="row" style={{ marginTop: (submission.status === 'Completed') ? '0px' : '-30px' }}>
            <span style={{ marginLeft: '15px' }}>Age:{submission.age}</span>
            <span>&nbsp;|&nbsp;Trader:{submission.traderInitial}</span>
            &nbsp;<span style={{ marginLeft: '130px' }}>
              <a href="tel:${submission.traderPhone}">{submission.traderPhone}</a>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SubmissionsListItem;
