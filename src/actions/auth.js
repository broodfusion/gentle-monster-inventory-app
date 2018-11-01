import { firebase } from "../utils/firebase";

export const startLogin = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const login = uid => ({
  type: "LOGIN",
  uid
});

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
