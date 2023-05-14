import "./../assets/css/home.css";
import Template from "./Template";

const Home = () => {
  return (
    <>
      <Template title="Upcoming events">
      <div className="events">
          <p className="event__date">August 4</p>
          <p className="event__name">NYSL Fundraiser</p>          
          <p className="event__date">August 16</p>
          <p className="event__name">Season Kick-off: Meet the Teams</p>
          <p className="event__date">September 1</p>
          <p className="event__name">First Game of the Season (Check Game Schedule for details)</p>
        </div>
      </Template>
    </>
  );
};
export default Home;