import { useEffect, useState } from 'react';
import { format } from 'date-fns';


export const SpentForm = ({ setRefresh, refresh, editable, setEditable }) => {
  const [spentForm, setspentForm] = useState({
    name: '',
    amount: 0,
    spentDate: format(new Date(), 'yyyy-dd-MM'),
  });
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    if (editable) {
      setspentForm(editable);
      setIsEditable(true);
    }
    setRefresh(false);
  }, [refresh]);

  const handleInputChange = ({ target }) => {
    setspentForm({
      ...spentForm,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const spents = JSON.parse(localStorage.getItem('spents'));

    if (isEditable) {
      const saveSpense = spents.map((spent) =>
        spent.id === spentForm.id ? spentForm : spent
      );
      localStorage.setItem('spents', JSON.stringify(saveSpense));
      setEditable(null);
      alert(`${spentForm.name} has been updated`);
    } else {
      if (!spents) {
        localStorage.setItem(
          'spents',
          JSON.stringify([{ ...spentForm, id: Date.now() }])
        );
      } else {
        const saveSpense = [...spents, { ...spentForm, id: Date.now() }];
        localStorage.setItem('spents', JSON.stringify(saveSpense));
      }
    }
    setspentForm({
      name: '',
      amount: 0,
      spentDate: format(new Date(), 'yyyy-dd-MM'),
    });
    setRefresh(true);
    setIsEditable(false);
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
        required
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
      <button className='btn btn-dark w-100 mt-2'>
        {isEditable ? 'edit spent' : 'create spent'}
      </button>
    </form>
  );
};
