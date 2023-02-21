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
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-600 bg-[url('https://petfood.com.ar/img/cms/symphony.png')] pt-24">
      <section className="grid place-content-center  gap-10 lg:h-2/3 lg:w-2/3 lg:grid-cols-4">
        {members.map((person) => (
          <article
            key={person.name}
            className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-xl bg-slate-600  bg-gradient-to-b  from-slate-600 to-slate-900 p-5 text-white drop-shadow-button "
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src={person.img}
                className="h-40 w-40 rounded-full"
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
    </div>
  );
}

export default About;
