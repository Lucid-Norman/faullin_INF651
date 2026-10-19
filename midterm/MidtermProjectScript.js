"use strict";

/*
  JavaScript Midterm
  Mini Expense Tracker

  Complete the application using the requirements
  provided in the exam instructions.


  this is a test
*/

// ------------------------------------
// 1. SELECT DOM ELEMENTS
// ------------------------------------

const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");


const addExpenseButton = document.getElementById("add-expense");
const resetButton = document.getElementById("reset");

const expenseList = document.getElementById("expense-list");
const expenseCount = document.getElementById("expense-count");

const totalAmount = document.getElementById("total");
const budgetMessage = document.getElementById("budget-status");
const statusMessage = document.getElementById("message");










// ------------------------------------
// 2. APPLICATION DATA
// ------------------------------------


let expenses = [];
const budget = 500;


//message for empty case
const emptyMessage = "No expenses added.";




// Create an empty array for expenses.
// Create a variable or constant for the budget.

// ------------------------------------
// 3. FUNCTIONS
// ------------------------------------



// Create a function for adding an expense.

function addExpense() {
    const description = description.Input.value.trim();
    const amountText = amountInput.value.trim();
    const amount = Number(amountText);
    const category = categorySelect.value;



    //cover the case if no description is entered
    if (description === "") {

        statusMessage.textContent = "Please enter a description.";
        return;

    }



    //covers invalid numbers, being empty, infinite or nonpositive
    if (amountText === "" || !Number.isFinite(amount) || amount <= 0) {

        statusMessage.textContent = "Please enter a valid amount."
        return;
    }


    //creates the object if input is valid
    const expense = {
        description: description, amount: amount, cateogry : category
    };


    //adds the object
    expenses.push(expense);

    //announce success
    statusMessage.textContent = "Expense successfully added.";


    //clear the inputs
    descriptionInput.value = "";
    amountInput.value = "";
    categorySelect.selectedIndex = 0;


    //update
    displayExpenses();
    calculateTotal();
    updateBudgetStatus();

}

// Create a function for displaying expenses.

function displayExpenses() {

    //clear the expense list
    expenseList.innerHTML = "";

    if (expenses.length === 0) {

        //adds the empty message back if the list was empty


        const emptyParagraph = document.createElement("p");
        emptyParagraph.classList.add("empty-message");
        emptyParagraph.textContent = emptyMessage;
        expenseList.appendChild(emptyParagraph);
    }
    else {


        //prints the info for each item
        expenses.forEach(function (expense) {

            const expenseItem = document.createElement("div");
            expenseItem.classList.add("expense-item")

            const expenseDetails = document.createElement("div");
            expenseDetails.classList.add("expense-details");

            const expenseDescription = document.createElement("p");
            expenseDescription.textContent = expense.description;

            const expenseCategory = document.createElement("p");
            expenseCategory.textContent = expense.category;

            const expenseAmount = document.createElement("p");
            expenseAmount.textContent = "$" + expense.amount.toFixed(2);

            expenseDetails.appendChild(expenseDescription);
            expenseDetails.appendChild(expenseCategory);

            expenseItem.appendChild(expenseDetails);
            expenseItem.appendChild(expenseAmount);

            expenseList.appendChild(expenseItem);



        })

        expenseCount.textContent = expenses.length + (expenses.length === 1 ? " Expense" : " Expenses");
        //covers both cases for if there are one or more expenses




    }






}

// Create a function for calculating the total.

function calculateTotal() {
    let total = 0;


    //adds to the amount
    expenses.forEach(function (expense) {
        total += expense.amount;
    });

    //takes care of the rounding
    total = Math.round((total + Number.EPSILON) * 100) / 100;

    //display the total
    totalAmount.textContent = "$" + total.toFixed(2);

    return total;
}

// Create a function for updating the budget status.



function updateBudgetStatus() {
    const total = calculateTotal();

    //remove the current budget status
    budgetMessage.classList.remove("under-budget", "over-budget");

    if (total <= budget) {
        budgetMessage.textContent = "You are under budget.";
        budgetMessage.classList.add("under-budget");
    } else {
        budgetMessage.textContent = "You are over budget.";
        budgetMessage.classList.add("over-budget");
    }
}

// Create a function for resetting the application.



function resetApplication() {
    //empty the expense array
    expenses = [];

    //manually clear the form with empty stuff
    descriptionInput.value = "";
    amountInput.value = "";
    categorySelect.selectedIndex = 0;

    //clear the status message
    statusMessage.textContent = "";

    //return the list and the length counter
    displayExpenses();

    //reset the total to zero
    totalAmount.textContent = "$0.00";

    //restore the budget status
    budgetMessage.textContent = "You are under budget.";
    budgetMessage.classList.remove("over-budget");
    budgetMessage.classList.add("under-budget");
}

// ------------------------------------
// 4. EVENT LISTENERS
// ------------------------------------

addExpenseButton.addEventListener("click", addExpense);


resetButton.addEventListener("click", resetApplication);




// Add an event listener to the Add Expense button.
// Add an event listener to the Reset button.