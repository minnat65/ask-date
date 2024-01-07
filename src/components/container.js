import { useState } from 'react';
import './container.css';
import { Link, useNavigate } from 'react-router-dom';
import gif from '../assets/zenitsu-DS.gif';
// import YesComponent from '.';

const getValInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const Container = () => {
  const navigate = useNavigate()
  const [obj, setObj] = useState({})
  const positionHandler = () => {
    const x = getValInRange(-window.innerWidth / 2, window.innerWidth / 2 - 100);
    const y = getValInRange(0, window.innerHeight / 2);

    const newObj = {
      position: 'relative',
      top: y,
      left: x,
    }
    setObj(newObj);
  };

  return (
    <div className='container'>
      <div>
        <p className='para'>Let's meet</p>
        <img src={gif} alt='GIF' className='zanitsu' />
        <div style={{}}>
          <button className='yes' onClick={() => {navigate('/meet')}}>Yes</button>
          <button
            className='no'
            onMouseOver={() => {positionHandler()}}
            onClick={() => {positionHandler()}}
            style={obj}
          >
            No
          </button>
        </div>
        <p style={{ position: 'absolute', left: 10, bottom: 5 }}>
          Minnat Ali <Link to='https://github.com/minnat65/ask-date' target='_blank' >GitHub</Link>
        </p>
      </div>
    </div>
  )
};

export default Container;