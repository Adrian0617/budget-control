export const getbudget = () => Number(localStorage.getItem('budget'));

export const getSpents = () => JSON.parse(localStorage.getItem('spents')) || [];

export const getTotalAmountSpents = () => {
  const totalAmountSpents = getSpents().reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );
  return totalAmountSpents
}

export const getbudgetActual = () => {
  const budget = getbudget();
 
  const budgetActual = budget - getTotalAmountSpents();
  return budgetActual;
};

export const totalSpents = () => getSpents().length

export const percentBudgetSpent = ()=> ((getTotalAmountSpents()  / getbudget()) * 100).toFixed(2) ;
