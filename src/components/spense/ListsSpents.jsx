import React, { useEffect, useState } from 'react';

export const ListsSpents = ({ setRefresh, refresh }) => {
  const [listSpenses, setlistSpenses] = useState([]);

  useEffect(() => {
    const spentlist = JSON.parse(localStorage.getItem('spents'));
    setlistSpenses(spentlist);
    setRefresh(false);
  }, [refresh]);

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {listSpenses.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{item.spentDate}</td>
          </tr>

          ))}
        </tbody>
      </table>
      
    </div>
  );
};
