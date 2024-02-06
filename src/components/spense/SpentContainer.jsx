import { useState } from 'react';
import { ListsSpents } from './ListsSpents';
import { SpentForm } from './SpentForm';

export const SpentContainer = () => {
  const [refresh, setRefresh] = useState(false);
  const [editable, setEditable] = useState(null);
  return (
    <div className='d-flex justify-content-center flex-column'>
      <SpentForm
        setRefresh={setRefresh}
        setEditable={setEditable}
        refresh={refresh}
        editable={editable}
      />
      <ListsSpents
        setRefresh={setRefresh}
        setEditable={setEditable}
        refresh={refresh}
        editable={editable}
      />
    </div>
  );
};
