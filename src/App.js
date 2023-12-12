
import './App.css';
import Home from './components/Home';
import{BrowserRouter as Router,Link,Routes,Route,Navigate} from 'react-router-dom'
import SearchPage from './components/SearchPage';
function App() {
  return (
      
    <Router>
    <div className="App">
      <Routes>
      <Route exact path="/" element={ <Home/> } />
        
      <Route  path="/search" element={<SearchPage/>} /> 
      
       
    </Routes>
  </div>

    </Router>

      
   
  );
}

export default App;
