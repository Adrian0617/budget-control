import { useRef } from 'react';

export const BudgetForm = ({setRefresh}) => {
  const inputBudget = useRef(null);

  const saveBudget = () => {
    const budget = inputBudget.current.value;
    if (inputBudget.current.value === '') return;
    localStorage.setItem('budget', budget);
    inputBudget.current.value = ""
    setRefresh(true)
  };

  return (
    <div className='input-group '>
      {/* <span className='input-group-text'>enter yout budget</span> */}
      <span className='input-group-text'>$</span>
      <input
        type='number'
        className='form-control'
        placeholder='Enter your budget'
        ref={inputBudget}
      />
      <button onClick={saveBudget} type='button' className='btn btn-dark'>
        create
      </button>
    </div>
  );
};
