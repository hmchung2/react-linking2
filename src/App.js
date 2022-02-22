import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory,
  withRouter,
} from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import About component
import About from "./components/About";
// import ContactUs component
import ContactUs from "./components/ContactUs";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   // Update the document title using the browser API
  // });

  const history = useHistory();

  const goHome = () => {
    console.log("go home");
    history.push("/");
    //history.go(0);
  };

  return (
    <>
      <div>
        <button onClick={goHome}>Home</button>
      </div>
    </>
  );
}

export default withRouter(App);
