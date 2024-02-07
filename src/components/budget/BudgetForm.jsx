import { useRef } from 'react';
import Swal from 'sweetalert2';

export const BudgetForm = ({ setRefresh }) => {
  const inputBudget = useRef(null);

  const saveBudget = () => {
    const budget = inputBudget.current.value;
    if (inputBudget.current.value === '') return;
    localStorage.setItem('budget', budget);
    inputBudget.current.value = '';
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your budget has been created',
      showConfirmButton: false,
      timer: 1000,
    });
    setRefresh(true);
  };

  return (
    <>
      <h3>Create your Budget</h3>
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
    </>
  );
};
