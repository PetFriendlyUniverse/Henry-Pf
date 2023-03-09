import { Link } from "react-router-dom";
import linkedln from "../../assets/socialmedia/linkedin.svg";
import github from "../../assets/socialmedia/github.svg";
import agustinimg from "../../assets/profileimg/agustinchavero.jpeg";
import benjaminimg from "../../assets/profileimg/benjamincastro.jpg";
import federicoimg from "../../assets/profileimg/federicoalmeida.jpeg";
import florenciaimg from "../../assets/profileimg/florenciamarcos.jpeg";
import imanolimg from "../../assets/profileimg/imanoldominguez.jpeg";
import maxiimg from "../../assets/profileimg/maximopermingeat.jpeg";
import pabloimg from "../../assets/profileimg/pabloamico.jpeg";
import stefanoimg from "../../assets/profileimg/stefanegemelli.jpeg";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useState, useEffect } from "react";
import Buttons from "../../assets/Buttons/Buttons.jsx";
import logo from "../../assets/logo/logo.png";
import htmlLogo from "../../assets/general/html-1.svg";
import cssLogo from "../../assets/general/css-3.svg";
import jsLogo from "../../assets/general/javascript-1.svg";
import nodeLogo from "../../assets/general/nodejs-1.svg";
import reactLogo from "../../assets/general/react-2.svg";
import reduxLogo from "../../assets/general/redux.svg";
import tailwindLogo from "../../assets/general/tailwind-css-2.svg";
import expressLogo from "../../assets/general/express-109.svg";
import postgressLogo from "../../assets/general/postgresql.svg";
import nativeLogo from "../../assets/general/react-native-1.svg";

import "react-loading-skeleton/dist/skeleton.css";

function About() {
  const members = [
    {
      name: "Agustin Chavero",
      img: agustinimg,
      github: "https://github.com/AgustinChavero",
      linkedln: "https://www.linkedin.com/in/agustin-daniel-chavero-267378255/",
    },
    {
      name: "Benjamin Castro",
      img: benjaminimg,
      github: "https://github.com/Yuarinaim",
      linkedln: "https://www.linkedin.com/in/benjamin-castro-554425255/",
    },
    {
      name: "Federico Almeida",
      img: federicoimg,
      github: "https://github.com/FedericoA15",
      linkedln: "https://www.linkedin.com/in/federico-jose-almeida/",
    },
    {
      name: "Florencia Marcos",
      img: florenciaimg,
      github: "https://github.com/FlorenciaMarcos",
      linkedln:
        "https://www.linkedin.com/in/florencia-alexandra-marcos-287063239/",
    },
    {
      name: "Imanol Dominguez",
      img: imanolimg,
      github: "https://github.com/imadominguez",
      linkedln: "https://www.linkedin.com/in/imanoldominguez/",
    },
    {
      name: "Maximiliano Permingeat",
      img: maxiimg,
      github: "https://github.com/mpermingeat",
      linkedln: "https://www.linkedin.com/in/maximilianopermingeat/",
    },
    {
      name: "Pablo Amico",
      img: pabloimg,
      github: "https://github.com/pablosecuen",
      linkedln: "https://www.linkedin.com/in/pablo-j-amico/",
    },
    {
      name: "Stefano Gemelli",
      img: stefanoimg,
      github: "https://github.com/stefanogemelli",
      linkedln: "https://www.linkedin.com/in/stefano-gemelli-b99186245/",
    },
  ];

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.scrollTo(0, 0);
  }, []);

  const loader = () => {
    return (
      <SkeletonTheme baseColor="#9c9c9c" highlightColor="white">
        <div className="lg: flex h-max  w-full items-center justify-center bg-adopcion  lg:pt-14">
          <section className="grid animate-pulse place-content-center gap-10  py-3 md:pb-10 md:pt-14 md:text-sm lg:h-2/3 lg:w-2/3 lg:grid-cols-4">
            {members.map((person) => (
              <article
                key={person.name}
                className="flex h-full w-full animate-pulse flex-col items-center justify-center gap-5 rounded-xl bg-gray-200 drop-shadow-button "
              >
                {" "}
                <Skeleton />
                <div className="flex flex-col items-center justify-center gap-3">
                  {" "}
                  <Skeleton className="h-40 w-40 rounded-full md:rounded-bl-lg" />
                  {/* <img
                  src={person.img}
                  className="h-40 w-40 rounded-full md:rounded-bl-lg"
                  alt={person.name}
                /> */}
                  <h2 className="text-xl font-semibold tracking-wide">
                    <Skeleton />
                  </h2>
                </div>
                <div className="flex  items-center justify-center gap-3">
                  <Skeleton />
                  <Link
                    target="_blank"
                    to={person.linkedln}
                    className="flex flex-col items-center justify-center gap-1"
                  >
                    <Skeleton />
                    {/* º<img src={linkedln} alt="linkedln" /> */}
                    <span className="font-semibold">
                      <Skeleton />
                    </span>
                  </Link>
                  <Link
                    to={person.github}
                    className="flex flex-col items-center justify-center gap-1"
                    target="_blank"
                  >
                    <Skeleton />
                    {/* <img src={github} alt="github" />{" "} */}
                    <span className="font-semibold">
                      <Skeleton />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </SkeletonTheme>
    );
  };
  if (loading) {
    return loader();
  } else {
    return (
      <div className="flex h-max w-full  flex-col items-center justify-center  bg-gray-600 bg-adopcion lg:pt-14">
        <div className="flex flex-col items-center justify-center sm:col-start-1 sm:col-end-3">
          <h1 className="text-center font-bold uppercase sm:text-2xl">
            PET FRIENDLY DEVELOPMENT
            <span className="font-bold uppercase text-cornflowerblue sm:text-2xl">
              {" "}
              TEAM
            </span>
          </h1>
        </div>
        <section className="flex flex-wrap place-content-center gap-10  py-3 md:pb-10 md:pt-14 md:text-sm lg:h-2/3 lg:w-2/3 lg:grid-cols-4">
          {members.map((person) => (
            <article
              key={person.name}
              className="flex h-[350px] w-[250px] flex-col items-center justify-center gap-5 rounded-xl bg-slate-600  bg-gradient-to-b  from-slate-600 to-cornflowerblue p-5 text-white drop-shadow-button "
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={person.img}
                  className="h-40 w-40 rounded-full md:rounded-bl-lg"
                  alt={person.name}
                />
                <h2 className="text-xl font-semibold tracking-wide">
                  {person.name}
                </h2>
              </div>
              <div className="flex  items-center justify-center gap-3">
                <Link
                  target="_blank"
                  to={person.linkedln}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <img src={linkedln} alt="linkedln" />
                  <span className="font-semibold">Linkedln</span>
                </Link>
                <Link
                  to={person.github}
                  className="flex flex-col items-center justify-center gap-1"
                  target="_blank"
                >
                  <img src={github} alt="github" />{" "}
                  <span className="font-semibold">Github</span>
                </Link>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-10 mb-10 flex flex-wrap items-center justify-center gap-6 self-center">
          <img src={htmlLogo} alt="Html" title="Html" className="w-24" />
          <img src={cssLogo} alt="Css" title="Css" className="w-24" />
          <img
            src={jsLogo}
            alt="Javascrip "
            title="Javascrip"
            className="w-24"
          />
          <img src={nodeLogo} alt="Node Js" title="Node Js" className="w-24" />
          <img
            src={reactLogo}
            alt="React Js"
            title="React Js"
            className="w-24"
          />
          <img
            src={reduxLogo}
            alt="Redux Toolkit"
            title="Redux Toolkit"
            className="w-24"
          />
          <img
            src={tailwindLogo}
            alt="Tailwind Css"
            title="Tailwind Css"
            className="w-24"
          />
          <img
            src={expressLogo}
            alt="Express Js"
            title="Express Js"
            className="w-24"
          />
          <img
            src={postgressLogo}
            alt="Postgress Sql"
            title="Postgress Sql"
            className="w-24"
          />
          <img
            src={nativeLogo}
            alt="React Native"
            title="React Native"
            className="w-24"
          />
        </div>
      </div>
    );
  }
}

export default About;
