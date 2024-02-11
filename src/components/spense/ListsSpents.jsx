import React, { useEffect, useState } from 'react';
import { BsFillPencilFill, BsXSquareFill } from 'react-icons/bs';
import { getSpents } from '../../helpers/getStasts';
import Swal from 'sweetalert2';

export const ListsSpents = ({ setRefresh, refresh, setEditable }) => {
  const [listSpenses, setlistSpenses] = useState([]);

  useEffect(() => {
    const spentlist = JSON.parse(localStorage.getItem('spents')) || [];
    setlistSpenses(spentlist);
    setRefresh(false);
  }, [refresh]);

  const handleDelete = (id) => {
    const spentlist = getSpents();
    const deleltedSpent = spentlist.filter((item) => item.id !== id);
    localStorage.setItem('spents', JSON.stringify(deleltedSpent));
    setRefresh(true);
  };

  const openConfrimDelete = (id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your spent has been deleted.",
          icon: "success"
        });
      }
    });
  }

  const handleEdit = (spense) => {
    setEditable(spense);
    setRefresh(true);
  };

  return (
    <div className='mt-5'>
      <h3>List of spents</h3>
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
                <button className='btn' onClick={() => openConfrimDelete(item.id)}>
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
