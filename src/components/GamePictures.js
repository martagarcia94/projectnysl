import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Template from "./Template";
import { storage } from "./../service/firebase";
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "./../service/firebase";
import { ref, set, onValue } from "firebase/database";

const GamePictures = () => {
  const { id } = useParams();
  const [pictures, setPictures] = useState([]);

  const uploadPicture = (event) => {
    const file = event.target.files[0];
    const pictureId = Math.floor(Math.random() * 10);
    const pictureRef = storageRef(
      storage,
      `/pictures/game-${id}/picture-${pictureId}`
    );

    const uploadTask = uploadBytesResumable(pictureRef, file);
    uploadTask.on("state_changed", () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        savePictureUrl(url, pictureId);
      });
    });
  };

  const savePictureUrl = (url, pictureId) => {
    set(ref(db, `/pictures/game-${id}/picture-${pictureId}`), url);
    readFromDatabase();
  };

  const readFromDatabase = () => {
    const query = ref(db, "pictures");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      const formattedPictures = formatPictures(data[`game-${id}`]);
      debugger;
      setPictures(formattedPictures);
    });
  };

  const formatPictures = (pictures) => {
    const picturesKeys = Object.keys(pictures);
    const formattedPictures = [];
    picturesKeys.forEach((pictureKey) => {
      formattedPictures.push(pictures[pictureKey]);
    });
    return formattedPictures;
  };

  return (
    <>
      <Template title="Game Pictures">
        <div>
          <label htmlFor="avatar">Choose a profile picture:</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={uploadPicture}
          />
        </div>
        <div>
          {pictures.map((picture) => (
            <img src={picture} alt="" />
          ))}
        </div>
      </Template>
    </>
  );
};

export default GamePictures;
