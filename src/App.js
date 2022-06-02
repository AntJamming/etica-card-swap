import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import DCards from './DCards';
import Landing from './Landing';
import Cards from './components/Cards'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cards" element={<DCards />} />
          <Route path="/final" element={<h1>nosekeiria</h1>} />
          <Route path="/card" element={<Cards></Cards>} />

          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

