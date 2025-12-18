import "./App.css";
import Card from "./components/Card.tsx";
import ChaiCard from "./components/ChaiCard";
import ChaiList from "./components/ChaiList.tsx";
import Counter from "./components/Counter";
import { OrderForm } from "./components/OrderForm.tsx";
import type { Chai } from "./types.ts";

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 20 },
  { id: 2, name: "Ginger", price: 50 },
  { id: 3, name: "Lemon", price: 10 },
];

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <div>
          <ChaiCard name="Headphones" price={5000} />
          <ChaiCard name="Iphone" price={50000} />
        </div>
        <div>
          <Counter />
        </div>
        <div>
          <ChaiList items={menu} />
        </div>
        <div>
          <OrderForm
            onSubmit={(order) => {
              console.log(order);
            }}
          />
        </div>
        <div>
          <Card title="Chai aur TypeScript" footer={<h1>Order Now</h1>} />
        </div>
      </div>
    </>
  );
}

export default App;
