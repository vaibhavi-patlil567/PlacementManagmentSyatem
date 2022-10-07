import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginUi from "./pages/LoginUi";
import Add from "./pages/Add";
import Read from "./pages/Read";
import Update from "./pages/Update";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/loginui" exact component={LoginUi} />
            <Route path="/add" exact component={Add} />
            <Route path="/read" exact component={Read} />
            <Route path="/update" exact component={Update} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
