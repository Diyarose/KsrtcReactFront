import logo from './logo.svg';
import './App.css';
import LoginBus from './components/LoginBus';
import SignupBus from './components/SignupBus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LoginBus/>}/>
    <Route path='/signup' element={<SignupBus/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
