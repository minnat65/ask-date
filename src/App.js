import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/container';
import YesComponent from './components/yes';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/meet' Component={YesComponent} />
        <Route path='/' Component={Container} />
      </Routes>
    </div>
  );
}

export default App;
