import React from 'react';
import 'boxicons' 


const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <div className='List-Users'>
        <ul>
            {users.map((user)=>(
                <li key={user.id} className='Card-Users'>
                    <h3>{user.email}</h3>
                    <p className='Card-Password'>{user.password}</p>
                    <p>{user.first_name}{" "}{user.last_name}</p>
                    <p><i className='bx bx-calendar'></i>{user.birthday}</p>
                    <button onClick={()=>deleteUser(user)}><i className='bx bx-trash'></i></button>
                    <button onClick={()=>selectUser(user)}><i className='bx bx-pencil'></i></button>
                </li>
            ))}
            
        </ul>
        </div>
    );
};

export default UsersList;