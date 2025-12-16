import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] =
    useState(JSON.parse(localStorage.getItem("isDarkMode"))) || useState(false);

  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]}/>
    </>
  );
};

export default App;
