import React, { useEffect, useState } from 'react';
import { BsFillPencilFill, BsXSquareFill } from 'react-icons/bs';

export const ListsSpents = ({ setRefresh, refresh, setEditable }) => {
  const [listSpenses, setlistSpenses] = useState([]);

  useEffect(() => {
    const spentlist = JSON.parse(localStorage.getItem('spents')) || [];
    setlistSpenses(spentlist);
    setRefresh(false);
  }, [refresh]);

  const handleDelete = (id) => {
    const spentlist = JSON.parse(localStorage.getItem('spents'));
    const deleltedSpent = spentlist.filter((item) => item.id !== id);
    console.log({ deleltedSpent });
    localStorage.setItem('spents', JSON.stringify(deleltedSpent));
    setRefresh(true);
  };

  const handleEdit = (spense) => {
    console.log(spense);
    setEditable(spense);
    setRefresh(true);
  };

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Date</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {listSpenses.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.spentDate}</td>
              <td>
                <button className='btn' onClick={() => handleDelete(item.id)}>
                  <BsXSquareFill />
                </button>
                <button className='btn' onClick={() => handleEdit(item)}>
                  <BsFillPencilFill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
