import './App.scss';
import { BrowserRouter, Outlet } from "react-router-dom"
import AppRouter from './Components/AppRouter';
import Header from './Components/Header';

function App() {
  return (
   <BrowserRouter> 
   <div className="App">
    <Header />
      <AppRouter />
      
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
