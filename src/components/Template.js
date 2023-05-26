import Header from "./Header";
import nysl_logo from "./../assets/images/nysl_logo.png";
import "./../assets/css/template.css";
import LoginButton from './LoginButton';

const Template = ({ title, children }) => {
  return (
    <>
      <Header />
      <h2 className="title">{title}</h2>
      <div className="content"><br></br>
        <img
          className="logo"
          src={nysl_logo}
          alt="northside youth soccer league logo"
        />
        <div><br></br>{children}</div>
      </div>
      <LoginButton className="login-button" />
    </>
  );
};

export default Template;
