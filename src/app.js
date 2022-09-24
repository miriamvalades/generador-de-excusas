/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let intros = [
    "Va a sonar raro, pero",
    "Sé que suena raro, pero",
    "Sé que suena extraño, pero",
    "Seguramente no me creas, pero",
    "No te lo vas a creer, pero",
    "No me vas a creer, pero",
    "No vas a creerme, pero",
    "Me vas a odiar, pero",
    "No puedo ir porque",
    "Me vas a disculpar, pero",
    "Discúlpame, pero",
    "No voy a poder ir porque",
    "No puedo ir porque",
    "Sé que suena a excusa, pero",
    "Vas a pensar que es una excusa, pero",
    "Llego tarde porque",
    "No voy porque",
    "Me siento fatal, pero",
    "Estaba tranquilamente cuando de repente",
    "Estaba tranquilamente cuando",
    "Estaba a mis cosas cuando de repente",
    "Estaba atendiendo unos asuntos cuando de repente",
    "No puedo decirte la razón, pero digamos que",
    "Lamentablemente no podré asistir porque",
    "Me veo en la obligación de no asistir porque",
    "Me veo en la necesidad de no asistir porque",
    "Me veo en la obligación de no ir porque",
    "Me veo en la necesidad de no ir porque",
    "No puedo atender nuestro compromiso porque",
    "No puedo ir a la cita porque",
    "Me sabe fatal, pero"
  ];
  let subject = [
    "Voldemort",
    "Darth Vader",
    "un runner",
    "un mapache",
    "un perro",
    "un gato",
    "un taxista",
    "mi tío",
    "mi padre",
    "mi madre",
    "un bebé",
    "mi mayor enemigo",
    "mi mayor enemiga",
    "mi ansiedad rampante",
    "mi depresión",
    "un youtuber",
    "un grupo de tiktokers",
    "mi cantante favorito",
    "mi vértigo",
    "mi miedo a las alturas",
    "mi pez",
    "un cura",
    "mi profesor de yoga",
    "mi psicóloga",
    "el covid",
    "mi crisis existencial",
    "el patriarcado",
    "el veterinario",
    "mi cita de Tinder",
    "mi ex",
    "mi nutricionista",
    "una horda de zombis"
  ];
  let action = [
    "ha cogido",
    "ha tirado",
    "ha perdido",
    "ha extraviado",
    "ha gritado a",
    "ha robado",
    "ha mordido",
    "ha escondido",
    "se ha comido",
    "ha evaporado",
    "ha echado una maldición a",
    "se ha fumado",
    "me ha impedido coger",
    "me ha impedido ir a por",
    "me ha prohibido coger",
    "ha olvidado",
    "ha quemado",
    "ha vendido por Amazon",
    "se ha fugado con",
    "ha atropellado a",
    "ha hackeado",
    "ha enterrado",
    "ha llegado tarde con",
    "me ha recomendado no buscar",
    "me ha recomendado buscar",
    "me ha recomendado no acercarme a",
    "me ha prohibido acercarme a",
    "ha apostado"
  ];
  let possession = [
    "mis deberes",
    "mi coche",
    "mis zapatos",
    "mi Instagram",
    "mi cartera",
    "mi Wi-Fi",
    "mi móvil",
    "mi cuenta de Netflix",
    "mis guantes de boxeo",
    "mi felicidad",
    "mis ganas de vivir",
    "una papaya",
    "mis sueños",
    "mis ansias de libertad",
    "mi pin del móvil",
    "gente tóxica"
  ];
  let where = [
    "en la calle",
    "en mi casa",
    "en la carretera",
    "en la consulta del médico",
    "en la peluquería",
    "en el dentista",
    "en el parque",
    "en el cine",
    "en el baño",
    "en el estanco",
    "en Starbucks",
    "en Jamaica",
    "en la guardería",
    "en misa",
    "en un funeral",
    "en Fortnite",
    "en el metro",
    "en la piscina",
    "en la oficina",
    "en el parque de atracciones",
    " ",
    " ",
    " ",
    " "
  ];

  let intIndex = Math.floor(Math.random() * intros.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let posIndex = Math.floor(Math.random() * possession.length);
  let wheIndex = Math.floor(Math.random() * where.length);

  return (
    intros[intIndex] +
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
