import { createContext, useState } from "react";
import Expense from "./components/Expense/Expense";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from 'react-router-dom';
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

export const newContext = createContext();
function App() {
  const [dm, setdm] = useState([]);
  // console.log(dm);
  const [count, setCount] = useState();
  return (
    <>
      <newContext.Provider value={{ setdm, dm, count, setCount }}>
        <Navbar />
        <Switch>
          <Route exact path="/"><Signup /></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/home"><Expense /></Route>
        </Switch>
      </newContext.Provider>
    </>
  );
}

export default App;
