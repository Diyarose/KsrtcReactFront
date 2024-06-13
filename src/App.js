import logo from './logo.svg';
import './App.css';
import LoginBus from './components/LoginBus';
import SignupBus from './components/SignupBus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBus from './components/AddBus';
import ViewBus from './components/ViewBus';
import SearchBus from './components/SearchBus';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LoginBus/>}/>
    <Route path='/signup' element={<SignupBus/>}/>
    <Route path='/add' element={<AddBus/>}/>
    <Route path='/view' element={<ViewBus/>}/>
    <Route path='/search' element={<SearchBus/>}/>
    

   </Routes>
   </BrowserRouter>
  );
}

export default App;
