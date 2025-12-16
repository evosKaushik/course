import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({ setExpenses }) => {
  const [expenseObj, setExpenseObj] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const validateConfig = {
    title: [
      { required: true, message: "Please enter title" },
      { minLength: 5, message: "title should be at least 3 character long" },
    ],
    category: [{ required: true, message: "Please select a category" }],
    amount: [{ required: true, message: "Please enter an amount" }],
  };

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validateConfig[key].some((rule) => {
        if (rule?.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule?.minLength && value.length <= 3) {
          errorsData[key] = rule.message;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expenseObj);

    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expenseObj, id: crypto.randomUUID() },
    ]);

    console.log(expenseObj);

    setExpenseObj({
      title: "",
      category: "",
      amount: "",
    });
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setErrors({ ...errors, [name]: "" });

    setExpenseObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form className="expense-form" onSubmit={handleFormSubmit}>
      <div className="input-container">
        <Input
          label="Title"
          id="title"
          name="title"
          value={expenseObj.title}
          onChange={handleChangeInput}
          error={errors.title}
        />
      </div>
      <div className="input-container">
        <Select
          label="Category"
          id="category"
          name="category"
          value={expenseObj.category}
          onChange={handleChangeInput}
          error={errors.category}
          optionArray={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
          defaultOption="Select Category"
        />
      </div>
      <div className="input-container">
        <Input
          label="Amount"
          id="amount"
          name="amount"
          value={expenseObj.amount}
          onChange={handleChangeInput}
          error={errors.amount}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
