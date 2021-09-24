   
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <Router>
        <div>
            <Header />
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projects" component={Projects} />
                </Switch>    
            </div>
            <Footer />
        </div>
    </Router>        
  );
}

export default App;
