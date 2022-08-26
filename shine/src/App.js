
import './App.css';
import Applicant from './Components/Applicant';
import ApplicantCard from './Components/ApplicantCard';
import { MainRouter } from './Components/MainRoutes/MainRouter';
import { Footer } from './Pages/Footer/Footer';

import HomePage from './Pages/HomePage';
import { Navbar } from './Pages/Navbar/navbar';

 

function App() {
  return (
    <div className="App">
    
      <MainRouter/>
      {/* <Applicant/> */}
      {/* <ApplicantCard/> */}

    </div>
  );
}

export default App;
