import logo from './logo.svg';
import './App.css';




import Header from './Components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import News1 from './Components/News1';
import News2 from './Components/News2';
import News3 from './Components/News3';
import News4 from './Components/News4';


function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Header/>
  <Route path="/" exact component={News1}/>
  <Route path="/news2" exact component={News2}/>
  <Route path="/news3" exact component={News3}/>
  <Route path="/news4" exact component={News4}/> 
  </BrowserRouter>
    </div>
  );
}

export default App;
