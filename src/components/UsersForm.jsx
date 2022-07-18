import React, { useEffect, useState } from 'react';

import axios from 'axios'

const UsersForm = ({ getUsers, handleClose, userSelected, deselectUser, handleOpen }) => {




    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birthday, setBirhtday] = useState('')

    useEffect(() => {
        if (userSelected) {
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirhtday(userSelected.birthday)
            handleOpen()
        }
    }, [userSelected])

    const reset = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setBirhtday('')
    }
    const clear = () => {
        deselectUser()
        reset()
    }

    const submit = (e) => {
        e.preventDefault()

        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            birthday
        }

        if (userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, newUser)
                .then(() => {
                    getUsers()
                    deselectUser()
                })
                .catch(error => console.log(error.respose))
        } else {
            axios.post(`https://users-crud1.herokuapp.com/users/`, newUser)
                .then(getUsers)
                .catch(error => console.log(error.response))
        }



        console.log(newUser)
        reset()
        handleClose()
    }

    return (
        <form onSubmit={submit} className='form-container'>
            <div>
                <label htmlFor="firstName">Name</label>
                <input
                    type="text"
                    id='firstName'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required='true'
                />
            </div>
            <div>
                <label htmlFor="lastName">Last name</label>
                <input
                    type="text"
                    id='lastName'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required='true'
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required='true'
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required='true'
                />

            </div>
            <div>
                <label htmlFor="birthday">Birthday</label>
                <input type="date"
                    id="birthday"
                    value={birthday}
                    onChange={e => setBirhtday(e.target.value)}
                    required='true'

                />
            </div>
            <div>
                <button>{userSelected === null ? 'Create' : 'Update'}</button>
                {userSelected !== null ? <button type='button' onClick={clear}>Clear</button> : ''}
            </div>


        </form>
    );
};

export default UsersForm;   