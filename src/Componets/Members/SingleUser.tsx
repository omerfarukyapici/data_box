import React from 'react'

export const SingleUser = ({ user }: any) => {
    return (
        <div className='singleUser'>
            <div className='userİmg-p'>
                <img className="" src={user.picture.large} alt="" />
            </div>
            <div className='member-divs'>
                <div>⇨ {user.name.first} </div>
                <div>⇨ {user.name.last} </div>
                <div>⇨ {user.email} </div>
            </div>
        </div>
    )
}
