import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="p-4 md:p-8">
        <Outlet />
      </main>
    </>
  );
}

export default App;
