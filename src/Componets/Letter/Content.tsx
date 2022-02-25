import React from 'react'

import '../Style/Letter.scss';
import { useState } from 'react';
import { text } from 'stream/consumers';

export const Content = () => {

  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [eMail, seteMail] = useState("");
  const [Message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [counter, setCounter] = useState(0);


  const showDataİntoLetter = () => {
    if (name === "" || lastName === "" || eMail === "" || Message === "" || date === "") {
      setCounter(counter + 0)
    } else {
      setCounter(counter + 1)
    }
  }

  return (
    <div className='L-P'>
      <div>
        <div className='L-C'>
          <div>
            <div>
              <h2>Letter to Your Feature</h2>
            </div>
            <div>
              <p>Enter Your Name</p>
              <input value={name} onChange={e => setName(e.target.value)} type={"text"} placeholder="Name" />
            </div>
            <div>
              <p>Enter Your Last Name</p>
              <input value={lastName} onChange={e => setlastName(e.target.value)} type={"text"} placeholder="Last Name" />
            </div>
            <div>
              <p>Enter Your E-Mail</p>
              <input value={eMail} onChange={e => seteMail(e.target.value)} type={"e-mail"} placeholder="E-mail" />
            </div>
            <div>
              <p>Enter Message to your Feature</p>
              <textarea value={Message} onChange={e => setMessage(e.target.value)} placeholder='Message' />
            </div>
            <div>
              <p>Enter Feature Date</p>
              <input value={date} onChange={e => setDate(e.target.value)} type={"text"} placeholder="Date" />
            </div>
            <div>
              <button onClick={() => { showDataİntoLetter() }}>
                Create Letter
              </button>
            </div>
          </div>
        </div>



        <div className='L-Parent'>
          {
            counter === 1 ?
                <div className='Letter'>
                  <div>
                    <p> Congratulations! 🥳</p>
                    <p> Dear, <span>{name} {lastName}</span> </p>
                    <p> Your E-mail : <span>{eMail}</span>  </p>
                    <p> Your Message to Feature : <span>{Message}</span>  </p>
                    <p> Feature Date : <span>{date}</span>  </p>

                    <p>We hope u a great Time <span>{name}</span> have a nice day 👋.</p>
                  </div>
                </div>
                
              : <div>Please Enter Your Data to create a Letter to Feature  !</div>
          }
        </div>



      </div>


    </div>

  )
}
