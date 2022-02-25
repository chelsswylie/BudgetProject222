// Selectors

let updateBudgetButton = document.querySelector("#update_budget_button");

let addExpenseButton = document.querySelector("#add_expense_button");

let monthlyBudget = document.querySelector("#monthly_budget");

let incomeInput = document.querySelector("#income_input");

let remainingBalance = document.querySelector("#remaining_balance");

let amountInput = document.querySelector("#amount_input");

let nameInput = document.querySelector("#name_input");

let expenseList = document.querySelector("#expense_list");

let totalExpenses = document.querySelector("#total_expenses");

// events
updateBudgetButton.onclick = updateBudget;
addExpenseButton.onclick = addExpense;

// variables
let monthlyIncome = 0;
let expenses = [];
let expenseTotal = 0;
let balance = 0;

// functions

function updateBudget(event) {
  event.preventDefault();
  monthlyIncome = incomeInput.value;
  monthlyBudget.innerText = "$" + monthlyIncome;
  updateBalance();
}
