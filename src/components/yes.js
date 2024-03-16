import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import DatePicker from "react-datepicker";
import emailjs from 'emailjs-com';
import gif from '../assets/demon-slayer1.gif';
import second from '../assets/DS-2.webp'
import "react-datepicker/dist/react-datepicker.css";
import './container.css';
const text = `
“The more I gaze
at Your face, the more
my eyes incline
toward Your vision
like one who dies of thirst
by the ocean shore,
lips to the wave,
thirstier and thirstier.”
― Fakhruddin Iraqi`

const YesComponent = () => {
  const history = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <>
      <div className='img-container'>
        {!isSubmit && <img
          src={gif}
          alt='GIF'
          style={{
            width: '100%',
            height: '100%',
            marginTop: 10,
          }}
        />}
        {isSubmit && <img
          src={second}
          alt='GIF'
          style={{
            width: '100%',
            height: '100%',
            marginTop: 10,
          }}
        />}
      </div>
      {!isSubmit && <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          // showTimeSelect
          showIcon
          toggleCalendarOnIconClick
          // customInput={<ExampleCustomInput />}
        />
      </div>}
      <div>
        {!isSubmit && <button
          className='yes' 
          style={{ paddingTop: 8, paddingBottom: 8 }}
          onClick={() => {
            if(!isSubmit) {
              emailjs.send(
                'service_r4t4dkm', 'template_2cstb1l', { date: startDate }, 'htVM6Jp3A6NU0VbKP'
                ).then((res) => {
                  console.log(res)
                })
                .catch((err) => {console.log(err)})
              setIsSubmit(!isSubmit);
            }
            // setIsSubmit(!isSubmit);
          }}
        >
          Freeze the Date.
      </button>}
      {isSubmit && 
        <pre style={{
        }}>
          {text}
        </pre>
      }
      </div>
      <button
        onClick={() => {console.log(history(-1))}}
        style={{
          position: 'absolute',
          bottom: 10,
          left: 10
        }}
      >
        back
      </button>
    </>
  )
}

export default YesComponent;