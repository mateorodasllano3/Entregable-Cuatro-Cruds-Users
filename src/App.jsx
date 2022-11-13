import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './Components/UsersForm'
import UsersList from './Components/UsersList'

function App() {

  const[users, setUsers] = useState([])
  const[userSelected, setUserSelected] = useState(null)
  const[userDelected, setUserDelected] = useState({})

  useEffect(()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res=> setUsers(res.data))
  },[])

  const getUser = () => {
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res=> setUsers(res.data))
  }

  const selectUser = (user) =>{
    setUserSelected(user)
  }

  const deselectUser = () =>  setUserSelected(null)
  
  const deleteUser = (user) => {
    setUserDelected(user)
    axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
    .then(()=>getUser())
    .catch(error=>console.log(error.response?.data))
  } 
  console.log(userDelected)
  console.log(users)
  return (
    <div className="App">
      <UsersList 
      users={users} 
      selectUser={selectUser}
      deleteUser={deleteUser}/>
      <UsersForm 
      getUser={getUser} 
      userSelected={userSelected}
      userDelected={userDelected}
      deselectUser={deselectUser}/>
      
    </div>
  )
}

export default App
