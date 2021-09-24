   
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
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
                </Switch>    
            </div>
            <Footer />
        </div>
    </Router>        
  );
}

export default App;
