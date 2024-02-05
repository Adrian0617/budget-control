import { useEffect, useState } from 'react';

export const PrintBudget = ({ setRefresh, refresh }) => {
  const [budget, setbudget] = useState(0);

  useEffect(() => {
    const budgetFromLocalStorage = localStorage.getItem('budget');
    setbudget(Number(budgetFromLocalStorage));
    setRefresh(false);
  }, [refresh]);

  return (
    <div className='card text-center mt-3'>
      {/* <div className='card-header'>Budget</div> */}
      <div className='card-body'>
        <h5 className='card-title'>Your budget </h5>
        <h3 className='card-text'>{budget}</h3>
        {/* <a href='#' className='btn btn-primary'>
          Go somewhere
        </a> */}
      </div>
      <div className='card-footer text-body-secondary'>2 days ago</div>
    </div>
  );
};
