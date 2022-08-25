
import './App.css';
import { Footer } from './Pages/Footer/Footer';

import HomePage from './Pages/HomePage';
import { Navbar } from './Pages/Navbar/navbar';

 

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomePage/>
      <Footer/>

    </div>
  );
}

export default App;
