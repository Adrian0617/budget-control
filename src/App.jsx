import { useState } from 'react';
import './App.css';
import { BudgetContainer } from './components/budget/BudgetContainer';
import { SpentContainer } from './components/spense/SpentContainer';
import { Header } from './components/layouts/Header';

function App() {
  const [refresh, setRefresh] = useState(false);
  const [editable, setEditable] = useState(null);
  return (
    <>
      <Header />
      <div className='w-100 d-flex d-flex flex-wrap justify-content-around'>
        <BudgetContainer
          refresh={refresh}
          editable={editable}
          setRefresh={setRefresh}
          setEditable={setEditable}
        />
        {/* </div>
      <div> */}
        <SpentContainer
          refresh={refresh}
          editable={editable}
          setRefresh={setRefresh}
          setEditable={setEditable}
        />
      </div>
    </>
  );
}

export default App;
