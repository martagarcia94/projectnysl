import Header from "./Header";
import nysl_logo from "./../assets/images/nysl_logo.png";
import "./../assets/css/template.css";

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
    </>
  );
};

export default Template;
