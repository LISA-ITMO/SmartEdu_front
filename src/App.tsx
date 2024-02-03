import React  from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './screens/Auth';
import MainScreen from './screens/MainScreen';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainScreen />}/>
          <Route path='/auth' element={<Auth />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
