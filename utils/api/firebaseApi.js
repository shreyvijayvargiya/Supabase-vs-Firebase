import firebase from "firebase";

export const usersFromFirebase = async() => {
  const users = [];
  const data = await firebase.firestore().collection("users").get();
  data.docs.map(item => {
    users.push(item.data())
  });
  return users;
}