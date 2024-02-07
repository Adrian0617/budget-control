import React, { useEffect, useState } from 'react';
import {
  getTotalAmountSpents,
  getbudgetActual,
  percentBudgetSpent,
  totalSpents,
} from '../../helpers/getStasts';

export const Stats = ({ refresh, setRefresh }) => {
  const [dataStats, setdataStats] = useState([]);

  function getData() {
    const statsData = [
      {
        id: 1,
        name: 'Budget Actual',
        info: `$${getbudgetActual()}`,
      },
      {
        id: 2,
        name: 'total spents',
        info: totalSpents(),
      },
      {
        id: 3,
        name: 'Ttotal amount spent',
        info: `$${getTotalAmountSpents()}`,
      },
      {
        id: 1,
        name: 'percentage of budget used',
        info: `${percentBudgetSpent() === "NaN" ? 0 : percentBudgetSpent() }%`,
      },
    ];
    return statsData;
  }

  useEffect(() => {
    setdataStats(getData());
    console.log('se ejecuta', getData());
    setRefresh(false);
  }, [refresh]);

  return (
    <div style={{maxWidth: '450px'}} className='d-flex flex-wrap mb-5 '>
      {dataStats.map((stat) => (
        <div style={{width: '45%'}} className='card text-center m-2 mt-4' key={stat.id}>
          <div className='card-header'></div>
          <div className='card-body'>
            <h5 className='card-title'>{stat.name.toUpperCase()}</h5>
            <h3 className='card-text'>{stat.info}</h3>
          </div>
          {/* <div className='card-footer text-body-secondary'>2 days ago</div> */}
        </div>
      ))}
    </div>
  );
};
