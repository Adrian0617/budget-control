import './App.css';
import { BudgetContainer } from './components/budget/BudgetContainer';
import { SpentContainer } from './components/spense/SpentContainer';

function App() {
  return (
    <div className='w-100 d-flex d-flex flex-wrap justify-content-around' >
      <BudgetContainer />
      {/* </div>
      <div> */}
      <SpentContainer />
    </div>
  );
}

export default App;
