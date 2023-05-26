import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "./../service/firebase";
import "./../assets/css/loginButton.css";

const LoginButton = ({ className }) => {
  const [user] = useAuthState(auth);

  const handleLoginClick = () => {
    if (!user) {
      auth.signInWithPopup(provider);
    } else {
      auth.signOut();
    }
  };

  return (
    <button className="login-button" onClick={handleLoginClick}>
      {user ? "Sign out" : "Log in with Google"}
    </button>
  );
};

export default LoginButton;