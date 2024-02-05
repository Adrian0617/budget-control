import { useState } from 'react';
import { ListsSpents } from './ListsSpents';
import { SpentForm } from './SpentForm';

export const SpentContainer = () => {
  const [refresh, setRefresh] = useState(false);
  return (
    <div className='d-flex justify-content-center flex-column'>
      <SpentForm setRefresh={setRefresh} refresh={refresh} />
      <ListsSpents setRefresh={setRefresh} refresh={refresh} />
    </div>
  );
};
