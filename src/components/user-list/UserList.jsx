import { useState, useEffect, useRef } from "react";
import UserListService from "../../services/user-list/UserListService";
// import 

function UserList() {
    const [users, setUsers] = useState([]);
    const refForm = useRef();
  
    const getAllUsers = () => {
      UserListService.getAllUsers()
        .then((items) => {
          let allUsers = [];
          items.forEach(item => {
            const key = item.key;
            const data = item.val();
            allUsers.push({
              key: key,
              name: data.name,
              mainGame: data.mainGame,
              userName: data.userName
            });
          });
          setUsers([...allUsers]);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    const removeUser = (key) => {
      UserListService.removeUser(key).then((res) => {
        getAllUsers();
      });
    }
  
    const addUser = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const mainGame = e.target.mainGame.value;
      const userName = e.target.userName.value;
      UserListService.addUser(name, mainGame, userName).then((res) => {
        refForm.current.reset();
        setUsers(oldValues => [...oldValues, { key: res.key, name, mainGame, userName }])
      })
    }

    useEffect(() => {
      getAllUsers();
    }, []);

    return (
      <>
        <div className="bicycle-list-main-container">
          <div className="bicycle-form-container">
            <form id="bicycle-form" onSubmit={addUser} ref={refForm}>
              <input className="rounded-input" type="text" name="name" placeholder="Nombre"/>
              <input className="rounded-input" type="text" name="mainGame" placeholder="Juego Principal"/>
              <input className="rounded-input" type="text" name="userName" placeholder="Usuario"/>
              <input className="rounded-input" type="submit" value="AddUser"/>
            </form>
          </div>
  
          <div className="user-list">
            {users.map(b =>
              <div className="user-item" key={b.key}>
                <p>{b.name} {b.mainGame} {b.userName}</p>
                <button className="delete-user" onClick={() => removeUser(b.key)}>Borrar</button>
              </div>
            )}
          </div>
        </div>
      </>
    );
}

export default UserList;