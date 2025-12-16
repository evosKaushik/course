import { useState } from "react";

const ExpenseForm = ({ setExpenses }) => {
  const [expenseObj, setExpenseObj] = useState({
    title: "",
    category: "",
    amount: "",
  });

  // const titleRef = useRef(null);
  // const categoryRef = useRef(null);
  // const amountRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!expenseObj.title && !expenseObj.amount && !expenseObj.category) return;
    setExpenses((prevState) => [
      ...prevState,
      { ...expenseObj, id: crypto.randomUUID() },
    ]);
    // setExpenses((prevState) => [
    //   ...prevState,
    //   {
    //     id: crypto.randomUUID(),
    //     title: titleRef.current.value,
    //     category: categoryRef.current.value,
    //     amount: amountRef.current.value,
    //   },
    // ]);

    setExpenseObj({
      title: "",
      category: "",
      amount: "",
    });
  };
  return (
    <form className="expense-form" onSubmit={handleFormSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          // ref={titleRef}
          id="title"
          name="title"
          value={expenseObj.title}
          onChange={(e) =>
            setExpenseObj((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          // ref={categoryRef}
          id="category"
          name="category"
          value={expenseObj.category}
          onChange={(e) =>
            setExpenseObj((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          // ref={amountRef}
          id="amount"
          name="amount"
          value={expenseObj.amount}
          onChange={(e) =>
            setExpenseObj((prevState) => ({
              ...prevState,
              amount: e.target.value,
            }))
          }
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
