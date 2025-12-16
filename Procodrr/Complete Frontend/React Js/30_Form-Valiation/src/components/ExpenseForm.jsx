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

  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const errorsData = {};

    if (!formData.title) {
      errorsData.title = "Title is required";
    }
    if (!formData.category) {
      errorsData.category = "category is required";
    }
    if (!formData.amount) {
      errorsData.amount = "Amount is required";
    }

    setErrors(errorsData);
    return errorsData;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expenseObj);

    if (Object.keys(validateResult)) return;

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
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setErrors({ ...errors, [name]: "" });
    setExpenseObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
          onChange={handleChangeInput}
        />
        <p className="error">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          // ref={categoryRef}
          id="category"
          name="category"
          value={expenseObj.category}
          onChange={handleChangeInput}
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
        <p className="error">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          // ref={amountRef}
          id="amount"
          name="amount"
          value={expenseObj.amount}
          onChange={handleChangeInput}
        />
        <p className="error">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
