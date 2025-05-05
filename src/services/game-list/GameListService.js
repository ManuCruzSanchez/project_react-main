import db from "../../firebaseConfig";

import { ref, get } from "firebase/database";

const dbRef = ref(db, "/gameList");

const getAllGameList = () => {
  return get(dbRef);
};

export default {
  getAllGameList,
};