import React from "react";
import { Link } from "react-router-dom";
import Template from "./Template";
import { information } from "./../assets/mocks/games.js";
import "./../assets/css/gameInformation.css"; 

const GameInformation = () => {
  const gamesInfo = information;
  const months = Object.keys(gamesInfo.games);
  const locations = Object.keys(gamesInfo.locations);

return (
    <>
      <Template title="NYSL Game Information">
        <h2>Fall Schedule</h2>
        <p>* All games take place on Saturday</p>
        {months.map((month, index) => (
          <table key={month + index} className="table game__table">
            <thead>
              <tr>
                <th scope="col">{month.toUpperCase()}</th>
                <th scope="col">Teams</th>
                <th scope="col">Location</th>
                <th scope="col">Times</th>
              </tr>
            </thead>
            <tbody>
            {months.map((month) =>
              Object.keys(gamesInfo.games[month]).map((date) =>
                gamesInfo.games[month][date].games.map((gameDetail, index) => (
                  <tr key={`${month}-${date}-${index}`}>
                    <td>{date}</td>
                    <td className="link"> 
                      <Link
                        to={`/games/${month}/${gameDetail.id}`}
                        className="game__link"
                      >
                        {gameDetail.team}
                      </Link>
                    </td>
                    <td>{gameDetail.location}</td>
                    <td>{gameDetail.time}</td>
                  </tr>
                ))
              )
            )}
          </tbody>
          </table>
        ))}
        <br></br>
        <p>
          <strong>GAME LOCATIONS:</strong>
          {locations.map((location, index) => (
            <div key={index}><br></br>
              <div className="game__details">
                <p>
                  <strong>{gamesInfo.locations[location].fullName}</strong>
                </p>
                <p>{gamesInfo.locations[location].address}</p>
              </div>
              <iframe
                className="game__map"
                src={gamesInfo.locations[location].mapUrl}
              />
            </div>
          ))}
        </p>
        <div className="final-info">
        <div className="general-info">
          <p>
            <strong>Facility Type: </strong>Outdoor
          </p>
          <br></br>
          <p>
            <strong>Additional Information: </strong>If deemed necessary by
            NYSL, games may be shortened or cancelled due to extreme weather
            conditions. Phone: (630) 690-8132 Email:
            michael.randall@chisoccer.org
          </p>
          <br></br>
          <p>
            <strong>Please direct all questions to: </strong>Michael Randall,
            League Coordinator
          </p>
          <br></br>
          <div className="contact-info">
            <p>
              <strong>Phone: <br></br></strong>(630) 690-8132
            </p>
            <br></br>
            <p>
              <strong>Email: <br></br></strong>{" "}
              <a className="mail" href="mailto:michael.randall@chisoccer.org">
                michael.randall@chisoccer.org
              </a>
            </p>
          </div>
        </div>
        </div>
      </Template>
    </>
  );
};

export default GameInformation;