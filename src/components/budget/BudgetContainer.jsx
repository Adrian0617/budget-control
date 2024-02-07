import { useState } from 'react';
import { BudgetForm } from './BudgetForm';
import { PrintBudget } from './PrintBudget';
import { Stats } from './Stats';

export const BudgetContainer = ({refresh, setRefresh}) => {

  return (
    <div className=' d-flex flex-column justify-content-center '>
      <BudgetForm setRefresh={setRefresh} />
      <PrintBudget refresh={refresh} setRefresh={setRefresh} />
      <Stats refresh={refresh} setRefresh={setRefresh} />
    </div>
  );
};
