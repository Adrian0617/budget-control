import { ListsSpents } from './ListsSpents';
import { SpentForm } from './SpentForm';

export const SpentContainer = ({
  refresh,
  editable,
  setRefresh,
  setEditable,
}) => {
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
