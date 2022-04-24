import logo from "../views/logo.svg";
import "../styles/App.scss";
import ToDoParent from "./todoparent";
import ToDoList from "./todolist";
import ToDoListChild from "./todolist-child";
import Session3 from "./session3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contract from "./Contract";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/ToDo">
              <ToDoParent />
            </Route>
            <Route path="/About">
              <ToDoList />
            </Route>
            <Route path="/Contract">
              <Session3 />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
