
import './App.css';
import Navbar from './component/navbar';
import AddBooks from './pages/AddBooks';
import Books from './pages/books';
import Home from './pages/home';
import Footer from './component/footer';
import {
  BrowserRouter as Router,Routes,Route,} from"react-router-dom";

function App() {
  return (
  
   
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path ="/" element= {<Home />} />
        <Route  path ="/books" element= {<Books />} />
        <Route  path ="/AddBooks" element= {<AddBooks/>} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
