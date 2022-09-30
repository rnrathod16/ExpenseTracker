import { createContext, useState } from "react";
import Expense from "./components/Expense/Expense";
import Navbar from "./components/Navbar/Navbar";

export const newContext = createContext();
function App() {
  const [dm, setdm] = useState();
  // console.log(dm);
  return (
    <>
      <newContext.Provider value={{ setdm, dm }}>
        <Navbar />
        <Expense />
      </newContext.Provider>
    </>
  );
}

export default App;
