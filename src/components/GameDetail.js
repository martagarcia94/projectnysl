import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Template from "./Template";
import { information } from "../assets/mocks/games.js";
import "./../assets/css/gameDetail.css";
import firebase from "firebase/compat/app";

const GameDetail = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const { month, id } = useParams();
  const [game, setGame] = useState({});
  const [location, setLocation] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    const currentGame = getCurrentGame();
    setGame(currentGame);
    setLocation(information.locations[currentGame.location]);
  }, []);

  const getGamesByMonth = () => {
    const games = information.games[month];
    const dates = Object.keys(games);

    const groupedGames = [];
    dates.forEach((date) => {
      games[date].games.map((game) => {
        groupedGames.push(game);
      });
    });

    return groupedGames;
  };

  const getCurrentGame = () => {
    const gamesByMonth = getGamesByMonth();
    return gamesByMonth.find((game) => game.id === Number(id));
  };

  getGamesByMonth();
  return (
    <>
      <Template title="Game Detail">
        <h2>Fall Schedule</h2>
        {user && <Link to={`/messages/${game.id}`}>Go to messages</Link>}
        <div className="game__detail">
          <p>{game.team}</p>
          <p>{game.location}</p>
          <p>{game.time}</p>
        </div>
        <p>{location.fullName}</p>
        <iframe className="game__map" src={location.mapUrl} />
      </Template>
    </>
  );
};

export default GameDetail;