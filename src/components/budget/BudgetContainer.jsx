import { useState } from 'react';
import { BudgetForm } from './BudgetForm';
import { PrintBudget } from './PrintBudget';

export const BudgetContainer = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className=' d-flex flex-column justify-content-center '>
        <BudgetForm setRefresh={setRefresh} />
        <PrintBudget refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
};
