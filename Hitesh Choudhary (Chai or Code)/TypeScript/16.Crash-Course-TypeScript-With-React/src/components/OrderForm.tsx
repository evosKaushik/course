import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

export const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, cups });
  };

  return (
    <>
      <h1>Order Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Chai Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="cups">Cups</label>
          <input
            type="number"
            id="cups"
            value={cups}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCups(+e.target.value || 0)
            }
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </>
  );
};
