import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom"; 
import {useEffect} from "react";

const SignIn = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();


useEffect(() =>{
if(currentUser) {
				navigate("/dashboard");
}

},[currentUser, navigate])

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
       console.log(result.user);
				
				navigate("/dashboard");
			})
      .catch((error) => {
        console.error(error);
      });
  };
  if (currentUser) {

    return null; 
  }
 
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default SignIn;
