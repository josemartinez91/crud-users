import React from 'react';
import Imagen from './img/deleteImage.svg'


const UserList = ({ users, deleteUser, editUser }) => {
    return (
        <div>
            <div className='title-container'>
                <h1 className='h1-list'>Users</h1>
            </div>
            <div>
                <ul className='card-container'>
                    {users.map(user => (
                        <li className='card-li' key={user.id}>
                            <div className='cars-user-div'>
                            <h2>{user.first_name} {user.last_name}</h2>
                            <p>{user.email}</p>
                            <p>{user.birthday}</p>
                            <span><button className='li-button' onClick={() => deleteUser(user.id)}>
                             
                            <i className="fa-solid fa-trash li-button-delete"></i>

                            </button> <button className='li-button' onClick={()=>editUser(user)}><i className="fa-solid fa-pen"></i></button></span>
                            </div>
                           
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserList;