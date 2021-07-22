
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/About";
import Cards from "./components/Cards";
function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
          <Navbar/>
          <Form/>
          <Switch>
              <Route path = "/" exact component = {Home}/>
              <Route path = "/about" component = {About}/>
          </Switch>
        </div>
      </Router>
  );
}

const Home = () => {
       return(
           <Cards/>
       );
}

export default App;
