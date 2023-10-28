import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.comfig";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";



export const AuthContext = createContext()


const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true)

     //user create
     const createUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password )
     }

     const signIn = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     }


     //oberber
     useEffect(() => {
          const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser)
               console.log('current user', currentUser);
               setLoading(false)
          });
          return () => {
               return unsubscribe();
          }
     }, [])


     // signOut
     const signOut = () => {
          setLoading(true)
          return signIn(auth)
     }



     const authInfo = {
          user,
          loading,
          createUser,
          signIn,
          signOut,
     }

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;