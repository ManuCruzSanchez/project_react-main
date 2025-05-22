import { useState, useEffect, useRef } from "react";
import UserListService from "../../services/user-list/UserListService";
import './UserList.css'
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

  const [errorMessage, setErrorMessage] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const mainGame = e.target.mainGame.value;
    const userName = e.target.userName.value;

    if (!name || !mainGame || !userName) {
      setErrorMessage("Por favor, rellena todos los campos.");
      return;
    }

    setErrorMessage(""); // Limpia el mensaje si todo está bien

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
      <div className="user-list-main-container">
        <div className="user-form-container">
          <form id="user-form" onSubmit={addUser} ref={refForm}>
            <p className="pagetext">Todos los campos son obligatorios de rellenar</p>
            <input className="rounded-input" type="text" name="name" placeholder="Nombre" required />
            <input className="rounded-input" type="text" name="mainGame" placeholder="Juego Principal" required />
            <input className="rounded-input" type="text" name="userName" placeholder="Usuario" required />
            <div className="form-buttom">
              <input className="form-buttom" type="submit" value="Añadir Jugador" />
            </div>
          </form>
        </div>

        <div className="user-list">
          <div className="head-user-info">
            <span className="title-user-info">Nombre</span>
            <span className="title-user-info">Juego</span>
            <span className="title-user-info">Usuario</span>
          </div>
          {users.map(b =>
            <div className="user-item" key={b.key}>
              <div className="user-info">
                <span>{b.name}</span>
                <span>{b.mainGame}</span>
                <span>{b.userName}</span>
              </div>
              <button className="delete-user" onClick={() => removeUser(b.key)}>Borrar</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserList;