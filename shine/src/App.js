import logo from './logo.svg';
import './App.css';
import { HomePage } from './Pages/HomePage';
import {Button} from "@chakra-ui/react";
import {useSelector,useDispatch} from "react-redux"
import {loginOutData} from "./Redux/action";

function App() {
  const store=useSelector(state=>state.AuthReducer);
  console.log(store,"storeatlogout");
  const dispatch=useDispatch();
  console.log(store);
  const handleLogOut=()=>{
    dispatch(loginOutData());
  }
  return (
    <div className="App">
      <HomePage/>
      <Button onClick={handleLogOut}>Logout</Button>
    </div>
  );
}

export default App;
