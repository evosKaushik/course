import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({
  setExpenses,
  setExpenseObj,
  expenseObj,
  editingRowId,
  setEditingRowId,
}) => {
  const [errors, setErrors] = useState({});

  const validateConfig = {
    title: [
      { required: true, message: "Please enter title" },
      { minLength: 5, message: "title should be at least 3 character long" },
    ],
    category: [{ required: true, message: "Please select a category" }],
    amount: [
      { required: true, message: "Please enter an amount" },
      { isNumber: true, message: "Enter valid amount" },
    ],
  };

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validateConfig[key].some((rule) => {
        if (rule?.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule?.minLength && value.length < 3) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule?.isNumber && isNaN(value)) {
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

    if (editingRowId) {
      setExpenses((prevState) =>
        prevState?.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return { ...expenseObj, id: editingRowId };
          }
          return prevExpense;
        })
      );
      setExpenseObj({
        title: "",
        category: "",
        amount: 0,
      });
      setEditingRowId("");
      return;
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expenseObj, id: crypto.randomUUID() },
    ]);

    setExpenseObj({
      title: "",
      category: "",
      amount: 0,
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
          value={!expenseObj.amount ? "" : expenseObj.amount}
          onChange={handleChangeInput}
          error={errors.amount}
        />
      </div>
      <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
    </form>
  );
};

export default ExpenseForm;
