import nysl_logo from "./../assets/images/nysl_logo.png";
import "./home.css";
import Header from "./Header";

const Home = () => {
  return (
    <>
    <Header />
      <h2 className="home__title">Upcoming events</h2>
      <div className="home__content">
        <img
          className="logo"
          src={nysl_logo}
          alt="northside youth soccer league logo"
        />
        <div className="events">
          <p className="event__date">August 4</p>
          <p className="event__name">NYSL Fundraiser</p>

          <p className="event__date">August 16</p>
          <p className="event__name">Season Kick-off: Meet the Teams</p>

          <p className="event__date">September 1</p>
          <p className="event__name">
            First Game of the Season (Check Game Schedule for details)
          </p>
        </div>
      </div>
      <div className="contact">
        <h2>Contact us</h2>
        <p>Please email us at nysl@chisoccer.org</p>
        <p>We will reply to your email as soon as we can.</p>
      </div>
    </>
  );
};

export default Home;