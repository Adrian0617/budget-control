import { useState } from 'react';

export const SpentForm = ({setRefresh}) => {
  const [spentForm, setspentForm] = useState({
    id: Date.now(),
    name: '',
    amount: 0,
    spentDate: '',
  });

  const handleInputChange = ({ target }) => {
    setspentForm({
      ...spentForm,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const spents = JSON.parse(localStorage.getItem('spents'));
    if (!spents) {
      localStorage.setItem('spents', JSON.stringify([spentForm]));
    } else {
      const saveSpense = [...spents, spentForm];
      localStorage.setItem('spents', JSON.stringify(saveSpense));
    }
    setRefresh(true)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nameSpent'>Name:</label>
      <input
        type='text'
        className='form-control'
        name='name'
        id='nameSpent'
        value={spentForm.name}
        onChange={handleInputChange}
      />
      <label htmlFor='nameSpent'>Amount:</label>
      <input
        type='Number'
        className='form-control'
        name='amount'
        id='amount'
        value={spentForm.amount}
        onChange={handleInputChange}
      />
      <label htmlFor='spentDate'>Spent Date:</label>
      <input
        type='date'
        id='spentDate'
        name='spentDate'
        className='form-control'
        value={spentForm.spentDate}
        onChange={handleInputChange}
      />
      <button className='btn btn-dark w-100 mt-2'>create spent</button>
    </form>
  );
};
