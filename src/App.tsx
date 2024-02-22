import React  from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './screens/Auth/Auth';
import MainScreen from './screens/MainScreen/MainScreen';
import FindTask from './screens/FindTask/FindTask';
import MyTask from './screens/MyTask/MyTask';
import Price from './screens/Price/Price';
import AboutLicense from './screens/AboutLicense/AboutLicense';
import HowToAdd from './screens/HowToAdd/HowToAdd';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainScreen />}/>
          <Route path='/find_task' element={<FindTask />}/>
          <Route path='/my_task' element={<MyTask />}/>
          <Route path='/price' element={<Price />}/>
          <Route path='/about_license' element={<AboutLicense />}/>
          <Route path='/how_to_add' element={<HowToAdd />}/>
          <Route path='/auth' element={<Auth />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
