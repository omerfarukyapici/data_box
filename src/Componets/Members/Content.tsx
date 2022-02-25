import React from 'react'
import '../Style/Members.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { SingleUser } from './SingleUser';

export const Content = () => {

  const randomUserApi = "https://randomuser.me/api/?results=40";

  const [users, setUsers] = useState([]);

  const takeDataFromRandomUsers = async () => {

    const response = await axios.get(randomUserApi)

    setUsers(response.data.results)

  }

  useEffect(() => {

    console.log(takeDataFromRandomUsers())

  }, [])


  return (
    <div className='Member-P'>
      <div className='Member-C'>
        <div className='member'>
          {
            users.map((user, index) => (
              <div key={index}>
                <SingleUser user={user}  />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
