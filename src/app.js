/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Miriam from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The", "My", "Your", "My neighbour's"];
  let subject = ["jogger", "raccoon", "dog", "driver", "comediant", "pinecone"];
  let action = [
    "took my",
    "threw my",
    "yelled at my",
    "stole my",
    "bit my",
    "hid my",
    "ate my"
  ];
  let possession = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let posIndex = Math.floor(Math.random() * possession.length);
  let wheIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    possession[posIndex] +
    " " +
    where[wheIndex]
  );
};
