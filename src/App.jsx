import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ModalUsers from './components/ModalUsers'
import axios from 'axios'
import UserList from './components/UserList'


function App() {
  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {

    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsers(res.data))
  }, [])

  console.log(users)

  const getUsers = () => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsers(res.data))
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
      .then(getUsers)
  }

  const editUser = user => {
    setUserSelected(user)
    handleOpen()
  }
  const deselectUser = () => {
    setUserSelected(null)
  }


  return (
    <div className="App">
      <ModalUsers
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUser={deselectUser}
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
      />
      <UserList
        users={users}
        deleteUser={deleteUser}
        editUser={editUser}
      />
    </div>
  )
}

export default App
