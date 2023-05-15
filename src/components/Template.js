import Header from "./Header";
import nysl_logo from "./../assets/images/nysl_logo.png";
import "./../assets/css/template.css";
import { signInWithGoogle, signOut } from "./../service/firebase";

const Template = ({ title, children }) => {
  return (
    <>
      <Header />
      <h2 className="title">{title}</h2>
      <div className="content">
        <img
          className="logo"
          src={nysl_logo}
          alt="northside youth soccer league logo"
        />
        <div>{children}</div>
      </div>
      <button onClick={signInWithGoogle}>Log in with Google</button>
      <button onClick={signOut}>Sign out</button>
    </>
  );
};

export default Template;
