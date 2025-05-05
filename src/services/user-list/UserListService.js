import db from "../../firebaseConfig";

import { ref, get, remove, push } from "firebase/database";

const dbRef = ref(db, "/users");

const getAllUsers = () => {
  return get(dbRef);
};

const addUser = (name, mainGame, userName) => {
  return push(dbRef, {
    name: name,
    mainGame: mainGame,
    userName: userName
  });
};

const removeUser = (key) => {
  const dbRefUser = ref(db, `/users/${key}`);
  return remove(dbRefUser);
};

export default {
  getAllUsers,
  addUser,
  removeUser,
};