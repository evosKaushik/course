import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

const App = () => {
  return (
    <>
      <Navbar />
      <Counter />
      <h1>Zustand ToolKit</h1>
      <hr />
      <Posts />
    </>
  );
};

export default App;
